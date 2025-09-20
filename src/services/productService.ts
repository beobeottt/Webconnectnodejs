import { Product } from "../types/product";
import { typeProduct, CategoryType } from "../models/common";

// ✅ Mock data (sau này thay bằng API call)
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Laptop Dell XPS 13",
    description: "Laptop mỏng nhẹ, hiệu năng cao cho dân văn phòng.",
    price: 25000000,
    quantity: 10,
    discount_code: "SALE10",
    typeProduct: typeProduct.NewProduct, // ✅ dùng enum trạng thái
    category: CategoryType.Laptop,      // ✅ thêm danh mục
    shipping_address: "Kho HCM",
  },
  {
    id: "2",
    name: "Tai nghe Sony WH-1000XM5",
    description: "Tai nghe chống ồn cao cấp.",
    price: 7500000,
    quantity: 25,
    discount_code: "HEADSET5",
    typeProduct: typeProduct.BestSeller,
    category: CategoryType.Headphone,
    shipping_address: "Kho HN",
  },
  {
    id: "3",
    name: "iPhone 15 Pro",
    description: "Điện thoại mới nhất của Apple.",
    price: 32000000,
    quantity: 5,
    discount_code: "IPHONE15",
    typeProduct: typeProduct.NewProduct,
    category: CategoryType.Smartphone,
    shipping_address: "Kho HCM",
  },
];

export const ProductService = {
  // Lấy tất cả sản phẩm
  getAll: async (): Promise<Product[]> => {
    return Promise.resolve(mockProducts);
  },

  // Lấy sản phẩm theo ID
  getById: async (id: string): Promise<Product | undefined> => {
    return Promise.resolve(mockProducts.find((p) => p.id === id));
  },

  // Tìm kiếm sản phẩm theo tên
  search: async (keyword: string): Promise<Product[]> => {
    return Promise.resolve(
      mockProducts.filter((p) =>
        p.name.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  },

  // Lọc sản phẩm theo typeProduct (NewProduct, BestSeller, Discount)
  filterByType: async (type: typeProduct): Promise<Product[]> => {
    return Promise.resolve(mockProducts.filter((p) => p.typeProduct === type));
  },

  // Lọc sản phẩm theo CategoryType (Laptop, Headphone, Smartphone...)
  filterByCategory: async (category: CategoryType): Promise<Product[]> => {
    return Promise.resolve(mockProducts.filter((p) => p.category === category));
  },
};
