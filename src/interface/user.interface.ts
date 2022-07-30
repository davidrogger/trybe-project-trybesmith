export type Index = {
  id: number;
};

export type NewUser = {
  username: string;
  classe: string;
  level: number;
  password?: string;
};

export type User = Index & Omit<NewUser, 'password'>;

export type UserLogin = Omit<NewUser, 'classe' | 'level'>;
