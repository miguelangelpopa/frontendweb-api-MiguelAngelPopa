import { useState } from "react";
import { messagesMock } from "../api/mock_data";

export default function WorkerMessages({ workerId = 1 }) {
  const [newMessage, setNewMessage] = useState("");

  const chat = messagesMock.find((c) => c.workerId === workerId);

  const handleSend = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    //TODO
    console.log("Worker sends:", newMessage);

    setNewMessage("");
  };

  if (!chat) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <p className="text-gray-500 text-sm">
          No chat found for this worker.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 flex flex-col">
        <div className="flex items-center justify-between mb-4 border-b pb-3">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              Messages with Boss
            </h1>
            <p className="text-xs text-gray-500">
              Worker ID: {workerId}
            </p>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-xs font-medium text-emerald-700">
            Online
          </span>
        </div>

        {/* Messages */}
        <div className="flex-1 border rounded-xl h-80 overflow-y-auto bg-gray-50 mb-4 p-4 space-y-2">
          {chat.messages?.length ? (
            chat.messages.map((m, index) => (
              <div
                key={index}
                className={`flex ${
                  m.from === "boss" ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`mb-1 px-3 py-2 rounded-2xl max-w-xs text-sm shadow-sm ${
                    m.from === "boss"
                      ? "bg-gray-200 text-gray-900 rounded-bl-none"
                      : "bg-blue-600 text-white rounded-br-none"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-400 text-center mt-8">
              No messages yet. Start the conversation.
            </p>
          )}
        </div>

        {/* Input send message*/}
        <form onSubmit={handleSend} className="flex gap-2">
          <input
            type="text"
            placeholder="Write a message to your boss..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            className="flex-1 border border-gray-300 p-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700 transition text-sm font-semibold"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
