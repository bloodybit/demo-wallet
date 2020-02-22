
export default class Account {
  readonly id: string;
  readonly iban: string;

  constructor(id: string, iban: string) {
    this.id = id;
    this.iban = iban;
  };

  static getAccount(id: string) {
    return new Account("0315778504", "NL92RABO0315778504");
  }

  getBalanceByDate() {
    
  }
}