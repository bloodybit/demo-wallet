
export default class BalanceInfo {
  readonly amount: number;
  readonly positive: boolean;
  readonly date: Date;

  constructor(amount: number, positive: boolean, date: Date) {
    this.amount = amount;
    this.positive = positive;
    this.date = date;
  }
}