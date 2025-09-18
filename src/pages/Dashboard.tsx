import React, { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState("users");

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
                            onClick={() => setActiveMenu("users")}
                            className={`w-full text-left px-4 py-3 rounded-lg text-lg font-semibold ${activeMenu === "users"
                                ? "bg-red-500"
                                : "hover:bg-gray-500"
                                }`}
                        >
                            👥 Quản lý Người dùng
                        </button>
                        <button
                            onClick={() => setActiveMenu("accounts")}
                            className={`w-full text-left px-4 py-3 rounded-lg text-lg font-semibold ${activeMenu === "accounts"
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
                    {activeMenu === "users" && (
                        <div>
                            <h2 className="text-3xl font-semibold mb-6">
                                Thông tin Người dùng
                            </h2>
                            <table className="w-full border-collapse border border-gray-300 shadow-sm">
                                <thead className="bg-gray-200 text-gray-800">
                                    <tr>
                                        <th className="p-3 border text-lg font-semibold w-[5%]">ID</th>
                                        <th className="p-3 border text-lg font-semibold w-[20%]">Họ tên</th>
                                        <th className="p-3 border text-lg font-semibold w-[25%]">Email</th>
                                        <th className="p-3 border text-lg font-semibold w-[15%]">SĐT</th>
                                        <th className="p-3 border text-lg font-semibold w-[20%]">Địa chỉ</th>
                                        <th className="p-3 border text-lg font-semibold w-[10%]">Vai trò</th>
                                        <th className="p-3 border text-lg font-semibold w-[5%]">Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border p-3 text-lg">1</td>
                                        <td className="border p-3 text-lg">Từ Gia Bảo</td>
                                        <td className="border p-3 text-lg">admin@example.com</td>
                                        <td className="border p-3 text-lg">0326023151</td>
                                        <td className="border p-3 text-lg">TP HCM</td>
                                        <td className="border p-3 text-lg">Admin</td>
                                        <td className="border p-3 flex gap-3">
                                            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-base font-medium hover:bg-blue-600 transition">
                                                Chỉnh sửa
                                            </button>
                                            <button className="px-4 py-2 bg-red-500 text-white rounded-lg text-base font-medium hover:bg-red-600 transition">
                                                Xóa
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}

                    {activeMenu === "accounts" && (
                        <div>
                            <h2 className="text-3xl font-semibold mb-6">
                                Tài khoản và Mật khẩu
                            </h2>
                            <table className="w-full border-collapse border border-gray-300 shadow-sm">
                                <thead className="bg-gray-200 text-gray-800">
                                    <tr>
                                        <th className="p-3 border text-lg font-semibold">ID</th>
                                        <th className="p-3 border text-lg font-semibold">Tên đăng nhập</th>
                                        <th className="p-3 border text-lg font-semibold">Mật khẩu</th>
                                        <th className="p-3 border text-lg font-semibold">Vai trò</th>
                                        <th className="p-3 border text-lg font-semibold">Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border p-3 text-lg">1</td>
                                        <td className="border p-3 text-lg">AD</td>
                                        <td className="border p-3 text-lg">********</td>
                                        <td className="border p-3 text-lg">Admin</td>
                                        <td className="border p-3 flex gap-3">
                                            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-base font-medium hover:bg-blue-600 transition">
                                                Chỉnh sửa
                                            </button>
                                            <button className="px-4 py-2 bg-red-500 text-white rounded-lg text-base font-medium hover:bg-red-600 transition">
                                                Xóa
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Dashboard;