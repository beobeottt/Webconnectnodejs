import { useNavigate } from "react-router-dom";
import { Product } from "../types/Product";

export const ProductCard = ({ id, name, description, price, quantity }: Product) => {
  const navigate = useNavigate();

  const handleJoinNow = () => {
    if (!id) {
      console.error("ID is undefined in ProductCard");
      return;
    }
    navigate(`/product/${id}`);
  };

  return (
    <div className="border rounded-2xl p-4 shadow-md hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-lg font-bold mb-1">${price}</p>
      <p className="text-sm text-gray-500 mb-3">Quantity: {quantity}</p>
      <button
        onClick={handleJoinNow}
        className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
      >
        Join Now
      </button>
    </div>
  );
};
