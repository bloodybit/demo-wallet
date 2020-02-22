import React, {FunctionComponent} from 'react';
import { Balance } from '../../lib';
import {Line} from 'react-chartjs-2';
import { Theme, makeStyles } from '@material-ui/core';



const chartData = (labels: any, data: any) => {return {
  labels,
  datasets: [
    {
      label: 'Balance',
      fill: true,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius:10,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 4,
      pointHitRadius: 10,
      data,
      
      showTooltips: true,
      spanGaps: true
    },
  ],
}};

const options = {
  responsive: true,
  // maintainAspectRatio: false,
  scales: {
    yAxes: [{
        ticks: {
          callback: function(value: number) {
            return value.toFixed(2) + " €";
          }
        },
    }],
    // xAxes: [{
    //   ticks: {
    //     maxTicksLimit: 20
    //   }
    // }]
}
}

export type ChartPropsType = {
  balances: Balance[],
  height: number,
  width: number,
}


const Chart: FunctionComponent<ChartPropsType> = ({balances, ...props}) => {
  const labelStart = balances[0].balanceInfo.date;
  const labelFinish = balances[balances.length-1].balanceInfo.date;
  const labels = [];
  const data = [];
  const tmpBalance = balances.slice(); // I want to clone balances

  for(let currentDate = labelStart; currentDate>=labelFinish; currentDate = new Date(currentDate.getTime() - 24*60*60*1000)) {
    const balanceToAdd = tmpBalance.find(balance => balance.balanceInfo.date.getDate() === currentDate.getDate());
    labels.push(`${currentDate.getDate()}/${currentDate.getMonth()}/${currentDate.getFullYear()}`);
    data.push(balanceToAdd?.balanceInfo.amount);
  }

  return <div>
    <Line data={chartData(labels, data)} options={options} height={props.height} width={600}/>
  </div>
}

export default Chart;