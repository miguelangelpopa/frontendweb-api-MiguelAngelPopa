import { Link } from "react-router";

const Login = () => {
  const handleGoogleLogin = () => {
    console.log("Google login");
  };

  const handleFacebookLogin = () => {
    console.log("Facebook login");
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100 text-blue-700">
      <div className="bg-white p-8 rounded-xl shadow-lg w-80 flex flex-col items-center space-y-6">
        <h1 className="text-3xl font-bold text-center">Welcome back!</h1>

        <form method="GET" className="space-y-4 w-full">
          <input
            type="text"
            name="username"
            placeholder="Username or Email"
            className="w-full border p-2 rounded text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full border p-2 rounded text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />

          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 border border-blue-800 p-2 rounded cursor-pointer font-semibold text-white transition"
          >
            Log in
          </button>
        </form>

        {/* Separador */}
        <div className="flex items-center w-full gap-3">
          <span className="h-px flex-1 bg-gray-300" />
          <span className="text-xs text-gray-500">or continue with</span>
          <span className="h-px flex-1 bg-gray-300" />
        </div>

        {/* Botones sociales */}
        <div className="w-full space-y-2">
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-md py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition"
          >
            {/* Icono simple “G” (puedes cambiarlo por un SVG oficial) */}
            <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white border border-gray-300 text-xs">
              G
            </span>
            <span>Continue with Google</span>
          </button>

          <button
            type="button"
            onClick={handleFacebookLogin}
            className="w-full flex items-center justify-center gap-2 rounded-md py-2 text-sm font-semibold text-white bg-[#1877F2] hover:bg-[#145dbd] transition"
          >
            <span className="w-5 h-5 flex items-center justify-center rounded-full bg-white/10 text-xs font-bold">
              f
            </span>
            <span>Continue with Facebook</span>
          </button>
        </div>

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
