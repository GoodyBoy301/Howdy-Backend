export default interface User {
  username: string;
  email: string;
  phone: number;
  password: string;
  dp: object;
  posts: object[];
  contacts: object[];
  lastSeen: Date;
}
