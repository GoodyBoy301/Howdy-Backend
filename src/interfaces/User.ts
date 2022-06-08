export default interface User {
  username: string;
  email: string;
  phone: number;
  password: string;
  dp: object;
  contacts: object[];
  lastSeen: Date;
}
