
import {Transaction} from '..';
import { BalanceInfo } from ".";

export default class Balance {
  
  readonly balanceInfo: BalanceInfo;
  readonly previousBalanceInfo: BalanceInfo;
  readonly transactions: Transaction[];
  
  constructor(balanceInfo: BalanceInfo, previousBalanceInfo: BalanceInfo, transactions: Transaction[]){
    this.balanceInfo = balanceInfo;
    this.previousBalanceInfo = previousBalanceInfo;
    this.transactions = transactions;
  }


  
}