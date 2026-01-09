import { useParams, useNavigate } from "react-router";
import { useState } from "react";
import { reportsMock } from "../../api/mock_data.jsx";

const STATUSES = ["pending", "approved", "rejected"];

export default function BossHourReview() {
  const { id } = useParams();
  const navigate = useNavigate();
  const report = reportsMock.find((r) => r.id === Number(id));

  const [status, setStatus] = useState(report?.status ?? "pending");
  const [comment, setComment] = useState(report?.comment ?? "");

  if (!report) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Report not found.
        </p>
      </div>
    );
  }

  const handleSave = () => {
    // TODO: PUT /hours/:id { status, comment, approvedBy, statusChangedAt }
    console.log("Saving review for", id, { status, comment });
    navigate("/bossDashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-950 dark:to-slate-900 p-6 md:p-10">
      <div className="max-w-2xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700 p-6 md:p-8 space-y-6">
        <header className="flex items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
              Review time report
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Worker: <span className="font-medium">{report.workerName}</span> ·{" "}
              Date: <span className="font-medium">{report.date}</span>
            </p>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
          >
            ← Back
          </button>
        </header>

        {/* Datos del parte */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-slate-500 dark:text-slate-400">Project</p>
            <p className="font-medium text-slate-900 dark:text-slate-100">
              {report.projectName ?? "N/A"}
            </p>
          </div>
          <div>
            <p className="text-slate-500 dark:text-slate-400">Hours</p>
            <p className="font-semibold text-indigo-600 dark:text-indigo-300">
              {report.hours}h
            </p>
          </div>
          <div>
            <p className="text-slate-500 dark:text-slate-400">Start</p>
            <p className="font-medium text-slate-900 dark:text-slate-100">
              {report.startTime}
            </p>
          </div>
          <div>
            <p className="text-slate-500 dark:text-slate-400">End</p>
            <p className="font-medium text-slate-900 dark:text-slate-100">
              {report.endTime}
            </p>
          </div>
        </div>

        {/* Cambiar status */}
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Status
          </p>
          <div className="inline-flex rounded-full bg-slate-100 dark:bg-slate-800 p-1 text-xs font-medium">
            {STATUSES.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => setStatus(s)}
                className={`px-4 py-1 rounded-full transition ${
                  status === s
                    ? s === "approved"
                      ? "bg-emerald-500 text-white"
                      : s === "rejected"
                      ? "bg-rose-500 text-white"
                      : "bg-amber-500 text-white"
                    : "text-slate-700 dark:text-slate-200"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Comentario */}
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Manager comment
          </p>
          <textarea
            rows={3}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a note for the worker (optional)..."
            className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-sm text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Acciones */}
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="px-5 py-2 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md"
          >
            Save review
          </button>
        </div>
      </div>
    </div>
  );
}