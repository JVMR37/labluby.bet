export default class User {
  id: string;
  name: string;
  email: string;
  password: string;

  constructor(id: string, name: string, email: string, password: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  public static fromJSON(json: { id: string; name: string; email: string; password: string; }): User {
    return new User(json.id, json.name, json.email, json.password);
  }
}
