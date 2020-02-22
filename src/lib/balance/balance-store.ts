import { Account, Transaction } from '..';
import { Balance, BalanceInfo, BalanceIterator, IBalanceStore } from './';
import statements from "../../resources/statements";



export default class BalanceStore implements IBalanceStore {
  
  getIterator(account: Account, date: Date, pullSize: number): BalanceIterator{
    return new BalanceIterator(this, account, date, pullSize);
  }

  getBeforeOrEqualDate(account: Account, beforeOrEqualDate: Date, size: number): Balance[] {
    return statements.reduce((result: Balance[], statement: any) => {
      if(result.length < size && statement.iban === account.iban) {
        let currentDate = new Date(statement.date); // I assume that dates are in desc order
        
        if(currentDate.getTime() <= beforeOrEqualDate.getTime()) {
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

  save(account: Account, balanceEntries: Balance[]): void{
    // TODO()
  }

  getSyncInfo(account: Account): any {
    // TODO()
  }
  saveSyncInfo(account: Account, syncInfo: Balance[]): void {
    // TODO()
  }

  deleteBalance(accountId: Buffer): void {
    //TODO()
  }
}