import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CategoryType, BrandType } from "../../models/common";

const SubMenu: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Trang chủ", path: "/" },
    { name: "Sản phẩm", isDropdown: true },
    { name: "Bài viết", path: "/bai-viet" },
    {
      name: "Channel",
      external:
        "https://www.youtube.com/watch?v=0dCN5LPoLwc&list=RD0dCN5LPoLwc&start_radio=1",
    },
    { name: "Đối tác", path: "/doi-tac" },
    { name: "Giới thiệu", path: "/gioi-thieu" },
  ];

  const categories = Object.values(CategoryType);
  const brands = Object.values(BrandType);

  return (
    <nav className="bg-white shadow border-b relative">
      <div className="max-w-7xl mx-auto px-4 flex space-x-6">
        {menuItems.map((item) =>
          item.isDropdown ? (
            // 🔹 Dropdown cho "Sản phẩm"
            <div key={item.name} className="relative">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`py-3 inline-block border-b-2 focus:outline-none ${
                  isOpen
                    ? "border-sky-600 text-sky-600 font-semibold"
                    : "border-transparent text-gray-700 hover:text-sky-600 hover:border-sky-600"
                }`}
              >
                {item.name}
              </button>

              {isOpen && (
                <div className="absolute left-0 mt-2 w-[400px] bg-white shadow-lg rounded-md z-50">
                  <div className="grid grid-cols-2">
                    {/* Cột 1: Category */}
                    <div>
                      <h4 className="px-4 py-2 font-semibold text-gray-800 ">
                        Loại sản phẩm
                      </h4>
                      <ul className="py-2">
                        {categories.map((cat) => (
                          <li key={cat}>
                            <span className="block px-4 py-2 text-gray-700 hover:bg-sky-100 hover:text-sky-600 cursor-pointer">
                              {cat}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cột 2: Brand */}
                    <div>
                      <h4 className="px-4 py-2 font-semibold text-gray-800">
                        Hãng sản xuất
                      </h4>
                      <ul className="py-2">
                        {brands.map((brand) => (
                          <li key={brand}>
                            <span className="block px-4 py-2 text-gray-700 hover:bg-sky-100 hover:text-sky-600 cursor-pointer">
                              {brand}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : item.external ? (
            // 🔹 Link ngoài cho "Channel"
            <a
              key={item.name}
              href={item.external}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 border-b-2 border-transparent text-gray-700 hover:text-sky-600 hover:border-sky-600"
            >
              {item.name}
            </a>
          ) : (
            // 🔹 Link nội bộ
            <Link
              key={item.path}
              to={item.path!}
              className={`py-3 border-b-2 ${
                location.pathname === item.path
                  ? "border-sky-600 text-sky-600 font-semibold"
                  : "border-transparent text-gray-700 hover:text-sky-600 hover:border-sky-600"
              }`}
            >
              {item.name}
            </Link>
          )
        )}
      </div>
    </nav>
  );
};

export default SubMenu;
