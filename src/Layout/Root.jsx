import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";
import VantaNet from "../Components/VantaNet/VantaNet";


const Root = () => {
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/register')
    return (
        <div>
            {noHeaderFooter || <Navbar />}
            <div className="min-h-[calc(100vh-246px)] bg-[#0A0D12]">
                <Outlet />
            </div>

            {noHeaderFooter || <Footer />}
        </div>
    );
};

export default Root;