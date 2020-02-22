

export default class Transaction {
  readonly iban: string;
  readonly name: string;
  readonly amount: number;
  readonly positive: boolean;
  readonly date: Date;
  readonly description: string;
  
  constructor (iban: string, name: string, amount: number, positive: boolean, date: Date, description: string){
    this.iban = iban;
    this.name = name;
    this.amount = amount;
    this.positive = positive;
    this.date = date;
    this.description = description;
  }

  static buildTransactionsFromStatement(transactions: any) {
    return transactions.map((transaction: any) => {
      return new Transaction(
        transaction.iban,
        transaction.name,
        transaction.amount,
        transaction.debit_credit === "credit",
        new Date(transaction.date),
        transaction.description
      )
    })
  }
}