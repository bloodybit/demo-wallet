import React, {FunctionComponent, useEffect, useState } from 'react';
import { Account, BalanceIterator, BalanceStore } from '../lib';
import { Chart, MovementsTable } from './../components';
import { makeStyles } from '@material-ui/core';

export type AccountViewProps = {
  account: Account,
}

const useStyles = makeStyles({
  chart: {
    width: "80%",
    margin: "auto",
  },
  splitView: {
    height: "80vh",
  },
  tables: {
    marginTop: "5%",
    marginBottom: 0,
    height: "50vh",
    overflow: "overlay",
  }
})

const AccountView: FunctionComponent<AccountViewProps> = ({account}) => {

  const classes = useStyles()

  const balanceStore  = new BalanceStore()
  const balanceIterator = new BalanceIterator(balanceStore, account, new Date(), Number.MAX_VALUE);
  const balances = balanceIterator.getCurrent(); // only load it once
  const [chartHeight, setChartHeight] = useState(0);
  const [chartWidth, setChartWidth] = useState(0);
  
  useEffect( () =>{
    const analyzeScreen = () => {
      const splitViewDimension = document.getElementById('split-view')
      if( splitViewDimension) {
        setChartHeight(splitViewDimension.clientHeight /3);
        setChartWidth(splitViewDimension.clientWidth)
      }
    }

    analyzeScreen();
  })
  

  return (
    <div>
      <div className={classes.splitView} id="split-view">    
        <div className={classes.chart} >
          {chartHeight && chartWidth &&  <Chart balances={balances} height={chartHeight} width={chartWidth}/>}
        </div>
        <div className={classes.tables}>
          {balances.map(balance => {
            return <div key={balance.balanceInfo.date.toString()}>
              <MovementsTable balance={balance}/>
              </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default AccountView;