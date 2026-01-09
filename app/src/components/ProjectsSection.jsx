import { useState } from "react";

const initialProjects = [
  {
    id: 1,
    name: "Reforma oficinas centro",
    description: "Reforma integral de planta 3",
    location: "Bruselas",
    startDate: "2026-01-01",
    endDate: "2026-03-31",
    isActive: true,
  },
];

export default function ProjectsSection() {
  const [projects, setProjects] = useState(initialProjects);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    location: "",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProject = {
      id: Date.now(),
      ...formData,
      isActive: true,
    };
    setProjects((prev) => [newProject, ...prev]);
    setFormData({
      name: "",
      description: "",
      location: "",
      startDate: "",
      endDate: "",
    });
  };

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-slate-100 mb-4">
        Projects
      </h2>

      {/* Formulario crear proyecto */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-6 mb-8 border border-slate-100 dark:border-slate-700">
        <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-slate-100">
          Create new project
        </h3>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">
              Description
            </label>
            <textarea
              name="description"
              rows={2}
              value={formData.description}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">
              Start date
            </label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-slate-200 mb-1">
              End date
            </label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-gray-900 dark:text-slate-100 shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>

          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold shadow hover:bg-indigo-700 transition"
            >
              Save project
            </button>
          </div>
        </form>
      </div>

      {/* Lista de proyectos */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-100 dark:border-slate-700">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-slate-700">
          <thead className="bg-gray-100 dark:bg-slate-800">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-slate-300 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-slate-300 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-slate-300 uppercase tracking-wider">
                Start
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-slate-300 uppercase tracking-wider">
                End
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-slate-300 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-slate-900 divide-y divide-gray-200 dark:divide-slate-700">
            {projects.map((project) => (
              <tr key={project.id} className="hover:bg-indigo-50 dark:hover:bg-slate-800">
                <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-slate-100">
                  {project.name}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-slate-300">
                  {project.location}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-slate-300">
                  {project.startDate}
                </td>
                <td className="px-6 py-4 text-sm text-gray-600 dark:text-slate-300">
                  {project.endDate}
                </td>
                <td className="px-6 py-4 text-sm">
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200">
                    {project.isActive ? "Active" : "Inactive"}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
