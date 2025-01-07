import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import Footer from "../Components/Shared/Footer/Footer";
import VantaNet from "../Components/VantaNet/VantaNet";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";


const Root = () => {
    const {isDarkMode} = useContext(AuthContext);
    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('/login') || location.pathname.includes('/register')
    return (
        <div className={`${isDarkMode ? 'bg-[#f1f7fa]'  : 'bg-[#0A0D12]'}`}>
            {noHeaderFooter || <Navbar />}
            <div className={`min-h-[calc(100vh-246px)] ${isDarkMode ? 'bg-[#f1f7fa]'  : 'bg-[#0A0D12]'}`}>
                <Outlet />
            </div>

            {noHeaderFooter || <Footer />}
        </div>
    );
};

export default Root;