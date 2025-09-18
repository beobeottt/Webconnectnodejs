import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { X, Menu } from "lucide-react"; // cài: pnpm add lucide-react

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // trạng thái login
  const [accountMenu, setAccountMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/account");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setAccountMenu(false);
    navigate("/");
  };

  return (
    <div className="bg-orange-500"> {/* ✅ Sửa ở đây */}
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 py-4 bg-sky-500 border-b border-orange-600">
        <Link to="/">
          <h1 className="text-3xl font-bold text-white">
            <span className="text-red-500">Duc</span>Bo
          </h1>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex gap-8 text-sm text-white items-center">
          <div className="relative group">
            <Link to="/product-list" className="hover:text-red-500">
              Shopping Cart
            </Link>
          </div>
          <div className="relative group">
            <button className="hover:text-red-500">Products ▾</button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-sky-600 border border-sky-700 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <ul className="py-2">
                <li>
                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm text-white hover:bg-sky-700"
                  >
                    SamSung
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm text-white hover:bg-sky-700"
                  >
                    Apple
                  </Link>
                </li>
                <li>
                    <Link
                        to=""
                        className="block px-4 py-2 text-sm text-white hover:bg-sky-700"
                    >
                        Oppo
                    </Link>
                </li>
                <li>
                    <Link
                        to=""
                        className="block px-4 py-2 text-sm text-white hover:bg-sky-700"
                    >
                        Xiaomi
                    </Link>
                </li>
                <li>
                    <Link
                        to=""
                        className="block px-4 py-2 text-sm text-white hover:bg-sky-700"
                    >
                        Realme
                    </Link>
                </li>
                <li>
                    <Link
                        to=""
                        className="block px-4 py-2 text-sm text-white hover:bg-sky-700"
                    >
                        Vivo
                    </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Login/Register hoặc Account */}
          {!isLoggedIn ? (
            <div className="flex gap-4">
              <button className="px-4 py-2 border border-white rounded-lg hover:bg-red-500 hover:text-white">
                <Link to="/login">Login</Link>
              </button>

              <button className="px-4 py-2 border border-white rounded-lg hover:bg-red-500 hover:text-white">
                <Link to="/register">Register</Link>
              </button>
            </div>
          ) : (
            <div className="relative">
              <button
                onClick={() => setAccountMenu(!accountMenu)}
                className="px-4 py-2 bg-sky-600 rounded-lg"
              >
                Account ▾
              </button>
              {accountMenu && (
                <div className="absolute right-0 mt-2 w-40 bg-sky-600 border border-sky-700 rounded-md shadow-lg z-50">
                  <ul className="py-2">
                    <li>
                      <Link
                        to="/account"
                        className="block px-4 py-2 text-sm text-white hover:bg-sky-700"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={handleLogout}
                        className="w-full text-left block px-4 py-2 text-sm text-white hover:bg-sky-700"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </nav>

        {/* Menu icon (Mobile only) */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Sidebar Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col gap-6 text-black px-6 pt-4">
          <Link to="/" onClick={() => setIsOpen(false)}>
            TRANG CHỦ
          </Link>

          {!isLoggedIn ? (
            <div className="flex flex-col gap-4">
              <button
                onClick={() => {
                  handleLogin();
                  setIsOpen(false);
                }}
                className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600 text-white"
              >
                Đăng nhập
              </button>
              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 border border-black rounded-lg hover:bg-black hover:text-white"
              >
                Đăng ký
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <Link
                to="/account"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-gray-200 rounded-lg"
              >
                Account
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white"
              >
                Logout
              </button>
            </div>
          )}
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default NavBar;
