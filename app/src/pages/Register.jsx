import { useCallback, useMemo } from "react";
import { Link, useNavigate } from "react-router";
import { FormProvider, useForm } from "react-hook-form";
import { useAuth } from "../contexts/auth";

export default function Register() {
  const { error, loading, register: registerUser } = useAuth();
  const navigate = useNavigate();

  const methods = useForm();
  const { getValues, handleSubmit, reset, register, formState } = methods;
  const { errors } = formState;

  const handleCancel = useCallback(() => {
    reset();
  }, [reset]);

  const handleRegister = useCallback(
    async (data) => {
      // Aquí puedes mapear a lo que espere tu API
      const payload = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        telephone: data.telephone,
        password: data.password,
        birthdate: data.birthdate,
        nationality: data.nationality,
        role: data.role, // o roleId después
      };

      const loggedIn = await registerUser(payload);

      if (loggedIn) {
        navigate({ pathname: "/", replace: true });
      }
    },
    [registerUser, navigate]
  );

  const validationRules = useMemo(
    () => ({
      firstName: { required: "First name is required" },
      lastName: { required: "Last name is required" },
      email: {
        required: "Email is required",
        pattern: {
          value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          message: "Invalid email",
        },
      },
      telephone: { required: "Telephone is required" },
      password: { required: "Password is required" },
      confirmPassword: {
        required: "Password confirmation is required",
        validate: (value) =>
          value === getValues("password") || "Passwords do not match",
      },
      birthdate: { required: "Birthdate is required" },
      nationality: { required: "Nationality is required" },
      role: { required: "Role is required" },
    }),
    [getValues]
  );

  const firstError =
    errors.firstName?.message ||
    errors.lastName?.message ||
    errors.email?.message ||
    errors.telephone?.message ||
    errors.password?.message ||
    errors.confirmPassword?.message ||
    errors.birthdate?.message ||
    errors.nationality?.message ||
    errors.role?.message;

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 px-4">
      <div className="relative w-full max-w-xl">
        {/* Glow */}
        <div className="pointer-events-none absolute -inset-1 rounded-3xl bg-gradient-to-tr from-indigo-500/40 via-sky-400/30 to-emerald-400/40 blur-2xl opacity-60 dark:opacity-80" />

        {/* Card */}
        <div className="relative bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200/70 dark:border-slate-700/80 rounded-3xl shadow-[0_24px_60px_rgba(15,23,42,0.35)] px-8 py-10 flex flex-col items-center space-y-6">
          {/* Header */}
          <div className="w-full text-center space-y-2">
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
              Create an account
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Fill in your details to start using the platform.
            </p>
          </div>

          {/* Error global */}
          {(error || firstError) && (
            <p className="w-full text-xs text-red-500 text-center">
              {firstError ||
                "There was a problem creating your account. Please try again."}
            </p>
          )}

          {/* Form */}
          <FormProvider {...methods}>
            <form
              onSubmit={handleSubmit(handleRegister)}
              className="w-full space-y-5"
            >
              {/* Nombre y apellidos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="firstName"
                    className="block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400"
                  >
                    First name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    {...register("firstName", validationRules.firstName)}
                    className="w-full rounded-xl border border-slate-300/90 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 px-3 py-2.5 text-sm text-slate-900 dark:text-slate-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="lastName"
                    className="block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400"
                  >
                    Last name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    {...register("lastName", validationRules.lastName)}
                    className="w-full rounded-xl border border-slate-300/90 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 px-3 py-2.5 text-sm text-slate-900 dark:text-slate-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>

              {/* Email y teléfono */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    {...register("email", validationRules.email)}
                    className="w-full rounded-xl border border-slate-300/90 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 px-3 py-2.5 text-sm text-slate-900 dark:text-slate-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="telephone"
                    className="block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400"
                  >
                    Telephone
                  </label>
                  <input
                    id="telephone"
                    type="tel"
                    placeholder="+32 466 00 00 00"
                    {...register("telephone", validationRules.telephone)}
                    className="w-full rounded-xl border border-slate-300/90 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 px-3 py-2.5 text-sm text-slate-900 dark:text-slate-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>

              {/* Passwords */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="password"
                    className="block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    {...register("password", validationRules.password)}
                    className="w-full rounded-xl border border-slate-300/90 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 px-3 py-2.5 text-sm text-slate-900 dark:text-slate-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400"
                  >
                    Confirm password
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    placeholder="••••••••"
                    {...register(
                      "confirmPassword",
                      validationRules.confirmPassword
                    )}
                    className="w-full rounded-xl border border-slate-300/90 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 px-3 py-2.5 text-sm text-slate-900 dark:text-slate-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
              </div>

              {/* Birthdate, nationality, role */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label
                    htmlFor="birthdate"
                    className="block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400"
                  >
                    Birthdate
                  </label>
                  <input
                    id="birthdate"
                    type="date"
                    {...register("birthdate", validationRules.birthdate)}
                    className="w-full rounded-xl border border-slate-300/90 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 px-3 py-2.5 text-sm text-slate-900 dark:text-slate-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="nationality"
                    className="block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400"
                  >
                    Nationality
                  </label>
                  <input
                    id="nationality"
                    type="text"
                    placeholder="Belgian, Spanish..."
                    {...register("nationality", validationRules.nationality)}
                    className="w-full rounded-xl border border-slate-300/90 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 px-3 py-2.5 text-sm text-slate-900 dark:text-slate-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="role"
                    className="block text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400"
                  >
                    Role
                  </label>
                  <select
                    id="role"
                    {...register("role", validationRules.role)}
                    className="w-full rounded-xl border border-slate-300/90 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 px-3 py-2.5 text-sm text-slate-900 dark:text-slate-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                  >
                    <option value="">Select role</option>
                    <option value="worker">Worker</option>
                    <option value="boss">Boss</option>
                  </select>
                </div>
              </div>

              {/* Submit + Cancel */}
              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-500 text-sm font-semibold text-white py-2.5 shadow-lg shadow-indigo-500/30 hover:from-indigo-500 hover:via-sky-400 hover:to-emerald-400 active:scale-[0.99] transition disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? "Creating account..." : "Register"}
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

          {/* Login link */}
          <p className="text-center text-sm text-slate-600 dark:text-slate-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
