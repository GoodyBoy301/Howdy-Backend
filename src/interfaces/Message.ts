export default interface Message {
  from: string;
  to: string;
  content: string;
  time: Date;
  viewed: boolean;
}
