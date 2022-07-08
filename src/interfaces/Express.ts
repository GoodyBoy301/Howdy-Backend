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
    name: string;
    bio: string;
    color: string;
    pic: string;
    contactname: string;
    contactid: string;
    from: string;
    to: string;
    content: string;
  };
  params: {
    username: string;
  };
}
