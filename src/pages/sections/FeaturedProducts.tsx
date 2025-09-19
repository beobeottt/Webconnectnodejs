import React from "react";

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl font-bold mb-6">Sản phẩm nổi bật</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src="https://via.placeholder.com/200"
                alt="Product"
                className="rounded-t-lg w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold">Tên sản phẩm {i}</h3>
                <p className="text-sky-600 font-bold mt-2">500.000đ</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
