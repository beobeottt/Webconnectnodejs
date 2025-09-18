import { useState } from "react"
import NavBar from "./NavBar";

const RegisterPage: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNuber] = useState("");
    const [birthday, setBirthday] = useState("");
    const [shipping_address,setShipping_address] = useState("");
    const handleRegister = (e: React.FormEvent) =>
    {
        e.preventDefault();

        console.log("Email","Password","FullName","PhoneNumber","Birthday","shipping_address")
    }
    return(
        <div>
            <NavBar/>
        <div className="min-h-screen flex items-center justify-center bg-sky-500">
            
            <div className="flex w-full max-w-6xl bg-white rounded-lg shadow-lg overflow-hidden">
                {/* Banner left*/}
                <div className="hidden md:flex flex-1 bg-gradient-to-br from-sky-400 to-red-500 items-center justify-center">
                    <h2 className="text-4xl font-bold text-white text-center">
                        TRẦN ĐỨC BO
                    </h2>
                </div>

                {/* Form Register right*/}
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-2xl font-bold mb-6">Register</h2>

                    <form onSubmit={handleRegister} className="space-y-4">
                        <input 
                        type="text" 
                        placeholder="Email/PhoneNumber"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border rounded-lg px-4 py-2 focus:ring-orange-500 outline-none"
                        />
                        <input type="text"
                        placeholder="FullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full border rounded-lg px-4 py-2 focus:ring-orange-500 outline-none"
                        />
                        <input type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border rounded-lg px-4 py-2 focus:ring-orange-500 outline-none"
                        />
                        <input type="number"
                        placeholder="PhoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNuber(e.target.value)}
                        className="w-full border rounded-lg px-4 py-2 focus:ring-orange-500 ountline-none"
                        />
                        <input type="date"
                        value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                        className="w-full border rounded-lg px-4 py-2 focus:ring-orange-500 ountline-none"
                        />
                        <input type="text"
                        placeholder="Shipping Address"
                        value={shipping_address}
                        onChange={(e) => setShipping_address(e.target.value)}
                        className="w-full border rounded-lg px-4 py-2 focus:ring-orange-500 ountline-none"
                        />
                        <button
                            type="submit"
                            className="w-full bg-orange-500 text-white font-bold py-2 rounded-lg hover:bg-orange-600 transition"
                        >
                            Register
                        </button>
                    </form>
                </div>
            
            </div>

        </div>
        </div>
    );
};

export default RegisterPage;