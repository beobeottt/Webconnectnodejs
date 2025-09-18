import { useNavigate } from "react-router-dom";
import { Product } from "../types/Product";
import { useState } from "react";

export const ProductCard: React.FC = () => {
  const navigate = useNavigate();

  const [favourites, setFavourites] = useState<string[]>([]);
  // Fake data test
  const products: Product[] = [
    {
      id: "p1",
      name: "iPhone 15 Pro",
      description: "Latest Apple flagship with A17 chip",
      price: 1199,
      quantity: 10,
      typeProduct: "Best Seller",
      
    },
    {
      id: "p2",
      name: "Samsung Galaxy S24 Ultra",
      description: "Flagship Android with 200MP camera",
      price: 1099,
      quantity: 8,
      typeProduct: "New Product",
      
    },
    {
      id: "p3",
      name: "Sony WH-1000XM5",
      description: "Noise cancelling headphones",
      price: 399,
      quantity: 20,
      typeProduct: "Best Seller",
      
    },
  ];

  const handleJoinNow = (id: string) => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = (name: string) => {
    console.log("Added to cart:", name);
  };

  const handleFavourite = (id: string) => {
    setFavourites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((p) => {
        const isFavourite = favourites.includes(p.id);
        return (
          <div
            key={p.id}
            className="border rounded-2xl p-4 shadow-md hover:shadow-lg transition flex flex-col"
          >
            <h2 className="text-xl font-semibold mb-2">{p.name}</h2>
            <p className="text-gray-600 mb-2">{p.description}</p>
            <p className="text-lg font-bold mb-1">${p.price}</p>
            <p className="text-sm text-gray-500 mb-3">Quantity: {p.quantity}</p>

            <div className="flex gap-2 mt-auto">
              <button
                onClick={() => handleFavourite(p.id)}
                className={`flex-1 px-4 py-2 rounded-xl transition ${
                  isFavourite
                    ? "bg-red-600 text-white hover:bg-red-700"
                    : "bg-red-200 text-red-700 hover:bg-red-300"
                }`}
              >
                {isFavourite ? "❤️ Favourited" : "♡ Favourite"}
              </button>

              <button
                onClick={() => handleAddToCart(p.name)}
                className="flex-1 px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700"
              >
                🛒 Add to Cart
              </button>
            </div>

            <button
              onClick={() => handleJoinNow(p.id)}
              className="mt-3 w-full px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
            >
              🔎 View Details
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCard;
