import React, { createContext, useState, useEffect, ReactNode } from "react";
import { AuthContextType} from "../auth/types";
import { UserRole } from "../types/roles";
import { Account } from "../types/account";
import { login as authLogin, logout as authLogout } from "../auth/authServices";

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<Account | null>(null);
  const [role, setRole] = useState<UserRole>("guest");

  useEffect(() => {
    const storedUser = localStorage.getItem("auth_user");
    if (storedUser) {
      const parsedUser: Account = JSON.parse(storedUser);
      setUser(parsedUser);
      setRole(parsedUser.role);
    }
  }, []);

  const login = async (username: string, password: string) => {
    const account = await authLogin(username, password);
    setUser(account);
    setRole(account.role);
    localStorage.setItem("auth_user", JSON.stringify(account));
  };

  const logout = () => {
    authLogout();
    setUser(null);
    setRole("guest");
    localStorage.removeItem("auth_user");
  };

  return (
    <AuthContext.Provider value={{ user, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
