import { useState } from "react";

const initialUser = {
  firstName: "Juan",
  lastName: "Pérez",
  email: "juan@example.com",
  telephone: "+32 466 00 00 00",
  birthdate: "1995-05-10",
  nationality: "Spanish",
  roleId: 2,
  managerId: 1,
  profilePictureUrl: "",
  isActive: true,
  location: {
    streetName: "Laarstraat",
    streetNumber: "27",
    city: "Aalst",
    postcode: "9320",
    country: "Belgium",
    addressLineExtra: "",
  },
};

const rolesMock = [
  { id: 1, name: "boss" },
  { id: 2, name: "worker" },
];

const managersMock = [
  { id: 1, name: "Miguel Alvarez" },
  { id: 2, name: "Sara Lopez" },
];

export default function ProfileSettings() {
  const [user, setUser] = useState(initialUser);
  const [saving, setSaving] = useState(false);

  const handleChange = (section, field) => (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;

    if (section === "user") {
      setUser((prev) => ({ ...prev, [field]: value }));
    } else if (section === "location") {
      setUser((prev) => ({
        ...prev,
        location: { ...prev.location, [field]: value },
      }));
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setUser((prev) => ({ ...prev, profilePictureUrl: url }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSaving(true);

    // TODO: llamar a tu API PUT /users/:id
    console.log("Saving profile:", user);

    setTimeout(() => setSaving(false), 800);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 px-4 py-8 md:px-10">
      <div className="max-w-5xl mx-auto space-y-8">
        <header>
          <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-50 tracking-tight">
            Profile settings
          </h1>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
            Update your personal details, address and account information.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* BASIC INFO + AVATAR */}
          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 md:p-8 space-y-6">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
              Personal information
            </h2>

            <div className="flex flex-col md:flex-row gap-6 items-start">
              {/* Avatar */}
              <div className="flex flex-col items-center gap-3">
                <div className="h-24 w-24 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex items-center justify-center text-xl font-semibold text-slate-600 dark:text-slate-200">
                  {user.profilePictureUrl ? (
                    <img
                      src={user.profilePictureUrl}
                      alt={`${user.firstName} ${user.lastName}`}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    (user.firstName?.[0] || "U") +
                    (user.lastName?.[0] || "")
                  )}
                </div>
                <label className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-100 bg-white dark:bg-slate-800 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700">
                  Change photo
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarChange}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Campos personales */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold tracking-wide uppercase text-slate-500 dark:text-slate-400">
                    First name
                  </label>
                  <input
                    type="text"
                    value={user.firstName}
                    onChange={handleChange("user", "firstName")}
                    className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold tracking-wide uppercase text-slate-500 dark:text-slate-400">
                    Last name
                  </label>
                  <input
                    type="text"
                    value={user.lastName}
                    onChange={handleChange("user", "lastName")}
                    className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold tracking-wide uppercase text-slate-500 dark:text-slate-400">
                    Email
                  </label>
                  <input
                    type="email"
                    value={user.email}
                    onChange={handleChange("user", "email")}
                    className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold tracking-wide uppercase text-slate-500 dark:text-slate-400">
                    Telephone
                  </label>
                  <input
                    type="tel"
                    value={user.telephone}
                    onChange={handleChange("user", "telephone")}
                    className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold tracking-wide uppercase text-slate-500 dark:text-slate-400">
                    Birthdate
                  </label>
                  <input
                    type="date"
                    value={user.birthdate}
                    onChange={handleChange("user", "birthdate")}
                    className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold tracking-wide uppercase text-slate-500 dark:text-slate-400">
                    Nationality
                  </label>
                  <input
                    type="text"
                    value={user.nationality}
                    onChange={handleChange("user", "nationality")}
                    className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* ADDRESS / LOCATION */}
          <section className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm p-6 md:p-8 space-y-4">
            <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
              Address (Location)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">
                  Street name
                </label>
                <input
                  type="text"
                  value={user.location.streetName}
                  onChange={handleChange("location", "streetName")}
                  className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">
                  Street number
                </label>
                <input
                  type="text"
                  value={user.location.streetNumber}
                  onChange={handleChange("location", "streetNumber")}
                  className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">
                  City
                </label>
                <input
                  type="text"
                  value={user.location.city}
                  onChange={handleChange("location", "city")}
                  className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">
                  Postcode
                </label>
                <input
                  type="text"
                  value={user.location.postcode}
                  onChange={handleChange("location", "postcode")}
                  className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="space-y-1">
                <label className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">
                  Country
                </label>
                <input
                  type="text"
                  value={user.location.country}
                  onChange={handleChange("location", "country")}
                  className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div className="space-y-1 md:col-span-2">
                <label className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">
                  Extra address info
                </label>
                <input
                  type="text"
                  value={user.location.addressLineExtra}
                  onChange={handleChange("location", "addressLineExtra")}
                  className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
            </div>
          </section>

         
          {/* SAVE BUTTON */}
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center px-5 py-2.5 rounded-xl bg-indigo-600 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 disabled:opacity-70 disabled:cursor-not-allowed transition"
            >
              {saving ? "Saving..." : "Save changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
