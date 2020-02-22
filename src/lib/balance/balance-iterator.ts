import { Account, Transaction } from '..';
import { Balance, } from './';
import { IBalanceStore } from './balance-store-iface';


export default class BalanceIterator{
  readonly balanceStore: IBalanceStore;
  readonly account: Account;
  currentDate: Date;
  pullSize: number;

  constructor(balanceStore: IBalanceStore, account: Account, currentDate: Date, pullSize: number) {
    this.balanceStore = balanceStore;
    this.account = account;
    this.currentDate = currentDate;
    this.pullSize = pullSize;
  }
  getCurrent() {
    const oneDay = 24*60*60*1000;
    const startDate = new Date(this.currentDate.getTime() - oneDay);
    return this.balanceStore.getBeforeOrEqualDate(this.account, startDate, this.pullSize);
  }

  getNext(): Balance[] {
    // TODO()
    return []
  }
  
  getPrevious(): Balance[] {
    const oneDay = 24*60*60*1000;
    const previousDays = oneDay - this.pullSize;
    const startDate = new Date(this.currentDate.getTime() - previousDays);
    return this.balanceStore.getBeforeOrEqualDate(this.account, startDate, this.pullSize);
  }

  getBeforeDate(beforeDate: Date){
    // TODO()
  }
}