import { typeProduct } from "../models/common";

export interface Product{
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    discount_code: string;
    typeProduct: typeProduct;
    shipping_address: string;
}