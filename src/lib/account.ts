
export default class Account {
  readonly id: string;
  readonly iban: string;

  constructor(id: string, iban: string) {
    this.id = id;
    this.iban = iban;
  };

  async getAccount(id: string) {

  }
}