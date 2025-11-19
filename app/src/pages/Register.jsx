import { Link } from "react-router";

const Register = () => {
    return (
        <div className="h-screen w-screen flex items-center justify-center bg-gray-100 text-blue-700">
            <div className="bg-white p-8 rounded-xl shadow-lg w-80 flex flex-col items-center space-y-6">
                <h1 className="text-3xl font-bold text-center">Create an Account</h1>

                <form method="POST" className="flex flex-col space-y-4 w-full">
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        className="border border-gray-400 rounded p-2 text-blue-700"
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="border border-gray-400 rounded p-2 text-blue-700"
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="border border-gray-400 rounded p-2 text-blue-700"
                    />

                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="border border-gray-400 rounded p-2 text-blue-700"
                    />

                    <div className="flex flex-col">
                        <label className="mb-1 font-medium">Birthdate</label>
                        <input
                            type="date"
                            name="birthdate"
                            className="border border-gray-400 rounded p-2 text-blue-700"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="mb-1 font-medium">Gender</label>
                        <select
                            name="gender"
                            className="border border-gray-400 rounded p-2 cursor-pointer text-blue-700"
                        >
                            <option value="">Select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <button
                        type="submit"
className="w-full border-2 border-black bg-white text-blue-700 p-2 rounded cursor-pointer font-semibold 
hover:bg-blue-700 hover:text-white transition"
                    >
                        Register
                    </button>
                </form>

                <p className="text-center text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="underline font-bold">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
