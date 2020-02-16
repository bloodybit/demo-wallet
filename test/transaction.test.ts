import statements from '../src/resources/statements';
import { Transaction } from '../src/lib';

describe("get transactions from statements", () =>{
  it("correctly builds the transactions from statements file", () =>{
    const transactions = Transaction.buildTransactionsFromStatement(statements[statements.length-1].transactions);

    const expectedTransaction = new Transaction(
        "",
        "Bizcuit",
        5,
        false,
        new Date("2017-06-20"),
        "Betalingsnummer 63377f6d"
    );

    expect(transactions).toContainEqual(expectedTransaction);
  })
})