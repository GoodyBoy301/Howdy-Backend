export default interface User {
  username: string;
  email: string;
  password: string;
  dp: object;
  posts: object[];
  contacts: object[];
  lastSeen: Date;
}
