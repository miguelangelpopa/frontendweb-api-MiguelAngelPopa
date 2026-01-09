import { useCallback } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { FormProvider, useForm } from "react-hook-form";
import { useAuth } from "../contexts/auth";

const validationRules = {
  email: {
    required: "Email is required",
  },
  password: {
    required: "Password is required",
  },
};

const Login = () => {
  const { error, loading, login } = useAuth();
  const navigate = useNavigate();
  const { search } = useLocation();

  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { handleSubmit, reset, register, formState } = methods;
  const { errors } = formState;

  const handleCancel = useCallback(() => {
    reset();
  }, [reset]);

  const handleLogin = useCallback(
    async ({ email, password }) => {
      const loggedIn = await login(email, password);
      if (loggedIn) {
        const params = new URLSearchParams(search);
        navigate({
          pathname: params.get("redirect") || "/",
          replace: true,
        });
      }
    },
    [login, navigate, search]
  );

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 px-4">
      <div className="relative w-full max-w-md">
        {/* Glow de fondo */}
        <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-tr from-indigo-500/40 via-sky-400/30 to-emerald-400/40 blur-2xl opacity-60 dark:opacity-80" />

        {/* Card */}
        <div className="relative bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/70 dark:border-slate-700/80 rounded-3xl shadow-[0_24px_60px_rgba(15,23,42,0.35)] px-8 py-10 flex flex-col items-center space-y-8">
          {/* Header */}
          <div className="w-full text-center space-y-2">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
              Welcome back
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Log in to manage projects, people and hours.
            </p>
          </div>

          {/* Error global */}
          {(error || errors.email || errors.password) && (
            <p className="w-full text-xs text-red-500 text-center">
              {error
                ? "Login failed. Please check your credentials."
                : errors.email?.message || errors.password?.message}
            </p>
          )}

          {/* Form */}
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(handleLogin)}
              className="space-y-5 w-full"
            >
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                  placeholder="you@example.com"
                  {...register("email", validationRules.email)}
                  className="w-full rounded-xl border border-slate-300/90 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 px-3 py-2.5 text-sm text-slate-900 dark:text-slate-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400"
                  >
                    Password
                  </label>
                  <button
                    type="button"
                    className="text-xs font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    Forgot?
                  </button>
                </div>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  {...register("password", validationRules.password)}
                  className="w-full rounded-xl border border-slate-300/90 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 px-3 py-2.5 text-sm text-slate-900 dark:text-slate-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-500 text-sm font-semibold text-white py-2.5 shadow-lg shadow-indigo-500/30 hover:from-indigo-500 hover:via-sky-400 hover:to-emerald-400 active:scale-[0.99] transition disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? "Logging in..." : "Log in"}
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-600 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </FormProvider>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />

          {/* Register link */}
          <p className="text-center text-sm text-slate-600 dark:text-slate-400">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
