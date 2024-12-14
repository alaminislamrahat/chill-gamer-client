import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const navOptions = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "text-teal-400 font-bold"
                            : "hover:text-teal-300 transition-colors"
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/all-reviews"
                    className={({ isActive }) =>
                        isActive
                            ? "text-teal-400 font-bold"
                            : "hover:text-teal-300 transition-colors"
                    }
                >
                    All Reviews
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/add-reviews"
                    className={({ isActive }) =>
                        isActive
                            ? "text-teal-400 font-bold"
                            : "hover:text-teal-300 transition-colors"
                    }
                >
                    Add Review
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/my-reviews"
                    className={({ isActive }) =>
                        isActive
                            ? "text-teal-400 font-bold"
                            : "hover:text-teal-300 transition-colors"
                    }
                >
                    My Reviews
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/game-watchlist"
                    className={({ isActive }) =>
                        isActive
                            ? "text-teal-400 font-bold"
                            : "hover:text-teal-300 transition-colors"
                    }
                >
                    Game WatchList
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="navbar bg-gradient-to-r z-40 from-gray-900 via-gray-800 to-gray-900 text-white shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <button
                        tabIndex={0}
                        className="btn btn-ghost lg:hidden text-white hover:bg-gray-700"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </button>
                    <ul
                        tabIndex={0}
                        className="z-40 menu menu-sm dropdown-content bg-gray-800 text-white rounded-lg mt-3 w-48 shadow-lg"
                    >
                        {navOptions}
                       
                    </ul>
                </div>
                <Link
                    to="/"
                    className="text-2xl font-bold text-teal-400 hover:text-teal-500 transition-all"
                >
                    Chill Gamer
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal space-x-6 text-lg font-medium">
                    {navOptions}
                </ul>
            </div>
            <div className="navbar-end flex items-center gap-6">
                {user && (
                    <div className="tooltip tooltip-bottom" data-tip={user.displayName || "User"}>
                        <img
                            src={user?.photoURL}
                            alt="User Avatar"
                            className="w-12 h-12 rounded-full border-2 border-teal-400 shadow-md hover:scale-105 transition-transform"
                        />
                    </div>
                )}
                {user ? (
                    <button
                        className="btn btn-error bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg shadow-md transition-all"
                        onClick={logOut}
                    >
                        Logout
                    </button>
                ) : (
                    <Link
                        to="/login"
                        className="btn btn-success bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg shadow-md transition-all"
                    >
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
