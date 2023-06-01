export type UserItems = {
  age: number;
  name: string;
  isAdmin: boolean;
};

export interface UsersProps {
  users: UserItems[];
}

export interface UserProps {
  user: UserItems;
}
