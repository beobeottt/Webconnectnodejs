import { ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "./Footer"
import NavBar from "./NavBar"
import Categories from "./Categories";

const HomePage: React.FC = () =>
{
    return(
        <div className="bg-[#1e1f29] text-white min-h-screen font-sans">
            <NavBar/>
            <Categories/>
            
        </div>
    );
};

export default HomePage;