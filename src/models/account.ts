import { UserRole } from "./roles";

export interface Account {
  id: number;
  username: string;
  password: string;
  role: UserRole;
}
