import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="text-9xl font-bold text-red-500">404</h1>
                <h2 className="text-3xl font-semibold mt-4 text-gray-800">
                    <Typewriter
                        words={['Oops! Page Not Found.', 'Something went wrong.']}
                        loop={5} // Number of loops (use `0` for infinite loop)
                        cursor
                        cursorStyle="|"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </h2>
                <p className="mt-4 text-gray-600">
                    The page you are looking for doesn’t exist or has been moved.
                </p>
                <button className="btn btn-primary mt-6">
                    <a href="/">Go Back Home</a>
                </button>
            </div>
        </div>
    );
};

export default Error;
