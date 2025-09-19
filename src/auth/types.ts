import { Account } from "../types/account";
import { UserRole } from "../types/roles";

export interface AuthContextType {
  user: Account | null;
  role: UserRole;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}