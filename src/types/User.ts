export type User = {
  id: number;
  name: string;
  surname: string;
  email: string;
  roles: string[];
  isActive: boolean;
  created_at: string;
  token: string;
};

export type CreateUser = {
  name: string;
  surname: string;
  email: string;
  password: string;
};
