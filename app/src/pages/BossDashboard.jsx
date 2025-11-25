import { Link } from "react-router";
import { reportsMock } from "../api/mock_data.jsx";

const getStatusBadge = (status) => {
  switch (status.toLowerCase()) {
    case "pending":
      return (
        <span className="px-3 py-1 text-sm font-semibold text-yellow-800 bg-yellow-100 rounded-full">
          Pending
        </span>
      );
    case "approved":
      return (
        <span className="px-3 py-1 text-sm font-semibold text-green-800 bg-green-100 rounded-full">
          Approved
        </span>
      );
    case "rejected":
      return (
        <span className="px-3 py-1 text-sm font-semibold text-red-800 bg-red-100 rounded-full">
          Rejected
        </span>
      );
    default:
      return (
        <span className="px-3 py-1 text-sm font-semibold text-gray-800 bg-gray-100 rounded-full">
          {status}
        </span>
      );
  }
};

export default function BossDashboard() {
  const pendingReports = reportsMock.filter(r => r.status.toLowerCase() === 'pending').length;
  const totalReports = reportsMock.length;
  const approvedHours = reportsMock
    .filter(r => r.status.toLowerCase() === 'approved')
    .reduce((sum, report) => sum + report.hours, 0);

  const summaryCards = [
    { title: "Reports Pending Review", value: pendingReports, icon: "⏳", color: "text-yellow-500", bgColor: "bg-yellow-50" },
    { title: "Total Reports Submitted", value: totalReports, icon: "📄", color: "text-blue-500", bgColor: "bg-blue-50" },
    { title: "Total Approved Hours", value: `${approvedHours}h`, icon: "✅", color: "text-green-500", bgColor: "bg-green-50" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
      Boss Dashboard Overview
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {summaryCards.map((card, index) => (
          <div
            key={index}
            className={`flex items-center p-6 ${card.bgColor} rounded-xl shadow-lg transition duration-300 hover:shadow-xl`}
          >
            <div
              className={`p-4 rounded-full ${card.color} bg-white shadow-md`}
            >
              <span className="text-2xl">{card.icon}</span>
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">
                {card.title}
              </p>
              <p className="text-3xl font-bold text-gray-900">
                {card.value}
              </p>
            </div>
          </div>
        ))}
      </div>


      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Time Reports to Review
      </h2>

      <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Worker
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hours
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {reportsMock.map((report) => (
                <tr
                  key={report.id}
                  className="hover:bg-indigo-50 transition duration-150"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {report.workerName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {report.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <span className="font-semibold text-indigo-600">
                      {report.hours}h
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(report.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <Link
                      to={`/boss/worker/${report.id}`}
                      className="text-indigo-600 hover:text-indigo-900 transition duration-150 font-semibold"
                    >
                      Review →
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}