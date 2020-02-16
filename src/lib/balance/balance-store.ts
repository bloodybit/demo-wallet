import { Account } from '..';
import { Balance, BalanceIterator, IBalanceStore} from './';




export default class BalanceStore implements IBalanceStore {

  private balanceCache: {[key:string]: Balance[] }= {}
  
  getIterator(account: Account, date: Date): BalanceIterator{

  }
  getBeforeOrEqualDate(beforeOrEqualDate: Date, account: Account): Balance[] {
    const entries = this.balanceCache[account.iban.toUpperCase()];
    entries.map((balance: Balance) =>{
      if(balance.date == beforeOrEqualDate) return balance;
    })
    Balance.getBeforeDate()
  }

  save(account: Account, balanceEntries: Balance[]): void{

  }

  getSyncInfo(account: Account): any {

  }
  saveSyncInfo(account: Account, syncInfo: Balance[]): void {

  }

  deleteBalance(accountId: Buffer): void {

  }
}