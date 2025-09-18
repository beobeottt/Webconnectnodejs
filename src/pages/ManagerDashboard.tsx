import React, { useState } from "react";
import { Link } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  category: string;
}

interface Order {
  id: number;
  customer: string;
  paymentId: string;
  shippingId: string;
  date: string;
  total: number;
  status: string;
  products: { id: number; name: string; quantity: number; price: number }[];
}

interface Shipping {
  id: number;
  orderId: number;
  userId: number;
  address: string;
  status: string;
  expected: string;
  shipper: string;
}

interface Shipper {
  id: number;
  name: string;
}

interface ManagerDashboardProps {
  products: Product[];
  orders: Order[];
  shipping: Shipping[];
  shippers: Shipper[];
}

const ManagerDashboard: React.FC<ManagerDashboardProps> = ({ products, orders, shipping, shippers }) => {
    const [activeMenu, setActiveMenu] = useState("addProduct");
    const [showOrderDetail, setShowOrderDetail] = useState(false);
    const [selectedOrder, setSelectedOrder] = useState<any>(null);
    const [showAddShipper, setShowAddShipper] = useState(false);
    const [showAddProduct, setShowAddProduct] = useState(false);
    const [showEditProduct, setShowEditProduct] = useState(false);
    const [editProduct, setEditProduct] = useState<any>(null);
    const [showEditShipping, setShowEditShipping] = useState(false);
    const [editShipping, setEditShipping] = useState<any>(null);
    const [showEditShipper, setShowEditShipper] = useState(false);
    const [editShipper, setEditShipper] = useState<any>(null);

    const handleShowDetail = (order: any) => {
        setSelectedOrder(order);
        setShowOrderDetail(true);
    };

    const handleCloseDetail = () => {
        setShowOrderDetail(false);
        setSelectedOrder(null);
    };

    return (
        <div className="h-screen flex flex-col font-sans">
            {/* Navbar trên cùng */}
            <header className="flex items-center justify-between bg-gradient-to-r from-green-400 to-green-700 px-8 py-4 text-white shadow-lg">
                <h1 className="text-3xl font-bold">Manager Dashboard</h1>
                <Link
                    to="/"
                    className="text-white px-6 py-3 font-semibold text-base hover:text-yellow-400 transition"
                >
                    Trang chủ
                </Link>
            </header>

            <div className="flex flex-1">
                {/* Sidebar trái */}
                <aside className="w-72 bg-gray-700 text-white flex flex-col">
                    <nav className="flex-1 px-6 py-8 space-y-3">
                        <button
                            onClick={() => setActiveMenu("listProducts")}
                            className={`w-full text-left px-4 py-3 rounded-lg text-lg font-semibold ${activeMenu === "listProducts" ? "bg-green-500" : "hover:bg-gray-600"
                                }`}
                        >
                            📦 Danh sách sản phẩm
                        </button>
                        <button
                            onClick={() => setActiveMenu("orders")}
                            className={`w-full text-left px-4 py-3 rounded-lg text-lg font-semibold ${activeMenu === "orders" ? "bg-green-500" : "hover:bg-gray-600"
                                }`}
                        >
                            🛒 Quản lý đơn hàng
                        </button>
                        <button
                            onClick={() => setActiveMenu("shipping")}
                            className={`w-full text-left px-4 py-3 rounded-md ${activeMenu === "shipping"
                                ? "bg-green-500 font-semibold"
                                : "hover:bg-green-800"}`}
                        >
                            🚚 Vận chuyển
                        </button>
                        <button
                            onClick={() => setActiveMenu("shippers")}
                            className={`w-full text-left px-4 py-3 rounded-md ${activeMenu === "shippers"
                                ? "bg-green-500 font-semibold"
                                : "hover:bg-green-800"}`}
                        >
                            👷 Người vận chuyển
                        </button>
                    </nav>
                </aside>

                {/* Nội dung chính */}
                <main className="flex-1 bg-gray-100 p-8 overflow-auto">
                    {/* Danh sách sản phẩm */}
                    {activeMenu === "listProducts" && (
                        <div className="bg-white shadow rounded-lg p-6">
                            <h2 className="text-2xl font-semibold mb-6 text-red-700">
                                Danh sách sản phẩm toàn hệ thống
                            </h2>
                            <table className="w-full border-collapse border border-gray-300">
                                <thead className="bg-red-600 text-white">
                                    <tr>
                                        <th className="p-2 border">ID</th>
                                        <th className="p-2 border">Tên</th>
                                        <th className="p-2 border">Giá</th>
                                        <th className="p-2 border">Tồn kho</th>
                                        <th className="p-2 border">Danh mục</th>
                                        <th className="p-2 border">Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product) => (
                                        <tr key={product.id}>
                                            <td className="border p-2">{product.id}</td>
                                            <td className="border p-2">{product.name}</td>
                                            <td className="border p-2">{product.price.toLocaleString()}</td>
                                            <td className="border p-2">{product.stock}</td>
                                            <td className="border p-2">{product.category}</td>
                                            <td className="border p-2">
                                                <button onClick={() => {
                                                    setEditProduct(product);
                                                    setShowEditProduct(true);
                                                }} className="px-3 py-1 bg-green-500 text-white rounded mr-2">
                                                    Sửa
                                                </button>
                                                <button className="px-3 py-1 bg-red-500 text-white rounded">
                                                    Xóa
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {/* Nút thêm sản phẩm*/}
                            <button
                                onClick={() => setShowAddProduct(true)}
                                className="fixed bottom-10 right-10 w-14 h-14 bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:bg-green-700"
                            >
                                <span className="text-white text-3xl font-bold">+</span>
                            </button>
                        </div>
                    )}

                    {/* Quản lý đơn hàng */}
                    {activeMenu === "orders" && (
                        <div className="bg-white shadow rounded-lg p-6">
                            <h2 className="text-2xl font-semibold mb-6 text-red-700">
                                Quản lý Đơn hàng
                            </h2>
                            <table className="w-full border-collapse border border-gray-300">
                                <thead className="bg-red-600 text-white">
                                    <tr>
                                        <th className="p-2 border">ID</th>
                                        <th className="p-2 border">Khách hàng</th>
                                        <th className="p-2 border">PaymentID</th>
                                        <th className="p-2 border">ShippingID</th>
                                        <th className="p-2 border">Ngày đặt</th>
                                        <th className="p-2 border">Tổng tiền</th>
                                        <th className="p-2 border">Trạng thái</th>
                                        <th className="p-2 border">Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order) => (
                                        <tr key={order.id}>
                                            <td className="border p-2">{order.id}</td>
                                            <td className="border p-2">{order.customer}</td>
                                            <td className="border p-2">{order.paymentId}</td>
                                            <td className="border p-2">{order.shippingId}</td>
                                            <td className="border p-2">{order.date}</td>
                                            <td className="border p-2">{order.total.toLocaleString()}</td>
                                            <td className="border p-2">{order.status}</td>
                                            <td className="border p-2">
                                                <button
                                                    onClick={() => handleShowDetail(order)}
                                                    className="px-3 py-1 bg-blue-500 text-white rounded mr-2"
                                                >
                                                    Chi tiết
                                                </button>
                                                <button className="px-3 py-1 bg-red-500 text-white rounded">
                                                    Hủy
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                    {/* Quản lý vận chuyển */}
                    {activeMenu === "shipping" && (
                        <div className="bg-white shadow rounded-lg p-6">
                            <h2 className="text-xl font-bold mb-4 text-green-700">Danh sách Vận chuyển</h2>
                            <table className="w-full border border-gray-300">
                                <thead className="bg-red-600 text-white">
                                    <tr>
                                        <th className="p-2 border">ID</th>
                                        <th className="p-2 border">Order ID</th>
                                        <th className="p-2 border">UserID</th>
                                        <th className="p-2 border">Địa chỉ</th>
                                        <th className="p-2 border">Trạng thái</th>
                                        <th className="p-2 border">Ngày giao dự kiến</th>
                                        <th className="p-2 border">Người vận chuyển</th>
                                        <th className="p-2 border">Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {shipping.map((ship) => (
                                        <tr key={ship.id}>
                                            <td className="border p-2">{ship.id}</td>
                                            <td className="border p-2">{ship.orderId}</td>
                                            <td className="border p-2">{ship.userId}</td>
                                            <td className="border p-2">{ship.address}</td>
                                            <td className="border p-2">{ship.status}</td>
                                            <td className="border p-2">{ship.expected}</td>
                                            <td className="border p-2">{ship.shipper}</td>
                                            <td className="border p-2">
                                                <button onClick={() => {
                                                    setEditShipping(ship);
                                                    setShowEditShipping(true);
                                                }} className="px-3 py-1 bg-blue-500 text-white rounded mr-2">Chỉnh sửa</button>
                                                <button className="px-3 py-1 bg-red-500 text-white rounded">Xóa</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                    {/* Quản lý Người vận chuyển */}
                    {activeMenu === "shippers" && (
                        <div className="bg-white shadow rounded-lg p-6 relative">
                            <h2 className="text-xl font-bold mb-4 text-green-700">Danh sách Người vận chuyển</h2>
                            <table className="w-full border border-gray-300">
                                <thead className="bg-red-600 text-white">
                                    <tr>
                                        <th className="p-2 border">ID</th>
                                        <th className="p-2 border">Tên người vận chuyển</th>
                                        <th className="p-2 border">Hành động</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {shippers.map((shipper) => (
                                        <tr key={shipper.id}>
                                            <td className="border p-2">{shipper.id}</td>
                                            <td className="border p-2">{shipper.name}</td>
                                            <td className="border p-2">
                                                <button onClick={() => {
                                                    setEditShipper(shipper);
                                                    setShowEditShipper(true);
                                                }} className="px-3 py-1 bg-blue-500 text-white rounded mr-2">Chỉnh sửa</button>
                                                <button className="px-3 py-1 bg-red-500 text-white rounded">Xóa</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            {/* Nút thêm shipper */}
                            <button
                                onClick={() => setShowAddShipper(true)}
                                className="fixed bottom-10 right-10 w-14 h-14 bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:bg-green-700"
                            >
                                <span className="text-white text-3xl font-bold">+</span>
                            </button>
                        </div>
                    )}

                    {/* Modal thêm shipper */}
                    {showAddShipper && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                            <div className="bg-white rounded-lg shadow-lg w-96 p-6">
                                <h2 className="text-xl font-bold mb-4 text-green-700">Thêm người vận chuyển</h2>
                                <form className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="ID"
                                        className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-green-400"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Tên người vận chuyển"
                                        className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-green-400"
                                    />
                                    <div className="flex justify-end space-x-2">
                                        <button
                                            type="button"
                                            onClick={() => setShowAddShipper(false)}
                                            className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                                        >
                                            Hủy
                                        </button>
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                        >
                                            Lưu
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    {/* Modal thêm sản phẩm */}
                    {showAddProduct && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                            <div className="bg-white rounded-lg shadow-lg w-[600px] p-6">
                                <h2 className="text-2xl font-bold mb-6 text-green-700 text-center">
                                    Thêm sản phẩm mới
                                </h2>
                                <form className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Tên sản phẩm"
                                        className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-green-400"
                                    />
                                    <textarea
                                        placeholder="Mô tả"
                                        className="w-full border px-4 py-2 rounded h-24 focus:ring-2 focus:ring-green-400"
                                    ></textarea>
                                    <input
                                        type="number"
                                        placeholder="Giá"
                                        className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-green-400"
                                    />
                                    <input
                                        type="number"
                                        placeholder="Tồn kho"
                                        className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-green-400"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Danh mục"
                                        className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-green-400"
                                    />
                                    <input
                                        type="file"
                                        className="w-full border px-4 py-2 rounded focus:ring-2 focus:ring-green-400"
                                    />
                                    <div className="flex justify-end space-x-2 pt-2">
                                        <button
                                            type="button"
                                            onClick={() => setShowAddProduct(false)}
                                            className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                                        >
                                            Hủy
                                        </button>
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                        >
                                            Lưu
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}

                    {/* Modal chi tiết đơn hàng */}
                    {showOrderDetail && selectedOrder && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                            <div className="bg-white rounded-lg shadow-lg w-3/4 max-w-2xl p-6">
                                <h2 className="text-2xl font-bold mb-4 text-green-700">
                                    Chi tiết đơn hàng #{selectedOrder.id}
                                </h2>
                                <table className="w-full border-collapse border border-gray-300 mb-4">
                                    <thead className="bg-green-600 text-white">
                                        <tr>
                                            <th className="p-2 border">ID</th>
                                            <th className="p-2 border">Sản phẩm</th>
                                            <th className="p-2 border">Số lượng</th>
                                            <th className="p-2 border">Giá</th>
                                            <th className="p-2 border">Tổng phụ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {selectedOrder.products.map((p: any) => (
                                            <tr key={p.id}>
                                                <td className="border p-2">{p.id}</td>
                                                <td className="border p-2">{p.name}</td>
                                                <td className="border p-2">{p.quantity}</td>
                                                <td className="border p-2">{p.price.toLocaleString()}</td>
                                                <td className="border p-2">
                                                    {(p.price * p.quantity).toLocaleString()}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <button
                                    onClick={handleCloseDetail}
                                    className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                    Đóng
                                </button>
                            </div>
                        </div>
                    )}
                    {/* Modal sửa sản phẩm */}
                    {showEditProduct && editProduct && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                            <div className="bg-white rounded-lg shadow-lg w-[600px] p-6">
                                <h2 className="text-2xl font-bold mb-6 text-green-700 text-center">
                                    Sửa sản phẩm #{editProduct.id}
                                </h2>
                                <form className="space-y-4">
                                    <input
                                        type="text"
                                        defaultValue={editProduct.name}
                                        className="w-full border px-4 py-2 rounded"
                                    />
                                    <input
                                        type="number"
                                        defaultValue={editProduct.price}
                                        className="w-full border px-4 py-2 rounded"
                                    />
                                    <input
                                        type="number"
                                        defaultValue={editProduct.stock}
                                        className="w-full border px-4 py-2 rounded"
                                    />
                                    <input
                                        type="text"
                                        defaultValue={editProduct.category}
                                        className="w-full border px-4 py-2 rounded"
                                    />
                                    <div className="flex justify-end space-x-2 pt-2">
                                        <button
                                            type="button"
                                            onClick={() => setShowEditProduct(false)}
                                            className="px-4 py-2 bg-gray-400 text-white rounded"
                                        >
                                            Hủy
                                        </button>
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-green-600 text-white rounded"
                                        >
                                            Lưu
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                    {/* Modal sửa vận chuyển */}
                    {showEditShipping && editShipping && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                            <div className="bg-white rounded-lg shadow-lg w-[600px] p-6">
                                <h2 className="text-xl font-bold mb-4 text-green-700">
                                    Sửa thông tin vận chuyển #{editShipping.id}
                                </h2>
                                <form className="space-y-4">
                                    <input type="text" defaultValue={editShipping.address} className="w-full border px-4 py-2 rounded" />
                                    <input type="text" defaultValue={editShipping.status} className="w-full border px-4 py-2 rounded" />
                                    <input type="text" defaultValue={editShipping.expected} className="w-full border px-4 py-2 rounded" />
                                    <input type="text" defaultValue={editShipping.shipper} className="w-full border px-4 py-2 rounded" />
                                    <div className="flex justify-end space-x-2 pt-2">
                                        <button type="button" onClick={() => setShowEditShipping(false)} className="px-4 py-2 bg-gray-400 text-white rounded">Hủy</button>
                                        <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded">Lưu</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                    {/* Modal sửa shipper */}
                    {showEditShipper && editShipper && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                            <div className="bg-white rounded-lg shadow-lg w-[400px] p-6">
                                <h2 className="text-xl font-bold mb-4 text-green-700">
                                    Sửa người vận chuyển #{editShipper.id}
                                </h2>
                                <form className="space-y-4">
                                    <input
                                        type="text"
                                        defaultValue={editShipper.name}
                                        className="w-full border px-4 py-2 rounded"
                                    />
                                    <div className="flex justify-end space-x-2 pt-2">
                                        <button
                                            type="button"
                                            onClick={() => setShowEditShipper(false)}
                                            className="px-4 py-2 bg-gray-400 text-white rounded"
                                        >
                                            Hủy
                                        </button>
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-green-600 text-white rounded"
                                        >
                                            Lưu
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default ManagerDashboard;