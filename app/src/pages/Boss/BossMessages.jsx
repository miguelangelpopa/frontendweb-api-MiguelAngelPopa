import { useState } from "react";
import { workersMock } from "../../api/mock_data";
import { messagesMock } from "../../api/mock_data";

export default function BossMessages() {
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [search, setSearch] = useState("");
  const [chats, setChats] = useState(messagesMock); // estado local
  const [reply, setReply] = useState("");

  const filteredWorkers = workersMock.filter((w) =>
    w.name.toLowerCase().includes(search.toLowerCase())
  );

  const selectedChat = chats.find((c) => c.workerId === selectedWorker?.id);

  const handleSelectWorker = (w) => {
    setSelectedWorker(w);
    setReply("");
  };

  const handleSendFromBoss = () => {
    if (!reply.trim() || !selectedWorker) return;

    const existing = chats.find((c) => c.workerId === selectedWorker.id);
    const baseChat =
      existing || { workerId: selectedWorker.id, messages: [] };

    const updatedChat = {
      ...baseChat,
      messages: [...baseChat.messages, { from: "boss", text: reply }],
    };

    // TODO: POST/PUT al backend
    setChats((prev) => {
      if (existing) {
        return prev.map((c) =>
          c.workerId === selectedWorker.id ? updatedChat : c
        );
      }
      return [...prev, updatedChat];
    });

    setReply("");
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 p-6 gap-6 dark:from-slate-950 dark:to-slate-900">
      {/* Worker list */}
      <aside className="w-1/3 bg-white p-4 rounded-2xl shadow-md h-fit dark:bg-slate-900">
        <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-slate-100">
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
              className="w-full border border-gray-300 rounded-lg py-2 pl-3 pr-9 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
            />
            <span className="absolute inset-y-0 right-2 flex items-center text-gray-400 text-sm dark:text-slate-400">
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
                    ? "bg-blue-50 border-blue-400 text-blue-900 dark:bg-blue-900/40 dark:border-blue-500 dark:text-blue-100"
                    : "border-gray-200 hover:bg-gray-50 text-gray-800 dark:border-slate-700 dark:text-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                <span className="font-medium">{worker.name}</span>
                <span className="text-xs text-gray-400 dark:text-slate-400">
                  ID: {worker.id}
                </span>
              </button>
            ))
          ) : (
            <p className="text-xs text-gray-400 dark:text-slate-400">
              No workers match “{search}”.
            </p>
          )}
        </div>
      </aside>

      {/* Chat area */}
      <main className="flex-1 bg-white p-6 rounded-2xl shadow-md flex flex-col dark:bg-slate-900">
        {selectedWorker ? (
          <>
            {/* Header */}
            <div className="flex items-center justify-between mb-4 border-b pb-3 border-gray-200 dark:border-slate-700">
              <div>
                <h2 className="text-xl font-semibold text-gray-100">
                  Chat with {selectedWorker.name}
                </h2>
                <p className="text-xs text-gray-400">
                  Worker ID: {selectedWorker.id}
                </p>
              </div>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-emerald-500/15 text-xs font-medium text-emerald-300">
                ● Online
              </span>
            </div>

            {/* Messages */}
            <div className="border border-slate-800 rounded-2xl h-80 overflow-y-auto bg-slate-900/60 mb-4 p-4 space-y-3">
              {selectedChat?.messages?.length ? (
                selectedChat.messages.map((m, index) => (
                  <div
                    key={index}
                    className={`flex w-full ${
                      m.from === "boss" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[70%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed shadow-sm ${
                        m.from === "boss"
                          ? "bg-indigo-500 text-slate-50 rounded-br-sm"
                          : "bg-slate-800 text-slate-100 rounded-bl-sm"
                      }`}
                    >
                      {m.text}
                      <p className="mt-1 text-[10px] opacity-60 text-right">
                        10:24
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                <div className="h-full flex items-center justify-center">
                  <p className="text-sm text-slate-500">
                    No messages yet. Start the conversation.
                  </p>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="flex gap-3 items-center">
              <input
                type="text"
                placeholder="Write a message..."
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                className="flex-1 border border-slate-700 bg-slate-900/70 p-2.5 rounded-xl text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <button
                type="button"
                onClick={handleSendFromBoss}
                className="inline-flex items-center gap-1 bg-indigo-600 text-white px-5 py-2 rounded-xl hover:bg-indigo-500 transition text-sm font-semibold"
              >
                Send
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500 text-sm dark:text-slate-400">
              Select a worker from the left to start messaging.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
