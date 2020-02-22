import React, { FunctionComponent } from 'react';
import { 
          Paper, 
          Table, 
          TableBody, 
          TableCell, 
          TableContainer, 
          TableHead, 
          TableRow, 
          Typography,
          makeStyles,
        } from '@material-ui/core';
import { Balance } from '../../lib';


export type MovementsTableProps = {
  balance: Balance,
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    maxWidth: "80%",
    margin: "auto",
    marginTop: 50,
  },
  tableHead: {

  },
  description: {
    color: "#d9d1d0",
  },
  fixedWidth: {
    width: 100,
  },
});

const formatAmount = (amount: number): string => {
  return amount.toFixed(2);
}

const MovementsTable: FunctionComponent<MovementsTableProps> = ({balance}) => {
  const classes = useStyles();
  return (
  <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead className={classes.tableHead}>
          <TableRow>
            <TableCell align="right">
              {balance.balanceInfo.date.getDate()}/
              {balance.balanceInfo.date.getMonth()}/
              {balance.balanceInfo.date.getFullYear()}
            </TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right">
              </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {balance.transactions.map( (tx, i) => (
            <TableRow key={i}>
              <TableCell><div>
                <Typography variant="subtitle2">
                  {tx.name}
                </Typography>
                <Typography variant="caption" className={classes.description}>
                  {tx.description}
                </Typography>
                </div>
              </TableCell>
              <TableCell align="right" className={classes.fixedWidth}>{tx.positive? null : `-${formatAmount(tx.amount)}` }</TableCell>
              <TableCell align="right" className={classes.fixedWidth}>{tx.positive? `+${formatAmount(tx.amount)}` : null} </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MovementsTable;