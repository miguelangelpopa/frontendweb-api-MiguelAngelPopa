import { Link } from "react-router";

const Register = () => {
  const handleGoogleRegister = () => {
    // TODO: aquí llamas a tu flujo de registro/login con Google
    console.log("Google register");
  };

  const handleFacebookRegister = () => {
    // TODO: aquí llamas a tu flujo de registro/login con Facebook
    console.log("Facebook register");
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100 text-blue-700">
      <div className="bg-white p-8 rounded-xl shadow-lg w-80 flex flex-col items-center space-y-6">
        <h1 className="text-3xl font-bold text-center">Create an Account</h1>

        <form method="POST" className="flex flex-col space-y-4 w-full">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="border border-gray-400 rounded p-2 text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border border-gray-400 rounded p-2 text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border border-gray-400 rounded p-2 text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="border border-gray-400 rounded p-2 text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Birthdate</label>
            <input
              type="date"
              name="birthdate"
              className="border border-gray-400 rounded p-2 text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="mb-1 font-medium">Gender</label>
            <select
              name="gender"
              className="border border-gray-400 rounded p-2 cursor-pointer text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full border-2 border-black bg-white text-blue-700 p-2 rounded cursor-pointer font-semibold hover:bg-blue-700 hover:text-white transition"
          >
            Register
          </button>
        </form>

        {/* Separador */}
        <div className="flex items-center w-full gap-3">
          <span className="h-px flex-1 bg-gray-300" />
          <span className="text-xs text-gray-500">or sign up with</span>
          <span className="h-px flex-1 bg-gray-300" />
        </div>

        {/* Botones sociales */}
        <div className="w-full space-y-2">
          <button
            type="button"
            onClick={handleGoogleRegister}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
          >
            <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white border border-gray-300 text-xs">
              G
            </span>
            <span>Sign up with Google</span>
          </button>

          <button
            type="button"
            onClick={handleFacebookRegister}
            className="w-full flex items-center justify-center gap-2 rounded-md py-2 text-sm font-semibold text-white bg-[#1877F2] hover:bg-[#145dbd] transition"
          >
            <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white/10 text-xs font-bold">
              f
            </span>
            <span>Sign up with Facebook</span>
          </button>
        </div>

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
