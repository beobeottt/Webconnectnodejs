import React from 'react';
import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductList from './pages/ProductList';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AdminDashboard from './pages/AdminDashboard';

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
