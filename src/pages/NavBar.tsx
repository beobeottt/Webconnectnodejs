import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { X, Menu, ShoppingCart, Search } from "lucide-react";
import { useAuth } from "../auth/useAuth";
import ProfileModal from "./Profile"; // ✅ import modal


const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [accountMenu, setAccountMenu] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false); // ✅ state modal
  const { role, user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const handleLogout = () => {
    logout();
    setAccountMenu(false);
    navigate("/");
  };

  return (
    <div className="bg-orange-500">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 py-4 bg-sky-500 border-b border-orange-600">
        <Link to="/">
          <h1 className="text-3xl font-bold text-white">
            <span className="text-red-500">Duc</span>Bo
          </h1>
        </Link>
        {/* Nav desktop */}
        <nav className="hidden md:flex gap-8 text-sm text-white items-center">
          {/* Hộp tìm kiếm */}
          <div className="relative w-64">
            <input
              type="text"
              placeholder="Tìm sản phẩm..."
              className="w-full px-4 py-2 rounded-lg text-black focus:outline-none"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-sky-600">
              <Search size={18} />
            </button>
          </div>

          {/* Biểu tượng giỏ hàng */}
          <Link
            to="/cart"
            className="relative flex items-center hover:text-yellow-400"
          >
            <ShoppingCart size={22} />
            <span className="ml-1">Giỏ hàng</span>
            {/* Badge số lượng sản phẩm */}
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              3
            </span>
          </Link>
          {/* Nếu admin thì hiện Dashboard */}
          {role === "admin" && (
            <Link
              to="/AdminDashboard"
              className="hover:text-yellow-400 font-semibold"
            >
              Dashboard
            </Link>
          )}

          {/* Nếu manager thì hiện Dashboard */}
          {role === "manager" && (
            <Link
              to="/ManagerDashboard"
              className="hover:text-yellow-400 font-semibold"
            >
              Dashboard
            </Link>
          )}
          
          {/* Login/Register hoặc Account */}
          {!user ? (
            <div className="flex gap-4">
              <Link
                to="/login"
                className="px-4 py-2 border border-white rounded-lg hover:bg-red-500 hover:text-white"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 border border-white rounded-lg hover:bg-red-500 hover:text-white"
              >
                Register
              </Link>
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
                      <button
                        onClick={() => {
                          setIsProfileOpen(true); // ✅ mở modal
                          setAccountMenu(false);
                        }}
                        className="w-full text-left block px-4 py-2 text-sm text-white hover:bg-sky-700"
                      >
                        Profile
                      </button>
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

        {/* Mobile menu icon */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(true)}>
          <Menu size={28} />
        </button>
      </div>

      {/* Sidebar Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
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

          {role === "admin" && (
            <Link to="/AdminDashboard" onClick={() => setIsOpen(false)}>
              Dashboard
            </Link>
          )}

          {role === "manager" && (
            <Link to="/ManagerDashboard" onClick={() => setIsOpen(false)}>
              Dashboard
            </Link>
          )}

          {!user ? (
            <div className="flex flex-col gap-4">
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600 text-white"
              >
                Đăng nhập
              </Link>
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
              <button
                onClick={() => {
                  setIsProfileOpen(true); // ✅ mở modal mobile
                  setIsOpen(false);
                }}
                className="px-4 py-2 bg-gray-200 rounded-lg"
              >
                Account
              </button>
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

      {/* ✅ Profile Modal */}
      <ProfileModal
        isOpen={isProfileOpen}
        onClose={() => setIsProfileOpen(false)}
      />
    </div>
  );
};

export default NavBar;
