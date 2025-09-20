import { UserRole } from "./role";
export interface Account {
  id: number;
  username: string;
  password: string;
  role: UserRole;
}
