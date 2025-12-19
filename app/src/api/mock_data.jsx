// Horas del trabajador actual (para WorkerHours)
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

// Usuarios del sistema (incluye jefe y varios workers)
export const usersMock = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "worker" },
  { id: 2, name: "Anna Smith", email: "anna@example.com", role: "worker" },
  { id: 3, name: "Miguel Alvarez", email: "miguel@example.com", role: "worker" },
  { id: 4, name: "Sara Lopez", email: "sara@example.com", role: "worker" },
  { id: 5, name: "Boss User", email: "boss@example.com", role: "boss" },
];

// Alias para compatibilidad con código antiguo (workersMock)
export const workersMock = usersMock.filter((u) => u.role === "worker");

// Partes de horas por usuario y día (para BossHoursByDay y BossPeople)
export const timeEntriesMock = [
  // John Doe (id 1)
  { id: 1, userId: 1, date: "2025-12-01", start: "07:00", end: "17:00", hours: 10 },
  { id: 2, userId: 1, date: "2025-12-02", start: "07:30", end: "16:00", hours: 8.5 },
  { id: 3, userId: 1, date: "2025-12-03", start: "08:00", end: "15:30", hours: 7.5 },

  // Anna Smith (id 2)
  { id: 4, userId: 2, date: "2025-12-01", start: "08:00", end: "17:00", hours: 9 },
  { id: 5, userId: 2, date: "2025-12-02", start: "08:00", end: "16:00", hours: 8 },
  { id: 6, userId: 2, date: "2025-12-03", start: "07:00", end: "15:00", hours: 8 },

  // Miguel (id 3)
  { id: 7, userId: 3, date: "2025-12-01", start: "07:00", end: "17:00", hours: 10 },
  { id: 8, userId: 3, date: "2025-12-02", start: "07:00", end: "14:00", hours: 7 },

  // Sara (id 4)
  { id: 9, userId: 4, date: "2025-12-01", start: "09:00", end: "17:00", hours: 8 },
  { id: 10, userId: 4, date: "2025-12-03", start: "09:00", end: "18:00", hours: 9 },
];

// Mensajes entre jefe y workers (para BossMessages y WorkerMessages)
export const messagesMock = [
  {
    chatId: 1,
    workerId: 1,
    messages: [
      { from: "boss", text: "Please fix your hours for yesterday" },
      { from: "worker", text: "Okay, I will correct it" },
      { from: "boss", text: "Thanks for the quick update" },
    ],
  },
  {
    chatId: 2,
    workerId: 2,
    messages: [
      { from: "boss", text: "You added too many hours on Monday" },
      { from: "worker", text: "I will double-check and adjust" },
    ],
  },
  {
    chatId: 3,
    workerId: 3,
    messages: [
      { from: "boss", text: "Great work this week, Miguel" },
      { from: "worker", text: "Thank you!" },
    ],
  },
  {
    chatId: 4,
    workerId: 4,
    messages: [
      { from: "boss", text: "Remember to submit your report today" },
    ],
  },
];

// Reports para el BossDashboard (overview de partes)
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
  {
    id: 103,
    workerId: 3,
    workerName: "Miguel Alvarez",
    date: "2025-11-20",
    hours: 10,
    comment: "Site work",
    status: "approved",
  },
  {
    id: 104,
    workerId: 4,
    workerName: "Sara Lopez",
    date: "2025-11-20",
    hours: 7,
    comment: "Office tasks",
    status: "rejected",
  },
  {
    id: 105,
    workerId: 1,
    workerName: "John Doe",
    date: "2025-11-21",
    hours: 6,
    comment: "Half day",
    status: "pending",
  },
];
