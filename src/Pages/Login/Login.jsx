import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';
import { FcGoogle } from 'react-icons/fc'; // Google icon
import img from '../../assets/login.jpg';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const Login = () => {
    const { signIn} = useContext(AuthContext);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate()
    const location = useLocation()

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
            .then((result) => {
                console.log(result);
                navigate(location.state ? location.state : '/')
            })
            .catch((error) => console.log(error.message));
    };

    const googleLogin =()=>{
        signInWithPopup(auth, provider)
        .then(result => {
            console.log(result)
            navigate(location.state ? location.state : '/')
        })
        .catch(err => {
            console.log(err)
        })
    }
        

    return (
        <div className="hero  min-h-screen flex items-center justify-center">
            <div className="hero-content flex-col lg:flex-row-reverse gap-10 items-center">
                <div className="text-center lg:text-left w-1/2">
                    <img src={img} alt="Login" className="rounded-lg shadow-lg" />
                </div>
                <div className="card bg-white w-full max-w-md rounded-lg shadow-2xl p-8">
                    <h1 className="text-center text-3xl font-extrabold text-gray-800 mb-6">Login</h1>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="form-control">
                            <label className="label font-semibold text-gray-600">
                                <span>Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label font-semibold text-gray-600">
                                <span>Password</span>
                            </label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                className="input input-bordered border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                                required
                            />
                            <label className="label mt-1">
                                <a href="#" className="text-sm text-pink-600 hover:underline">
                                    Forgot password?
                                </a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button
                                type="submit"
                                className="btn bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-md py-2"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    <div className="divider mt-6 text-gray-400">OR</div>
                    <div className="flex justify-center">
                        <button
                            onClick={googleLogin}
                            className="flex items-center justify-center w-full py-3 px-6 border border-gray-300 rounded-md shadow-md hover:shadow-lg transition-all duration-300 bg-white hover:bg-gray-100 text-gray-800 font-medium gap-3"
                            type="button"
                        >
                            <FcGoogle className="text-2xl" /> {/* Google icon */}
                            Continue with Google
                        </button>
                    </div>
                    <p className="py-6 text-center text-gray-600">
                        New here?{' '}
                        <Link className="font-bold text-pink-500 hover:underline" to="/register">
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
