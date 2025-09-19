import React from "react";

const FeaturedCategories: React.FC = () => {
  return (
    <section className="py-10 max-w-6xl mx-auto px-4">
      <h2 className="text-xl font-bold mb-6">Danh mục nổi bật</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {["a", "b", "c", "d"].map((cat) => (
          <div
            key={cat}
            className="bg-white rounded-lg shadow p-4 hover:shadow-lg transition"
          >
            <p>{cat}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCategories;
