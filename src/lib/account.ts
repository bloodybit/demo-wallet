

export default class Account {
  id: String;
  name: String | null = null;

  constructor(id: String) {
    this.id = id;
  };
}