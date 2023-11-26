export interface LoginData {
  email: string;
  password: string;
}

export interface JoinData {
  email: string;
  username: string;
  password: string;
  phonenumber: string;
}

export interface ErrorData {
  code: number;
  data: null;
  message: string;
}

export interface Email {
  email: string;
}
