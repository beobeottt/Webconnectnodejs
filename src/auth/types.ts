import { Account } from "../models/account";
import { UserRole } from "../models/roles";

export interface AuthContextType {
  user: Account | null;
  role: UserRole;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}