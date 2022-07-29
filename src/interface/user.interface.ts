export type Index = {
  id: number;
};

export type NewUser = {
  username: string;
  classe: string;
  level: number;
  password: string;
};

export type User = Index & NewUser;
