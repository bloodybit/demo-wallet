import statements from '../src/resources/statements';
import { Balance, BalanceInfo } from '../src/lib/balance';
import { Transaction } from '../src/lib'

describe("get balance situation before date", () =>{
  it("is able to retrieve the balance on a specific date (or earlier)", () =>{
    const iban = "NL92RABO0315778504";
    const balance = Balance.getBeforeOrEqualDate(iban, new Date("2017-07-06"));
    console.log(new Date("2017-07-06"));

    const expectedBalance = new Balance(
      new BalanceInfo(
        4888.92,
        true,
        new Date("2017-07-06T00:00:00.000Z")
      ),
      new BalanceInfo(
        4910.76,
        true,
        new Date("2017-07-05T00:00:00.000Z")
      ),
      [
        new Transaction(
          "", 
          "Debetrente",
          0.04, 
          false, 
          new Date("2017-07-06T00:00:00.000Z"), 
          "Debetrente, Periode 01-04-2017 t/m 30-06-2017"
        ),
        new Transaction(
          "", 
          "Kosten",
          21.8, 
          false, 
          new Date("2017-07-06T00:00:00.000Z"), 
          "Kosten, Periode 01-04-2017 t/m 30-06-2017"
        ),
      ]
    );

    expect(balance).toContainEqual(expectedBalance);
  });


  it("retrieve a balance previous a given day" , () => {
    const iban = "NL92RABO0315778504";
    const balance = Balance.getBeforeOrEqualDate(iban, new Date("2017-07-15"));

    const expectedBalance = new Balance(
      new BalanceInfo(
        4872.81,
        true,
        new Date("2017-07-14T00:00:00.000Z")
      ),
      new BalanceInfo(
        4872.92,
        true,
        new Date("2017-07-13T00:00:00.000Z")
      ),
      [
        new Transaction(
          "", 
          "Bizcuit",
          0.11, 
          false, 
          new Date("2017-07-14T00:00:00.000Z"), 
          "Betalingsnummer be0dc54c"
        ),
      ]
    )
    expect(balance).toContainEqual(expectedBalance);
  })
})