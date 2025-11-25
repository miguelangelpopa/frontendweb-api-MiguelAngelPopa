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
import { weeklyHoursMock, monthlyHoursMock } from "../api/mock_data.jsx";


export default function WorkerHours() {
  const [view, setView] = useState("week");

  const data = view === "week" ? weeklyHoursMock : monthlyHoursMock;
  const xAxisDataKey = view === "week" ? "day" : "week";

  const totalHours = data.reduce((sum, item) => sum + item.hours, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      
      <div className="flex justify-between items-center mb-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800">
          ⏱️ Worked Hours Overview
        </h1>
        <Link 
          to="/workerDashboard" 
          className="text-indigo-600 hover:text-indigo-800 transition duration-150 font-medium flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Dashboard
        </Link>
      </div>

      <div className="max-w-4xl mx-auto">
        
        <div className="bg-white p-6 rounded-xl shadow-lg mb-6 border-l-4 border-indigo-500">
            <p className="text-sm font-medium text-gray-500">Total Hours Tracked ({view === 'week' ? 'this week' : 'this month'})</p>
            <p className="text-4xl font-extrabold text-gray-900 mt-1">{totalHours} <span className="text-indigo-500">hrs</span></p>
        </div>

        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setView("week")}
            className={`px-6 py-2 rounded-lg font-semibold transition duration-300 ${
              view === "week" 
                ? "bg-indigo-600 text-white shadow-md hover:bg-indigo-700" 
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
            }`}
          >
            Current Week
          </button>
          <button
            onClick={() => setView("month")}
            className={`px-6 py-2 rounded-lg font-semibold transition duration-300 ${
              view === "month" 
                ? "bg-indigo-600 text-white shadow-md hover:bg-indigo-700" 
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
            }`}
          >
            Current Month
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-2xl w-full h-[400px]">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Hours Visualization
          </h2>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="4 4" stroke="#e0e0e0" />
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
                  value: 'Hours', 
                  angle: -90, 
                  position: 'insideLeft', 
                  style: { textAnchor: 'middle', fill: '#6b7280' } 
                }}
              />
              <Tooltip 
                cursor={{ fill: '#eef2ff' }} 
                contentStyle={{ 
                  borderRadius: '8px', 
                  border: '1px solid #4f46e5', 
                  backgroundColor: '#ffffff' 
                }}
              />
              <Bar 
                dataKey="hours" 
                fill="#4f46e5" 
                radius={[4, 4, 0, 0]} 
                unit="h"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}