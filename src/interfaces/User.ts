export default interface User {
  username: string;
  email: string;
  phone: number;
  password: string;
  dp: object;
  contacts: {
    name: string;
    username: string;
  }[];
  save: () => {};
}
