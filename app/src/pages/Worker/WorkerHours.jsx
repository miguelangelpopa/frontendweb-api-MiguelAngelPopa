import { useState } from "react";
import { Link } from "react-router";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { weeklyHoursMock, monthlyHoursMock } from "../../api/mock_data.jsx";

export default function WorkerHours() {
  const [view, setView] = useState("week");

  const data = view === "week" ? weeklyHoursMock : monthlyHoursMock;
  const xAxisDataKey = view === "week" ? "day" : "week";

  const totalHours = data.reduce((sum, item) => sum + item.hours, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 p-6 md:p-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 dark:bg-indigo-900/60 dark:text-indigo-300">
            ⏱️
          </span>
          <span>Worked Hours Overview</span>
        </h1>
        <Link
          to="/workerDashboard"
          className="text-indigo-600 dark:text-indigo-300 hover:text-indigo-800 dark:hover:text-indigo-200 transition duration-150 font-medium flex items-center text-sm bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1.5 rounded-full border border-indigo-100 dark:border-indigo-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Dashboard
        </Link>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Card total hours*/}
        <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur p-6 rounded-2xl shadow-lg mb-6 border border-indigo-100 dark:border-slate-700 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Total Hours Tracked{" "}
              <span className="text-indigo-500 dark:text-indigo-300">
                ({view === "week" ? "this week" : "this month"})
              </span>
            </p>
            <p className="text-4xl font-extrabold text-slate-900 dark:text-slate-100 mt-2">
              {totalHours} <span className="text-indigo-500">hrs</span>
            </p>
          </div>
          <div className="hidden sm:flex flex-col items-end text-xs text-slate-500 dark:text-slate-400">
            <span className="inline-flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              Logged time
            </span>
          </div>
        </div>

        {/* Toggle week/month */}
        <div className="flex gap-3 mb-8">
          <button
            onClick={() => setView("week")}
            className={`px-6 py-2 rounded-full font-semibold text-sm transition duration-300 flex items-center gap-2 ${
              view === "week"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-300 hover:bg-indigo-700"
                : "bg-white/90 dark:bg-slate-900/80 text-gray-700 dark:text-slate-100 border border-gray-300 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-800"
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-indigo-300" />
            Current Week
          </button>
          <button
            onClick={() => setView("month")}
            className={`px-6 py-2 rounded-full font-semibold text-sm transition duration-300 flex items-center gap-2 ${
              view === "month"
                ? "bg-indigo-600 text-white shadow-md shadow-indigo-300 hover:bg-indigo-700"
                : "bg-white/90 dark:bg-slate-900/80 text-gray-700 dark:text-slate-100 border border-gray-300 dark:border-slate-700 hover:bg-gray-100 dark:hover:bg-slate-800"
            }`}
          >
            <span className="h-2 w-2 rounded-full bg-indigo-300" />
            Current Month
          </button>
        </div>

        {/* Grafiek */}
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur p-6 rounded-2xl shadow-2xl w-full h-[400px] border border-slate-100 dark:border-slate-700">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-slate-100 mb-4 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-indigo-500" />
            Hours Visualization
          </h2>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart
              data={data}
              margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
            >
              <CartesianGrid
                strokeDasharray="4 4"
                stroke="#e0e0e0"
                vertical={false}
              />
              <XAxis
                dataKey={xAxisDataKey}
                stroke="#6b7280"
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="#6b7280"
                tickLine={false}
                axisLine={false}
                label={{
                  value: "Hours",
                  angle: -90,
                  position: "insideLeft",
                  style: { textAnchor: "middle", fill: "#6b7280" },
                }}
              />
              <Tooltip
                cursor={{ fill: "#eef2ff" }}
                contentStyle={{
                  borderRadius: "10px",
                  border: "1px solid #4f46e5",
                  backgroundColor: "#0f172a",
                  color: "#e5e7eb",
                  boxShadow:
                    "0 10px 15px -3px rgba(15,23,42,0.45), 0 4px 6px -4px rgba(15,23,42,0.3)",
                }}
              />
              <Bar
                dataKey="hours"
                fill="#4f46e5"
                radius={[6, 6, 0, 0]}
                unit="h"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
