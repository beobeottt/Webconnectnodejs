import { Account } from "../models/account";

// ✅ Mock data giả lập database account
const mockAccounts: Account[] = [
  { id: 1, username: "admin", role: "admin", password: "1" },
  { id: 2, username: "manager", role: "manager", password: "1" },
  { id: 3, username: "tech", role: "technician", password: "1" },
  { id: 4, username: "consult", role: "consultant", password: "1" },
  { id: 5, username: "customer", role: "customer", password: "1" },
];

// ✅ Login (mock API)
export const login = async (username: string, password: string): Promise<Account> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const foundAccount = mockAccounts.find((a) => a.username === username && a.password === password);
      if (foundAccount) {
        resolve(foundAccount);
      } else {
        reject(new Error("Invalid username or password"));
      }
    }, 500);
  });
};

// ✅ Logout
export const logout = () => {
  // Có thể thêm logic bổ sung nếu cần (như gọi API để vô hiệu hóa token)
};