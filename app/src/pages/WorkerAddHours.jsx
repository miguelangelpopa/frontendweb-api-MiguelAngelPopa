import { useState } from "react";

const initialEntries = []; // API

export default function WorkerAddHours() {
  const [date, setDate] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [entries, setEntries] = useState(initialEntries);

  const calcHours = (startTime, endTime) => {
    if (!startTime || !endTime) return 0;
    const [sh, sm] = startTime.split(":").map(Number);
    const [eh, em] = endTime.split(":").map(Number);
    const startMinutes = sh * 60 + sm;
    const endMinutes = eh * 60 + em;
    const diff = (endMinutes - startMinutes) / 60;
    return diff > 0 ? diff : 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !start || !end) return;

    const hours = calcHours(start, end);

    // TODO: send to backend
    const newEntry = { id: Date.now(), date, start, end, hours };
    setEntries((prev) => [...prev, newEntry]);

    setDate("");
    setStart("");
    setEnd("");
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">
          Add worked hours
        </h1>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-2xl shadow-md space-y-4"
        >
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label className="text-sm font-medium text-slate-700 mb-1">
                Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-slate-700 mb-1">
                Start time
              </label>
              <input
                type="time"
                value={start}
                onChange={(e) => setStart(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-slate-700 mb-1">
                End time
              </label>
              <input
                type="time"
                value={end}
                onChange={(e) => setEnd(e.target.value)}
                className="border border-gray-300 rounded-lg p-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition"
          >
            Save hours
          </button>
        </form>

        {/* Table */}
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-lg font-semibold text-slate-800 mb-3">
            Your time entries
          </h2>
          {entries.length === 0 ? (
            <p className="text-sm text-slate-500">No entries yet.</p>
          ) : (
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b">
                  <th className="py-2">Date</th>
                  <th className="py-2">Start</th>
                  <th className="py-2">End</th>
                  <th className="py-2">Hours</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((e) => (
                  <tr key={e.id} className="border-b last:border-b-0">
                    <td className="py-2">{e.date}</td>
                    <td className="py-2">{e.start}</td>
                    <td className="py-2">{e.end}</td>
                    <td className="py-2 font-semibold">{e.hours}h</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
