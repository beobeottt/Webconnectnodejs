import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="bg-gray-100 py-2 px-4 text-sm text-gray-600">
      <div className="max-w-7xl mx-auto">
        <Link to="/" className="text-sky-600 hover:underline">
          Trang chủ
        </Link>
        {pathnames.map((value, index) => {
          const to = "/" + pathnames.slice(0, index + 1).join("/");
          const isLast = index === pathnames.length - 1;
          return (
            <span key={to}>
              {" > "}
              {isLast ? (
                <span className="text-gray-800 font-medium">
                  {decodeURIComponent(value)}
                </span>
              ) : (
                <Link to={to} className="text-sky-600 hover:underline">
                  {decodeURIComponent(value)}
                </Link>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Breadcrumb;
