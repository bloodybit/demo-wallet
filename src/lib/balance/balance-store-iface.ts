
import { Account } from '..';
import { Balance } from './';

export interface IBalanceStore {
  getBeforeOrEqualDate(account: Account, beforeDate: Date, size: number): Balance[];
  getSyncInfo(account: Account): any;
  saveSyncInfo(account: Account, syncInfo: Balance[]): void;
  deleteBalance(accountId: Buffer): void;
}