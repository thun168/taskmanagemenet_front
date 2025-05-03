import React from 'react'
import { Data } from './TestTable'

const UserTable = () => {
  return (
     <div className="px-4 pb-4">
          <div className="overflow-x-autos shadow">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="text-xs uppercase bg-gray-100 text-blue-500 border-b">
                <tr>
                  <th className="px-6 py-3">Index</th>
                  <th className="px-6 py-3">Username</th>
                  <th className="px-6 py-3">Email</th>
                  <th className="px-6 py-3">password</th>
                  <th className="px-6 py-3 ">Action</th>
                </tr>
              </thead>
              <tbody>
                {Data.map((data, index) => (
                  <tr key={data.id} className="bg-white border-b-2 border-blue-200 hover:bg-gray-50">
                    <td className="px-6 py-4">{index + 1}</td>
                    <td className="px-6 py-4 text-blue-600 font-bold whitespace-nowrap">{data.name}</td>
                    <td className="px-6 py-4">Example@gmail.com</td>
                    <td className="px-6 py-4">pa$$w0rd</td>
                    <td className="px-6 py-4 flex space-x-3 ">
                      <a href="#" className="text-blue-600 hover:underline">Edit</a>
                      <a href="#" className="text-red-600 hover:underline">Remove</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
  )
}

export default UserTable