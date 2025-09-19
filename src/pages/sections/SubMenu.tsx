import React from "react";
import { Link, useLocation } from "react-router-dom";

const SubMenu: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Trang chủ", path: "/" },
    { name: "Sản phẩm", path: "/san-pham" },
    { name: "Bài viết", path: "/bai-viet" },
    { name: "Channel", path: "/channel" },
    { name: "Đối tác", path: "/doi-tac" },
    { name: "Giới thiệu", path: "/gioi-thieu" },
  ];

  return (
    <nav className="bg-white shadow border-b">
      <div className="max-w-7xl mx-auto px-4 flex space-x-6">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`py-3 border-b-2 ${
              location.pathname === item.path
                ? "border-sky-600 text-sky-600 font-semibold"
                : "border-transparent text-gray-700 hover:text-sky-600 hover:border-sky-600"
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default SubMenu;
