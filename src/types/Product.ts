import { typeProduct, CategoryType, BrandType } from "../models/common";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  discount_code: string;
  // ✅ Phân loại theo trạng thái (hàng mới, bán chạy, giảm giá)
  typeProduct: typeProduct;
  // ✅ Phân loại theo danh mục (tai nghe, bàn phím, laptop,...)
  category: CategoryType;
  brand?: BrandType; // tùy chọn
  shipping_address: string;
}
