import { User } from "../models/common";

export interface Product{
    id: string;
    name: string;
    description: string;
    price: number;
    quantity: number;
    typeProduct: "New Product" | "Best Seller";
}