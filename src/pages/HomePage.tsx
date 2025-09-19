import React from "react";
import NavBar from "./NavBar";
import Banner from "./sections/Banner";
import FeaturedCategories from "./sections/FeaturedCategories";
import FeaturedProducts from "./sections/FeaturedProducts";
import SubMenu from "./sections/SubMenu";
import Breadcrumb from "./sections/Breadcrumb";

const HomePage: React.FC = () => {
    return (
        <div className="bg-gray-50 text-gray-900 min-h-screen font-sans flex flex-col">
            {/* Header */}
            <header>
                <NavBar />
                <SubMenu />       {/* Menu phụ */}
                <Breadcrumb />    {/* Đường dẫn hiện tại */}
            </header>

            {/* Main content */}
            <main className="flex-1">
                <Banner />
                <FeaturedCategories />
                <FeaturedProducts />
            </main>
        </div>
    );
};

export default HomePage;
