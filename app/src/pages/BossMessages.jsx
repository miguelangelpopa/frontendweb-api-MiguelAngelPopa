import { useState } from "react";
import { workersMock } from "../api/mock_data";
import { messagesMock } from "../api/mock_data";

export default function BossMessages() {
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [search, setSearch] = useState("");

  const filteredWorkers = workersMock.filter((w) =>
    w.name.toLowerCase().includes(search.toLowerCase())
  );

  const selectedChat = messagesMock.find(
    (c) => c.workerId === selectedWorker?.id
  );

  const handleSelectWorker = (w) => {
    setSelectedWorker(w);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 p-6 gap-6">
      {/* Worker list */}
      <aside className="w-1/3 bg-white p-4 rounded-2xl shadow-md h-fit">
        <h2 className="text-lg font-semibold mb-4 text-gray-900">
          Workers
        </h2>

        {/* Search */}
        <div className="mb-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search worker..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 rounded-lg py-2 pl-3 pr-9 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <span className="absolute inset-y-0 right-2 flex items-center text-gray-400 text-sm">
              🔍
            </span>
          </div>
        </div>

        <div className="space-y-2 max-h-[60vh] overflow-y-auto">
          {filteredWorkers.length ? (
            filteredWorkers.map((worker) => (
              <button
                key={worker.id}
                onClick={() => handleSelectWorker(worker)}
                className={`w-full text-left p-3 rounded-xl border flex items-center justify-between transition ${
                  selectedWorker?.id === worker.id
                    ? "bg-blue-50 border-blue-400 text-blue-900"
                    : "border-gray-200 hover:bg-gray-50 text-gray-800"
                }`}
              >
                <span className="font-medium">{worker.name}</span>
                <span className="text-xs text-gray-400">
                  ID: {worker.id}
                </span>
              </button>
            ))
          ) : (
            <p className="text-xs text-gray-400">
              No workers match “{search}”.
            </p>
          )}
        </div>
      </aside>

      {/* Chat area */}
      <main className="flex-1 bg-white p-6 rounded-2xl shadow-md flex flex-col">
        {selectedWorker ? (
          <>
            <div className="flex items-center justify-between mb-4 border-b pb-3">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  Chat with {selectedWorker.name}
                </h2>
                <p className="text-xs text-gray-500">
                  Worker ID: {selectedWorker.id}
                </p>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-50 text-xs font-medium text-emerald-700">
                Online
              </span>
            </div>

            <div className="border rounded-xl h-80 overflow-y-auto bg-gray-50 mb-4 p-4 space-y-2">
              {selectedChat?.messages?.length ? (
                selectedChat.messages.map((m, index) => (
                  <div
                    key={index}
                    className={`flex ${
                      m.from === "boss" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`mb-1 px-3 py-2 rounded-2xl max-w-xs text-sm shadow-sm ${
                        m.from === "boss"
                          ? "bg-blue-600 text-white rounded-br-none"
                          : "bg-gray-200 text-gray-900 rounded-bl-none"
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

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Write a message..."
                className="flex-1 border border-gray-300 p-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button className="bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700 transition text-sm font-semibold">
                Send
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500 text-sm">
              Select a worker from the left to start messaging.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
