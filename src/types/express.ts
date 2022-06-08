export interface _Response {
  json: Function;
  status: Function;
  send: Function;
}

export interface _Request {
  body: {
    username: string;
    email: string;
    phone: number;
    password: string;
  };
}
