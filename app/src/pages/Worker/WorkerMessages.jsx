import { useState } from "react";
import { messagesMock } from "../../api/mock_data";

export default function WorkerMessages({ workerId = 1 }) {
  const [chatState, setChatState] = useState(() => {
    const existing = messagesMock.find((c) => c.workerId === workerId);
    return existing ? { ...existing } : { workerId, messages: [] };
  });
  const [newMessage, setNewMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    // Aquí luego llamarás a tu API (POST)
    const updated = {
      ...chatState,
      messages: [...chatState.messages, { from: "worker", text: newMessage }],
    };
    setChatState(updated);

    setNewMessage("");
  };

  if (!chatState) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100 dark:bg-slate-950">
        <p className="text-gray-500 dark:text-slate-400 text-sm">
          No chat found for this worker.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 dark:from-slate-950 dark:to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-lg p-6 flex flex-col">
        <div className="flex items-center justify-between mb-4 border-b pb-3 border-gray-200 dark:border-slate-700">
          <div>
            <h1 className="text-xl font-semibold text-gray-900 dark:text-slate-100">
              Messages with Boss
            </h1>
            <p className="text-xs text-gray-500 dark:text-slate-400">
              Worker ID: {workerId}
            </p>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-xs font-medium text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200">
            Online
          </span>
        </div>

        {/* Messages */}
        <div className="flex-1 border border-gray-200 dark:border-slate-700 rounded-xl h-80 overflow-y-auto bg-gray-50 dark:bg-slate-950/40 mb-4 p-4 space-y-2">
          {chatState.messages?.length ? (
            chatState.messages.map((m, index) => (
              <div
                key={index}
                className={`flex ${
                  m.from === "boss" ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`mb-1 px-3 py-2 rounded-2xl max-w-xs text-sm shadow-sm ${
                    m.from === "boss"
                      ? "bg-gray-200 text-gray-900 rounded-bl-none dark:bg-slate-800 dark:text-slate-100"
                      : "bg-blue-600 text-white rounded-br-none dark:bg-blue-500"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-400 dark:text-slate-400 text-center mt-8">
              No messages yet. Start the conversation.
            </p>
          )}
        </div>

        {/* Input send message */}
        <form onSubmit={handleSend} className="flex gap-2">
          <input
            type="text"
            placeholder="Write a message to your boss..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 border border-gray-300 dark:border-slate-700 p-2 rounded-lg text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700 transition text-sm font-semibold dark:bg-blue-500 dark:hover:bg-blue-400"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
