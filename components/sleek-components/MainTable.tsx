import { bailiffs } from "data/UI_data";
import Link from "next/link";
import RatingStars from "./RatingStars";
import Image from "next/image";
import * as Icons from "react-icons/hi";

const MainTable = () => {
  return (
    <section className="--px-4 --md:px-8 --mx-auto --max-w-screen-xl w-full">
      <div className="max-w-lg">
        <h3 className="text-xl font-bold text-gray-800 sm:text-2xl">
          All Your Bailiffs
        </h3>
        <p className="mt-2 text-gray-600">
          click name or image to view details!
        </p>
      </div>
      <div className="scrollable mt-12 overflow-x-auto rounded-lg border shadow-2xl">
        <table className="w-full table-auto bg-white text-left text-sm text-slate-900 shadow-2xl">
          <thead className="border-b bg-gradient-to-b from-blue-600 via-blue-600 to-blue-700 text-lg font-bold text-slate-50">
            <tr>
              <th className="py-3 px-6">
                <span className="flex">Bailiff</span>
                <span className="flex text-sm text-blue-100">Photo</span>
              </th>
              <th className="py-3 px-6">
                <span className="flex">Bailiff</span>
                <span className="flex text-sm text-blue-100">Name</span>
              </th>
              <th className="py-3 px-6">
                <span className="flex">Total</span>
                <span className="flex text-sm text-blue-100">Portfolio</span>
              </th>
              <th className="py-3 px-6">
                <span className="flex">Total</span>
                <span className="flex text-sm text-blue-100">Retrived</span>
              </th>
              <th className="py-3 px-6">
                <span className="flex">Collected</span>
                <span className="flex text-sm text-blue-100">This Week</span>
              </th>
              <th className="py-3 px-6">
                <span className="flex">Collected</span>
                <span className="flex text-sm text-blue-100">Last Week</span>
              </th>
              <th className="py-3 px-6">
                <span className="flex">Collection</span>
                <span className="flex text-sm text-blue-100">Rate</span>
              </th>
              <th className="py-3 px-6">
                <span className="flex">Bailiff</span>
                <span className="flex text-sm text-blue-100">Rating</span>
              </th>
            </tr>
          </thead>
          <tbody className="--divide-y text-gray-800">
            {bailiffs.map((bailiff) => (
              <tr
                key={bailiff.id}
                className="border-b border-gray-100 font-semibold"
              >
                <td className="whitespace-nowrap px-6 py-4 font-bold">
                  <Link
                    href={`/bailiff/${bailiff.id}`}
                    passHref
                    className="group flex aspect-1 h-32 w-32 shadow"
                  >
                    <Image
                      width={400}
                      height={400}
                      src={bailiff.bailiff_image_url}
                      className="_hover-settings aspect-1 h-32 w-32 rounded object-cover shadow hover:opacity-75"
                      alt={`Bailiff's ${bailiff.bailiff_name} Photo`}
                    />
                  </Link>
                </td>
                <td className="--whitespace-nowrap group relative border-r border-gray-100 px-6 py-4 font-bold">
                  <Link href={`/bailiff/${bailiff.id}`} passHref>
                    <span className="_hover-settings flex w-min flex-wrap text-lg font-semibold text-blue-600 hover:text-blue-500">
                      {bailiff.bailiff_name}
                    </span>
                  </Link>
                  {/* The external link clue icon */}
                  <Icons.HiArrowCircleRight className="absolute right-2 top-2 h-6 w-6 text-blue-500 opacity-0 transition duration-300 ease-linear will-change-auto group-hover:opacity-100" />
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-lg">
                  {bailiff.portfolio}
                </td>
                <td className="whitespace-nowrap border-r border-gray-100 px-6 py-4 text-lg">
                  {bailiff.retrived}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-lg">
                  {bailiff.collectedThisWeek}
                </td>
                <td className="whitespace-nowrap border-r border-gray-100 px-6 py-4 text-lg">
                  {bailiff.collectedLastWeek}
                </td>
                <td className="w-fit whitespace-nowrap px-6 py-4 text-lg">
                  {bailiff.recoveryRate}
                </td>
                <td className="flex items-center justify-between whitespace-nowrap px-6 py-4 text-lg">
                  <Icons.HiPencilAlt className="_hover-settings h-6 w-6 text-slate-400 hover:text-slate-300" />
                  <RatingStars rating={bailiff.bailiff_rating} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default MainTable;
