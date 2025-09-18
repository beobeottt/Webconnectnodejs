import React from 'react';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductList from './pages/ProductList';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminDashboard from './pages/AdminDashboard';
import ManagerDashboard from './pages/ManagerDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/AdminDashboard"
          element={
            <AdminDashboard
              users={[
                { id: 1, name: "Từ Gia Bảo", email: "admin@example.com", phone: "0326023151", address: "TP HCM", role: "Admin" },
                { id: 2, name: "Nguyễn Văn A", email: "user1@example.com", phone: "0123456789", address: "TP HCM", role: "User" },
                { id: 3, name: "Trần Thị B", email: "user2@example.com", phone: "0987654321", address: "TP HCM", role: "User" }
              ]}
              accounts={[
                { id: 1, username: "AD", password: "********", role: "Admin" },
                { id: 2, username: "user1", password: "********", role: "User" },
                { id: 3, username: "user2", password: "********", role: "User" }
              ]}
            />
          }
        />
        <Route
          path="/ManagerDashboard"
          element={
            <ManagerDashboard
              products={[
                { id: 1, name: "Áo thun nam", price: 150000, stock: 20, category: "Thời trang" },
                { id: 2, name: "Quần jeans", price: 350000, stock: 15, category: "Thời trang" },
                { id: 3, name: "Giày sneaker", price: 800000, stock: 10, category: "Giày dép" },
              ]}
              orders={[
                {
                  id: 1,
                  customer: "Nguyễn Văn A",
                  paymentId: "PAY001",
                  shippingId: "SHIP001",
                  date: "2025-09-19",
                  total: 500000,
                  status: "Đang giao",
                  products: [
                    { id: 1, name: "Áo thun nam", quantity: 2, price: 150000 }
                  ]
                },
                {
                  id: 2,
                  customer: "Trần Thị B",
                  paymentId: "PAY002",
                  shippingId: "SHIP002",
                  date: "2025-09-18",
                  total: 350000,
                  status: "Đã giao",
                  products: [
                    { id: 2, name: "Quần jeans", quantity: 1, price: 350000 }
                  ]
                }
              ]}
              shipping={[
                { id: 1, orderId: 1, userId: 2, address: "TP HCM", status: "Đang giao", expected: "2025-09-20", shipper: "Nguyễn Văn C" },
                { id: 2, orderId: 2, userId: 3, address: "TP HCM", status: "Đã giao", expected: "2025-09-18", shipper: "Trần Văn D" }
              ]}
              shippers={[
                { id: 1, name: "Nguyễn Văn C" },
                { id: 2, name: "Trần Văn D" }
              ]}
            />
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
