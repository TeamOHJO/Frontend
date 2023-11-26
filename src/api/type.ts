export interface LoginData {
  email: string;
  password: string;
}

export interface JoinData {
  email: string;
  password: string;
  name: string;
  number: string;
}

export interface ErrorData {
  code: number;
  data: null;
  message: string;
}
