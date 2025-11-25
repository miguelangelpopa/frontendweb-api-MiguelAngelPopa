export const weeklyHoursMock = [
{ day: "Mon", hours: 8 },
{ day: "Tue", hours: 7 },
{ day: "Wed", hours: 6 },
{ day: "Thu", hours: 8 },
{ day: "Fri", hours: 5 },
];


export const monthlyHoursMock = [
{ week: "Week 1", hours: 35 },
{ week: "Week 2", hours: 40 },
{ week: "Week 3", hours: 38 },
{ week: "Week 4", hours: 42 },
];


export const messagesMock = [
{
chatId: 1,
workerId: 1,
messages: [
{ from: "boss", text: "Please fix your hours for yesterday" },
{ from: "worker", text: "Okay I will correct it" },
],
},
{
chatId: 2,
workerId: 2,
messages: [
{ from: "boss", text: "You added too many hours" },
],
},
];

export const workersMock = [
{ id: 1, name: "John Doe" },
{ id: 2, name: "Anna Smith" },
];


export const reportsMock = [
{
id: 101,
workerId: 1,
workerName: "John Doe",
date: "2025-11-19",
hours: 8,
comment: "Regular work day",
status: "pending",
},
{
id: 102,
workerId: 2,
workerName: "Anna Smith",
date: "2025-11-19",
hours: 9,
comment: "Overtime",
status: "approved",
},
];