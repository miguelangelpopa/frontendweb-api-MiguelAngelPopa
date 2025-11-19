import { Link } from "react-router";

const Login = () => {
    return (
        <div className="h-screen w-screen flex items-center justify-center bg-gray-100 text-blue-700">
            <div className="bg-white p-8 rounded-xl shadow-lg w-80 flex flex-col items-center space-y-6">
                <h1 className="text-3xl font-bold text-center">Welcome back!</h1>

                <form method="GET" className="space-y-4 w-full">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username or Email"
                        className="w-full border p-2 rounded text-blue-700"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="w-full border p-2 rounded text-blue-700"
                    />

                    <button
                        type="submit"
                        className="w-full border border-black p-2 rounded cursor-pointer font-semibold text-white"
                    >
                        Log in
                    </button>
                </form>

                <p className="text-center text-sm">
                    Don’t have an account?{" "}
                    <Link to="/register" className="underline font-bold">
                        Register
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
