import React from "react";
import { CategoryType } from "../../models/common";

const FeaturedCategories: React.FC = () => {
  const categories = Object.values(CategoryType); // lấy value từ enum

  return (
    <section className="py-10 max-w-6xl mx-auto px-4">
      <h2 className="text-xl font-bold mb-6">Phân loại sản phẩm</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div
            key={cat}
            className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition text-center"
          >
            <p className="font-semibold">{cat}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
