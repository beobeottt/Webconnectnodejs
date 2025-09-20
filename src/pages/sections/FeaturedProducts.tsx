import React, { useEffect, useState } from "react";
import { Product } from "../../types/product";
import { ProductService } from "../../services/productService";

const FeaturedProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    ProductService.getAll().then(setProducts);
  }, []);

  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl font-bold mb-6">Sản phẩm nổi bật</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src="https://via.placeholder.com/200"
                alt={p.name}
                className="rounded-t-lg w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-sm font-semibold">{p.name}</h3>
                <p className="text-sky-600 font-bold mt-2">
                  {p.price.toLocaleString("vi-VN")}đ
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
