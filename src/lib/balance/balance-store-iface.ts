
import { Account } from '..';
import { Balance, BalanceIterator } from './';

export interface IBalanceStore {
  getIterator(account: Account, date: Date): BalanceIterator;
  save(account: Account, balanceEntries: Balance[]): void;
  getBeforeDate(account: Account, beforeDate: Date, size: number): Balance[];
  getSyncInfo(account: Account): any;
  saveSyncInfo(account: Account, syncInfo: Balance[]): void;
  deleteBalance(accountId: Buffer): void;
}