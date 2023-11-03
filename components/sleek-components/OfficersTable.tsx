import { bailiffOfficers } from "data/UI_data";
import Link from "next/link";
import React from "react";
import * as Icons from "react-icons/hi";
import { _numberFormat } from "utils/utilities";

interface Props {}

const OfficersTable = (props: Props) => {
  const handleAssignCLients = (officerId: string) => {
    // open assignment modal
    console.log(officerId);
  };

  return (
    <table className="w-full table-auto bg-white text-left text-sm text-slate-900 shadow-md">
      <thead className="border-b bg-blue-500 font-bold text-slate-50">
        <tr>
          <th className="py-React To Bailiff's Report!3 px-6">
            Field FOfficer
          </th>
          <th className="py-3 px-6">Clients Assigned</th>
          <th className="py-3 px-6">Portfolio</th>
          <th className="py-3 px-6">Retrieved</th>
          <th className="py-3 px-6">Recovery Rate</th>
          <th className="py-3 px-6">Action</th>
        </tr>
      </thead>
      <tbody className="divide-y text-gray-600">
        {bailiffOfficers.map((officer) => (
          <tr key={officer.id}>
            <td className="whitespace-nowrap px-6 py-4 font-bold">
              <Link
                href={`/officer/${officer.id}`}
                passHref
                className="_hover-settings flex items-center justify-center gap-2 text-indigo-600 hover:to-indigo-500"
              >
                <Icons.HiUser className="h-5 w-5" />
                <span className="flex">{officer.name}</span>
              </Link>
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              {officer.clientsAssigned}
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              {_numberFormat(officer.portfolio)}
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              {_numberFormat(officer.retrieved)}
            </td>
            <td className="whitespace-nowrap px-6 py-4 text-green-500">
              {officer.recoveryRate}
            </td>
            <td className="whitespace-nowrap px-6 py-4">
              <button
                className="_hover-settings flex rounded-lg bg-indigo-50 px-2 py-1 text-indigo-500 hover:bg-indigo-100 hover:text-indigo-600"
                onClick={() => handleAssignCLients(officer.id)}
              >
                Assign Clients
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OfficersTable;
