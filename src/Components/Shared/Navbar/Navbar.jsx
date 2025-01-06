import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import Container from "../../Container/Container";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const Navbar = () => {
    const { user, logOut, isDarkMode, toggleDarkMode } = useContext(AuthContext);

    const navOptions = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? "text-teal-400 font-bold"
                            : "hover:text-teal-400 transition-colors"
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
                            : "hover:text-teal-400 transition-colors"
                    }
                >
                    All Reviews
                </NavLink>
            </li>
            {user && (
                <>
                    <li>
                        <NavLink
                            to="/add-reviews"
                            className={({ isActive }) =>
                                isActive
                                    ? "text-teal-400 font-bold"
                                    : "hover:text-teal-400 transition-colors"
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
                                    : "hover:text-teal-400 transition-colors"
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
                                    : "hover:text-teal-400 transition-colors"
                            }
                        >
                            Game WatchList
                        </NavLink>
                    </li>
                </>
            )}
        </>
    );

    return (
        <div className="navbar fixed z-50 bg-black bg-opacity-45 text-teal-400 shadow-lg w-full">
            <Container>
                <div className="navbar-start flex items-center">
                    {/* Dropdown for mobile */}
                    <div className="dropdown lg:hidden">
                        <button
                            tabIndex={0}
                            className="btn btn-ghost text-teal-400 hover:bg-gray-700"
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
                            className="menu menu-sm dropdown-content bg-gray-800 text-teal-400 rounded-lg mt-3 w-48 shadow-lg"
                        >
                            {navOptions}
                        </ul>
                    </div>
                    {/* Logo */}
                    <Link
                        to="/"
                        className="text-2xl font-bold text-teal-400 hover:text-teal-400 transition-all"
                    >
                        Chill Gamer
                    </Link>
                </div>

                {/* Center Navigation */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal space-x-6 text-lg font-medium">
                        {navOptions}
                    </ul>
                </div>

                {/* End Section: Dark Mode & Profile */}
                <div className="navbar-end flex items-center gap-4">
                    {/* Dark Mode Toggle */}
                    <DarkModeSwitch
                        style={{ marginBottom: "0.5rem", color: "white" }}
                        checked={isDarkMode}
                        onChange={toggleDarkMode}
                        size={40}
                    />

                    {/* Profile or Login */}
                    {user ? (
                        <>
                            <div
                                className="tooltip tooltip-bottom"
                                data-tip={user.displayName || "User"}
                            >
                                <img
                                    src={user?.photoURL}
                                    alt="User Avatar"
                                    className="w-10 h-10 rounded-full border-2 border-teal-400 shadow-md hover:scale-105 transition-transform"
                                />
                            </div>
                            <button
                                className="btn btn-outline border-teal-400 text-teal-400 px-4 py-1 rounded-lg shadow-md transition-all"
                                onClick={logOut}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <Link
                            to="/login"
                            className="btn btn-success bg-teal-400 hover:bg-teal-500 text-white px-4 py-1 rounded-lg shadow-md transition-all"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </Container>
        </div>
    );
};

export default Navbar;
