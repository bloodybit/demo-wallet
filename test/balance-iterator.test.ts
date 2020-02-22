
import {Account, BalanceIterator, BalanceStore} from '../src/lib';

describe("get all the balances", () => {
  const id = "0315778504";
  const iban = "NL92RABO0315778504";
  
  let account: Account;
  let balanceStore: BalanceStore;
  let randomNumber: number;

  beforeAll(() => {
    account = new Account(id, iban);
    balanceStore = new BalanceStore();
    randomNumber = Math.round(Math.random() * 10000);
  });

  it("should return all the balances", () =>{
    const balanceIterator = new BalanceIterator(balanceStore, account, new Date(), randomNumber);
    const allBalances = balanceIterator.getCurrent();
    expect(allBalances.length).toBe(7);
  });
}); 