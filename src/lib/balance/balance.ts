import statements from "../../resources/statements";
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


  static getBeforeOrEqualDate(iban: string, beforeOrEqualDate: Date) {
    return statements.reduce((result: Balance[], statement: any) => {
      if(result.length < 1 && statement.iban === iban) {
        let currentDate = new Date(statement.date); // I assume that dates are in desc order
        
        if(currentDate.getFullYear() <= beforeOrEqualDate.getFullYear() &&
            currentDate.getMonth() <= beforeOrEqualDate.getMonth()  &&
            currentDate.getDate()  <= beforeOrEqualDate.getDate()
        ) {
          const transactions =  Transaction.buildTransactionsFromStatement(statement.transactions);
          
          const balance = new Balance(
            new BalanceInfo(
              statement.balances[1].amount, 
              statement.balances[1].debit_credit === "credit", 
              new Date(statement.balances[1].date)
            ), 
            new BalanceInfo(
              statement.balances[0].amount, 
              statement.balances[0].debit_credit === "credit", 
              new Date(statement.balances[0].date)
            ), 
            transactions
          );
          
          result.push(balance);
        }
      }
      return result;
    }, [])
  }
}