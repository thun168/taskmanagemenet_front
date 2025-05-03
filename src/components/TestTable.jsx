import React from 'react';

const Data = [
  { id: 1, title: "Design UX/UI", name: "Sok Chandara", timeS: "2025-1-10", timeE: "2025-2-10", status: "End" },
  { id: 2, title: "Frontend Dev", name: "Sok Dara", timeS: "2025-2-01", timeE: "2025-3-01", status: "In Progress" },
  { id: 3, title: "Design UX/UI", name: "Sok Chandara", timeS: "2025-1-10", timeE: "2025-2-10", status: "End" },
  { id: 4, title: "Frontend Dev", name: "Sok Dara", timeS: "2025-2-01", timeE: "2025-3-01", status: "In Progress" },
  { id: 5, title: "Design UX/UI", name: "Sok Chandara", timeS: "2025-1-10", timeE: "2025-2-10", status: "End" },
  { id: 6, title: "Frontend Dev", name: "Sok Dara", timeS: "2025-2-01", timeE: "2025-3-01", status: "In Progress" },
  { id: 7, title: "Design UX/UI", name: "Sok Chandara", timeS: "2025-1-10", timeE: "2025-2-10", status: "End" },
  { id: 8, title: "Frontend Dev", name: "Sok Dara", timeS: "2025-2-01", timeE: "2025-3-01", status: "In Progress" },
  { id: 9, title: "Design UX/UI", name: "Sok Chandara", timeS: "2025-1-10", timeE: "2025-2-10", status: "End" },
  { id: 10, title: "Frontend Dev", name: "Sok Dara", timeS: "2025-2-01", timeE: "2025-3-01", status: "In Progress" },
  { id: 11, title: "Design UX/UI", name: "Sok Chandara", timeS: "2025-1-10", timeE: "2025-2-10", status: "End" },
  { id: 12, title: "Frontend Dev", name: "Sok Dara", timeS: "2025-2-01", timeE: "2025-3-01", status: "In Progress" },
  { id: 13, title: "Design UX/UI", name: "Sok Chandara", timeS: "2025-1-10", timeE: "2025-2-10", status: "End" },
  { id: 14, title: "Frontend Dev", name: "Sok Dara", timeS: "2025-2-01", timeE: "2025-3-01", status: "In Progress" },
  { id: 15, title: "Design UX/UI", name: "Sok Chandara", timeS: "2025-1-10", timeE: "2025-2-10", status: "End" },
  { id: 16, title: "Frontend Dev", name: "Sok Dara", timeS: "2025-2-01", timeE: "2025-3-01", status: "In Progress" },
  { id: 17, title: "Design UX/UI", name: "Sok Chandara", timeS: "2025-1-10", timeE: "2025-2-10", status: "End" },
  { id: 18, title: "Frontend Dev", name: "Sok Dara", timeS: "2025-2-01", timeE: "2025-3-01", status: "In Progress" },
  { id: 19, title: "Design UX/UI", name: "Sok Chandara", timeS: "2025-1-10", timeE: "2025-2-10", status: "End" },
  { id: 20, title: "Frontend Dev", name: "Sok Dara", timeS: "2025-2-01", timeE: "2025-3-01", status: "In Progress" },

  // Add more with unique `id`s if needed
];

const TestTable = () => {
  return (
    <div className="p-4">
      <div className="overflow-x-auto shadow">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="text-xs uppercase bg-gray-100 text-blue-500 border-b">
            <tr>
              <th className="px-6 py-3">Index</th>
              <th className="px-6 py-3">Task title</th>
              <th className="px-6 py-3">Assigned to</th>
              <th className="px-6 py-3">Start-Time</th>
              <th className="px-6 py-3">End-Time</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((data, index) => (
              <tr key={data.id} className="bg-white border-b-2 border-blue-200 hover:bg-gray-50">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4 font-semibold">{data.title}</td>
                <td className="px-6 py-4 text-yellow-600 whitespace-nowrap">{data.name}</td>
                <td className="px-6 py-4">{data.timeS}</td>
                <td className="px-6 py-4">{data.timeE}</td>
                <td className="px-6 py-4">{data.status}</td>
                <td className="px-6 py-4 flex space-x-3">
                  <a href="#" className="text-blue-600 hover:underline">Edit</a>
                  <a href="#" className="text-red-600 hover:underline">Remove</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TestTable;
