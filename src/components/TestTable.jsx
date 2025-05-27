import React from 'react';

export const Data = [
  { id: 1, title: "Design UX/UI", name: "Sok Chandara", timeS: "2025-1-10", timeE: "2025-2-10", status: "completed" },
  { id: 2, title: "Frontend Dev", name: "Sok Dara", timeS: "2025-2-01", timeE: "2025-3-01", status: "In Progress" },
  { id: 3, title: "Design UX/UI", name: "Sok Chandara", timeS: "2025-1-10", timeE: "2025-2-10", status: "completed" },
  { id: 4, title: "Frontend Dev", name: "Sok Dara", timeS: "2025-2-01", timeE: "2025-3-01", status: "In Progress" },
  { id: 5, title: "Design UX/UI", name: "Sok Chandara", timeS: "2025-1-10", timeE: "2025-2-10", status: "completed" },
  { id: 6, title: "Frontend Dev", name: "Sok Dara", timeS: "2025-2-01", timeE: "2025-3-01", status: "In Progress" },
  { id: 7, title: "Design UX/UI", name: "Sok Chandara", timeS: "2025-1-10", timeE: "2025-2-10", status: "completed" },
  { id: 8, title: "Frontend Dev", name: "Sok Dara", timeS: "2025-2-01", timeE: "2025-3-01", status: "In Progress" },
  { id: 9, title: "Design UX/UI", name: "Sok Chandara", timeS: "2025-1-10", timeE: "2025-2-10", status: "completed" },
  { id: 10, title: "Frontend Dev", name: "Sok Dara", timeS: "2025-2-01", timeE: "2025-3-01", status: "In Progress" },
  { id: 11, title: "Design UX/UI", name: "Sok Chandara", timeS: "2025-1-10", timeE: "2025-2-10", status: "completed" },
  { id: 12, title: "Frontend Dev", name: "Sok Dara", timeS: "2025-2-01", timeE: "2025-3-01", status: "In Progress" },
  { id: 13, title: "Design UX/UI", name: "Sok Chandara", timeS: "2025-1-10", timeE: "2025-2-10", status: "completed" },
  { id: 14, title: "Frontend Dev", name: "Sok Dara", timeS: "2025-2-01", timeE: "2025-3-01", status: "In Progress" },
  { id: 15, title: "Design UX/UI", name: "Sok Chandara", timeS: "2025-1-10", timeE: "2025-2-10", status: "completed" },
  { id: 16, title: "Frontend Dev", name: "Sok Dara", timeS: "2025-2-01", timeE: "2025-3-01", status: "In Progress" },
  { id: 17, title: "Design UX/UI", name: "Sok Chandara", timeS: "2025-1-10", timeE: "2025-2-10", status: "completed" },
  { id: 18, title: "Frontend Dev", name: "Sok Dara", timeS: "2025-2-01", timeE: "2025-3-01", status: "In Progress" },
  { id: 19, title: "Design UX/UI", name: "Sok Chandara", timeS: "2025-1-10", timeE: "2025-2-10", status: "completed" },
  { id: 20, title: "Frontend Dev", name: "Sok Dara", timeS: "2025-2-01", timeE: "2025-3-01", status: "In Progress" },

  // Add more with unique `id`s if needed
];

const TestTable = () => {
  return (
    <div className="p-4">
      <div className="overflow-x-autos shadow">
        <table className="w-full text-sm text-left text-gray-700">
          <thead className="text-xs uppercase bg-gray-100 text-blue-500 border-b">
            <tr>
              <th className="px-6 py-3">Index</th>
              <th className="px-6 py-3">Task title</th>
              <th className="px-6 py-3">Assigned to</th>
              <th className="px-6 py-3">Start-Time</th>
              <th className="px-6 py-3">completed-Time</th>
              <th className="px-6 py-3 text-center">Status</th>
              <th className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {Data.map((data, index) => (
              <tr key={data.id} className="bg-white border-b-2 border-blue-200 hover:bg-gray-50">
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4 font-semibold">{data.title}</td>
                <td className="px-6 py-4 text-blue-600 font-bold whitespace-nowrap">{data.name}</td>
                <td className="px-6 py-4 font-semibold">{data.timeS}</td>
                <td className="px-6 py-4 font-semibold">{data.timeE}</td>
                <td className="px-6 py-4 text-center">
                <div>
                    <span
                    className={`inline-block w-[100px] font-semibold text-center p-2 text-white rounded-sm 
                        ${data.status.toLowerCase() === "completed" ? 'bg-green-500' : 'bg-yellow-500'}`}>
                    {data.status}
                    </span>
                </div>
                </td>
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
