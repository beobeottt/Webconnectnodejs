import React, { useState } from "react";
import { Link } from "react-router-dom";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  role: string;
}

interface Account {
  id: number;
  username: string;
  password: string;
  role: string;
}

interface AdminDashboardProps {
  users: User[];
  accounts: Account[];
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ users, accounts }) => {
  const [activeAdminMenu, setActiveAdminMenu] = useState("users");

  return (
    <div className="h-screen flex flex-col font-sans">
      {/* Top Navbar */}
      <header className="flex items-center justify-between bg-gradient-to-r from-blue-300 to-blue-700 px-8 py-4 text-white shadow-lg">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Link
          to="/"
          className="text-white px-6 py-3 font-semibold text-base hover:text-orange-500 transition"
        >
          Trang chủ
        </Link>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-72 bg-gray-600 text-white flex flex-col">
          <nav className="flex-1 px-6 py-8 space-y-3">
            <button
              onClick={() => setActiveAdminMenu("users")}
              className={`w-full text-left px-4 py-3 rounded-lg text-lg font-semibold ${
                activeAdminMenu === "users"
                  ? "bg-red-500"
                  : "hover:bg-gray-500"
              }`}
            >
              👥 Quản lý Người dùng
            </button>
            <button
              onClick={() => setActiveAdminMenu("accounts")}
              className={`w-full text-left px-4 py-3 rounded-lg text-lg font-semibold ${
                activeAdminMenu === "accounts"
                  ? "bg-red-500"
                  : "hover:bg-gray-500"
              }`}
            >
              🔑 Quản lý Tài khoản
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 bg-gray-100 p-8 overflow-auto">
          {activeAdminMenu === "users" && (
            <div>
              <h2 className="text-3xl font-semibold mb-6">Thông tin Người dùng</h2>
              <table className="w-full border-collapse border border-gray-300 shadow-sm">
                <thead className="bg-gray-200 text-gray-800">
                  <tr>
                    <th className="p-3 border text-lg font-semibold w-[5%]">ID</th>
                    <th className="p-3 border text-lg font-semibold w-[15%]">Họ tên</th>
                    <th className="p-3 border text-lg font-semibold w-[15%]">Email</th>
                    <th className="p-3 border text-lg font-semibold w-[15%]">SĐT</th>
                    <th className="p-3 border text-lg font-semibold w-[35%]">Địa chỉ</th>
                    <th className="p-3 border text-lg font-semibold w-[5%]">Vai trò</th>
                    <th className="p-3 border text-lg font-semibold w-[10%]"></th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr key={u.id}>
                      <td className="border p-3 text-lg">{u.id}</td>
                      <td className="border p-3 text-lg">{u.name}</td>
                      <td className="border p-3 text-lg">{u.email}</td>
                      <td className="border p-3 text-lg">{u.phone}</td>
                      <td className="border p-3 text-lg">{u.address}</td>
                      <td className="border p-3 text-lg">{u.role}</td>
                      <td className="border p-3 flex gap-3">
                        <button className="px-4 py-2 bg-green-500 text-white rounded-lg text-base font-medium hover:bg-green-600 transition">
                          Sửa
                        </button>
                        <button className="px-4 py-2 bg-red-500 text-white rounded-lg text-base font-medium hover:bg-red-600 transition">
                          Xóa
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {activeAdminMenu === "accounts" && (
            <div>
              <h2 className="text-3xl font-semibold mb-6">Tài khoản và Mật khẩu</h2>
              <table className="w-full border-collapse border border-gray-300 shadow-sm">
                <thead className="bg-gray-200 text-gray-800">
                  <tr>
                    <th className="p-3 border text-lg font-semibold w-[5%]">ID</th>
                    <th className="p-3 border text-lg font-semibold w-[40%]">Tên đăng nhập</th>
                    <th className="p-3 border text-lg font-semibold w-[40%]">Mật khẩu</th>
                    <th className="p-3 border text-lg font-semibold w-[5%]">Vai trò</th>
                    <th className="p-3 border text-lg font-semibold w-[10%]"></th>
                  </tr>
                </thead>
                <tbody>
                  {accounts.map((a) => (
                    <tr key={a.id}>
                      <td className="border p-3 text-lg">{a.id}</td>
                      <td className="border p-3 text-lg">{a.username}</td>
                      <td className="border p-3 text-lg">{a.password}</td>
                      <td className="border p-3 text-lg">{a.role}</td>
                      <td className="border p-3 flex gap-3">
                        <button className="px-4 py-2 bg-green-500 text-white rounded-lg text-base font-medium hover:bg-green-600 transition">
                          Sửa
                        </button>
                        <button className="px-4 py-2 bg-red-500 text-white rounded-lg text-base font-medium hover:bg-red-600 transition">
                          Xóa
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;