import { Account, Transaction } from '..';
// import { Balance, } from './';


// export default class BalanceIterator{
//   readonly balanceStore: BalanceStore;
//   readonly account: Account;
//   readonly currentDate: Date;

//   constructor(account: Account, balanceStore: BalanceStore, currentDate: Date) {
//     this.account = account;
//     this.balanceStore = balanceStore;
//     this.currentDate = currentDate;
//   }
//   getCurrent() {
//     return this.currentDate;
//   }

//   getNext(): Balance {
//     // TODO()
//     // this.balanceStore.getBeforeDate(this.currentDate.getDate() -1,)
//     return new Balance(new Date(), new Date(), new Date(), []);
//   }
  
//   getPrevious(): Balance {
//     // TODO()
//     return new Balance(new Date(), new Date(), new Date(), []);
//   }

//   getBeforeDate(beforeDate: Date){
//     // TODO()
//   }
// }