import React, { useState } from "react";
import { useAuth } from "../auth/useAuth";
import { Account } from "../models/account";
import { User } from "../models/user";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  const { user } = useAuth();

  // ép kiểu cho từng mục
  const profile = user as User | null;
  const account = user as Account | null;

  const [activeTab, setActiveTab] = useState<"info" | "password">("info");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl flex relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        {/* 🔹 Left navbar */}
        <div className="w-1/3 bg-gray-800 text-white p-6 rounded-l-lg border-r">
          <h3 className="text-lg font-bold mb-6">Profile</h3>
          <ul className="space-y-3">
            <li>
              <button
                onClick={() => setActiveTab("info")}
                className={`w-full text-left px-3 py-2 rounded-lg transition ${activeTab === "info"
                    ? "bg-sky-500 text-white"
                    : "hover:bg-gray-700"
                  }`}
              >
                Thông tin người dùng
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("password")}
                className={`w-full text-left px-3 py-2 rounded-lg transition ${activeTab === "password"
                    ? "bg-sky-500 text-white"
                    : "hover:bg-gray-700"
                  }`}
              >
                Đổi mật khẩu
              </button>
            </li>
          </ul>
        </div>


        {/* 🔹 Right content */}
        <div className="w-2/3 p-8">
          {activeTab === "info" && (
            <>
              <h2 className="text-2xl font-bold mb-6 text-sky-600 text-center">
                Thông tin cá nhân
              </h2>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Tên người dùng
                  </label>
                  <input
                    type="text"
                    value={profile?.username || ""}
                    disabled
                    className="w-full border rounded-lg px-4 py-2 bg-gray-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    value={profile?.email || ""}
                    disabled
                    className="w-full border rounded-lg px-4 py-2 bg-gray-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Số điện thoại
                  </label>
                  <input
                    type="text"
                    value={profile?.phone || ""}
                    disabled
                    className="w-full border rounded-lg px-4 py-2 bg-gray-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Địa chỉ
                  </label>
                  <input
                    type="text"
                    value={profile?.address || ""}
                    disabled
                    className="w-full border rounded-lg px-4 py-2 bg-gray-100"
                  />
                </div>
              </form>
            </>
          )}

          {activeTab === "password" && (
            <>
              <h2 className="text-2xl font-bold mb-6 text-sky-600 text-center">
                Đổi mật khẩu
              </h2>
              <form className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Tên tài khoản
                  </label>
                  <input
                    type="text"
                    value={account?.username || ""}
                    disabled
                    className="w-full border rounded-lg px-4 py-2 bg-gray-100"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Mật khẩu cũ
                  </label>
                  <input
                    type="password"
                    className="w-full border rounded-lg px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Mật khẩu mới
                  </label>
                  <input
                    type="password"
                    className="w-full border rounded-lg px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nhập lại mật khẩu mới
                  </label>
                  <input
                    type="password"
                    className="w-full border rounded-lg px-4 py-2"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-600"
                >
                  Cập nhật
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
