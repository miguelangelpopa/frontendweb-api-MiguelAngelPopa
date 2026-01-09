import { useMemo, useState } from "react";
import { usersMock, timeEntriesMock } from "../../api/mock_data.jsx";

const getWeekRange = () => {
  const today = new Date();
  const day = today.getDay() || 7;
  const monday = new Date(today);
  monday.setDate(today.getDate() - (day - 1));
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  const toISO = (d) => d.toISOString().slice(0, 10);
  return { start: toISO(monday), end: toISO(sunday) };
};

export default function BossPeople() {
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedIds, setSelectedIds] = useState([]);
  const [roleEdit, setRoleEdit] = useState("");
  const [msgText, setMsgText] = useState("");
  const [fromDate, setFromDate] = useState(getWeekRange().start);
  const [toDate, setToDate] = useState(getWeekRange().end);

  const selectedUser = usersMock.find((u) => u.id === selectedUserId);

  const userEntries = useMemo(() => {
    if (!selectedUserId) return [];
    return timeEntriesMock.filter((e) => {
      return (
        e.userId === selectedUserId &&
        (!fromDate || e.date >= fromDate) &&
        (!toDate || e.date <= toDate)
      );
    });
  }, [selectedUserId, fromDate, toDate]);

  const totalHours = userEntries.reduce((sum, e) => sum + e.hours, 0);

  const toggleSelected = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const handleChangeRole = () => {
    if (!selectedUser || !roleEdit) return;
    console.log("Change role of", selectedUser.id, "to", roleEdit);
  };

  const handleSendMessage = () => {
    if (!msgText.trim() || selectedIds.length === 0) return;
    console.log("Send message to", selectedIds, ":", msgText);
    setMsgText("");
  };

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-10 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {/* Columna izquierda: People */}
        <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col dark:bg-slate-900">
          <h2 className="text-lg font-semibold text-slate-900 mb-3 dark:text-slate-100">
            People
          </h2>
          <p className="text-xs text-slate-500 mb-3 dark:text-slate-400">
            Select a person to see their details or check several to send them
            a message.
          </p>

          <div className="flex-1 overflow-y-auto space-y-2">
            {usersMock.map((u) => (
              <button
                key={u.id}
                onClick={() => setSelectedUserId(u.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl border text-sm transition ${
                  selectedUserId === u.id
                    ? "bg-indigo-50 border-indigo-400 text-indigo-900 dark:bg-indigo-900/40 dark:border-indigo-500 dark:text-indigo-100"
                    : "bg-white border-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:border-slate-700 dark:hover:bg-slate-800 dark:text-slate-100"
                }`}
              >
                <div className="text-left">
                  <p className="font-medium">{u.name}</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {u.email}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 uppercase dark:bg-slate-800 dark:text-slate-200">
                    {u.role}
                  </span>
                  <input
                    type="checkbox"
                    checked={selectedIds.includes(u.id)}
                    onChange={() => toggleSelected(u.id)}
                    className="h-4 w-4 accent-indigo-600 dark:accent-indigo-400"
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Mensaje a seleccionados */}
          <div className="mt-4 border-t pt-3 border-slate-200 dark:border-slate-700">
            <p className="text-xs text-slate-500 mb-1 dark:text-slate-400">
              Message to selected ({selectedIds.length})
            </p>
            <textarea
              rows={3}
              value={msgText}
              onChange={(e) => setMsgText(e.target.value)}
              placeholder="Write a message to the selected people..."
              className="w-full border border-slate-300 rounded-lg p-2 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            />
            <button
              type="button"
              onClick={handleSendMessage}
              className="mt-2 w-full text-xs font-semibold bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition dark:bg-indigo-500 dark:hover:bg-indigo-400"
            >
              Send message
            </button>
          </div>
        </div>

        {/* Columna derecha: detalles y horas */}
        <div className="md:col-span-2 space-y-4">
          {!selectedUser ? (
            <div className="bg-white rounded-2xl shadow-md p-6 text-sm text-slate-500 dark:bg-slate-900 dark:text-slate-400">
              Select a person from the list to see their details and hours.
            </div>
          ) : (
            <>
              {/* Datos y rol */}
              <div className="bg-white rounded-2xl shadow-md p-6 dark:bg-slate-900">
                <h2 className="text-xl font-semibold text-slate-900 mb-3 dark:text-slate-100">
                  Details for {selectedUser.name}
                </h2>
                <p className="text-sm text-slate-700 dark:text-slate-300">
                  Email:{" "}
                  <span className="font-medium">{selectedUser.email}</span>
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-3">
                  <span className="text-sm text-slate-700 dark:text-slate-300">
                    Current role:{" "}
                    <span className="inline-flex px-2 py-0.5 rounded-full text-xs bg-slate-100 text-slate-700 uppercase dark:bg-slate-800 dark:text-slate-200">
                      {selectedUser.role}
                    </span>
                  </span>
                  <select
                    value={roleEdit || selectedUser.role}
                    onChange={(e) => setRoleEdit(e.target.value)}
                    className="border border-slate-300 rounded-lg p-1.5 text-xs focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                  >
                    <option value="worker">worker</option>
                    <option value="boss">boss</option>
                  </select>
                  <button
                    type="button"
                    onClick={handleChangeRole}
                    className="text-xs font-semibold px-3 py-1 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition dark:bg-indigo-500 dark:hover:bg-indigo-400"
                  >
                    Save role
                  </button>
                </div>
              </div>

              {/* Horas trabajadas */}
              <div className="bg-white rounded-2xl shadow-md p-6 dark:bg-slate-900">
                <div className="flex flex-wrap items-center gap-4 mb-4">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    Worked hours
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <span>From</span>
                    <input
                      type="date"
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                      className="border border-slate-300 rounded-lg p-1 text-xs dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                    />
                    <span>to</span>
                    <input
                      type="date"
                      value={toDate}
                      onChange={(e) => setToDate(e.target.value)}
                      className="border border-slate-300 rounded-lg p-1 text-xs dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
                    />
                  </div>
                  <div className="ml-auto text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-200">
                    Total: {totalHours}h
                  </div>
                </div>

                {userEntries.length === 0 ? (
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    There are no hours in the selected range.
                  </p>
                ) : (
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-b border-slate-200 dark:border-slate-700">
                        <th className="py-2 text-slate-700 dark:text-slate-300">
                          Date
                        </th>
                        <th className="py-2 text-slate-700 dark:text-slate-300">
                          Hours
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {userEntries.map((e) => (
                        <tr
                          key={e.id}
                          className="border-b last:border-b-0 border-slate-200 dark:border-slate-700"
                        >
                          <td className="py-2 text-slate-800 dark:text-slate-200">
                            {e.date}
                          </td>
                          <td className="py-2 font-semibold text-slate-900 dark:text-slate-100">
                            {e.hours}h
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
