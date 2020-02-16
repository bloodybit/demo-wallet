

export default class Statement {
  readonly date: Date;
  readonly todayBalance: Balance;
  readonly yesterdayBalance: Balance;

  constructor(date: Date, todayBalance: number, yesterdayBalance: number) {
    this.date = date;
    this.todayBalance = todayBalance;
    this.yesterdayBalance = yesterdayBalance;
  }
}

