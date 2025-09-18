import React, { useState } from "react";
import { Facebook, Chrome } from "lucide-react";
import NavBar from "./NavBar";

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Email:", email, "Password:", password);
        // TODO: gọi API login ở đây
    };

    return (
        <div>
            <NavBar/>
        <div className="min-h-screen flex items-center justify-center bg-sky-500">
            
            <div className="flex w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">

                {/* Banner trái */}
                <div className="hidden md:flex flex-1 bg-gradient-to-br from-sky-400 to-red-500 items-center justify-center">
                    <h2 className="text-4xl font-bold text-white text-center">
                        TRẦN GIA LONG
                    </h2>
                </div>

                {/* Form login bên phải */}
                <div className="w-full md:w-1/2 p-8 ">
                    <h2 className="text-2xl font-bold mb-6">Login</h2>

                    <form onSubmit={handleLogin} className="space-y-4">
                        <input
                            type="text"
                            placeholder="Email/Số điện thoại/Tên đăng nhập"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
                        />
                        <input
                            type="password"
                            placeholder="Mật khẩu"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-orange-500 outline-none"
                        />

                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white font-bold py-2 rounded-lg hover:bg-orange-600 transition"
                        >
                            ĐĂNG NHẬP
                        </button>
                    </form>

                    <div className="text-right mt-2">
                        <a href="#" className="text-sm text-blue-500 hover:underline">
                            Quên mật khẩu
                        </a>
                    </div>

                    <div className="flex items-center my-4">
                        <div className="flex-grow h-px bg-gray-300"></div>
                        <span className="px-2 text-gray-500 text-sm">HOẶC</span>
                        <div className="flex-grow h-px bg-gray-300"></div>
                    </div>

                    {/* Login bằng MXH */}
                    <div className="flex gap-4">
                        <button className="flex-1 flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-gray-100">
                            <Facebook className="text-blue-600" size={20} />
                            <span>Facebook</span>
                        </button>

                        <button className="flex-1 flex items-center justify-center gap-2 border rounded-lg py-2 hover:bg-gray-100">
                            <Chrome className="text-red-500" size={20} />
                            <span>Google</span>
                        </button>
                    </div>

                    <p className="mt-6 text-sm text-gray-600 text-center">
                        Bạn mới biết đến TGL?{" "}
                        <a href="/register" className="text-red-500 font-medium hover:underline">
                            Đăng ký
                        </a>
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default LoginPage;
