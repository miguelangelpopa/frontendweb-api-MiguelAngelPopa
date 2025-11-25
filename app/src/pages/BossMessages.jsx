import { useState } from "react";
import { workersMock } from "../api/mock_data";
import { messagesMock } from "../api/mock_data";

// Mock messages

export default function BossMessages() {
const [selectedWorker, setSelectedWorker] = useState(null);


const selectedChat = messagesMock.find(
(c) => c.workerId === selectedWorker?.id
);


const handleSelectWorker = (w) => {
setSelectedWorker(w);
};


return (
<div className="flex min-h-screen bg-gray-100 p-6 gap-6">
{/* Worker list */}
<div className="w-1/3 bg-white p-4 rounded shadow-md h-fit">
<h2 className="text-lg font-semibold mb-4">Workers</h2>
{workersMock.map((worker) => (
<button
key={worker.id}
onClick={() => handleSelectWorker(worker)}
className={`w-full text-left p-2 rounded mb-2 border hover:bg-gray-50 transition ${
selectedWorker?.id === worker.id
? "bg-blue-100 border-blue-400"
: "border-gray-200"
}`}
>
{worker.name}
</button>
))}
</div>


{/* Chat area */}
<div className="flex-1 bg-white p-6 rounded shadow-md">
{selectedWorker ? (
<>
<h2 className="text-xl font-semibold mb-4">Chat with {selectedWorker.name}</h2>


<div className="border p-4 rounded h-80 overflow-y-auto bg-gray-50 mb-4">
{selectedChat?.messages.map((m, index) => (
<div
key={index}
className={`mb-2 p-2 rounded max-w-xs ${
m.from === "boss"
? "bg-blue-200 ml-auto text-right"
: "bg-gray-300"
}`}
>
{m.text}
</div>
))}
</div>


<div className="flex gap-2">
<input
type="text"
placeholder="Write a message..."
className="flex-1 border p-2 rounded"
/>
<button className="bg-blue-600 text-white px-4 rounded hover:bg-blue-700 transition">
Send
</button>
</div>
</>
) : (
<p className="text-gray-500">Select a worker to start messaging</p>
)}
</div>
</div>
);
}