// src/types/user.ts

export interface User {
  id: string;
  username: string;
  email: string;
  phone?: string;   // tùy chọn
  address?: string; // tùy chọn
  role?: string;    // nếu cần phân quyền
}
