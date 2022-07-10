export default interface Message {
  from: string;
  to: string;
  content: string;
  date: string;
  save: () => {};
  filter: (algorithm: Function) => {};
}
