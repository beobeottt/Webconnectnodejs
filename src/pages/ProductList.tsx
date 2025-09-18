import { useEffect, useState } from "react"
import axiosInstance from "../api/axios";
import NavBar from "./NavBar";
import { ProductCard } from "../components/ProductCard";
import Footer from "./Footer";

const ProductList: React.FC = () =>
{
    const [search, setSearch] = useState('');
    const [selectedd, setSelectedD] = useState('');
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosInstance.get("/product")
        .then(res =>{
            const data = res.data?.data;
            if(Array.isArray(data)){
                setProducts(data);
            }
            else{
                console.error("API trả dữ liệu sai định dạng:", data);
                setProducts([]);
            }
            setLoading(false);
        })
        .catch((err) =>{
            console.error("Lỗi khi gọi API:", err);
            setLoading(false);
        });
    }, []);

    if(loading) return <div className="text-white">Đang tải dữ liệu ....</div>;

    const filteredProducts = Array.isArray(products)
    ? products.filter((product) => {
        return (
            product.name?.toLowerCase().include(search.toLowerCase())
        );
    }) : [];

    return (
        <div className="bg-[#1e1f29] text-white min-h-screen font-sans">
            <NavBar/>

            <h1 className="text-2xl font-bold mb-6 text-center">Product</h1>
            <div className="flex flex-wrap gap-4 mb-6">
                <input type="text" 
                placeholder="Search Products....."
                value= {search}
                onChange={(e) => setSearch(e.target.value)}
                className="p-2 rounded text-black"
                />
                <button onClick={() => setSearch(search)} className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-8 rounded-lg text-xl transition-colors duration-300 shadow-lg hover:shadow-xl">Search</button>
                <select value={selectedd}
                onChange={(e) => setSelectedD(e.target.value)}
                className="p-2 rounded text-black"
                >
                    <option value="0">Choose Product</option>
                    <option value="NewProduct">New Product</option>
                    <option value="BestSeller">Best Seller</option>
                </select>
            </div>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {filteredProducts.map((product) => 
                (
                    <ProductCard key={product.id} {...product}/>
                ))}
            </div>
            <Footer/>
        </div>
    )
};

export default ProductList;