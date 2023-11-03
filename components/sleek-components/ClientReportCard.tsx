import Link from "next/link";
import * as Icons from "react-icons/hi";
import { ImUser } from "react-icons/im";
import { _numberFormat } from "utils/utilities";

const ClientReportCard = (report: any) => {
  return (
    <div className="relative flex w-full flex-col items-center justify-between gap-2 rounded-lg bg-gray-50/50 p-4 ring-1 ring-gray-200 md:p-6">
      <div className="flex w-full items-center justify-between gap-2">
        <div className="flex flex-col items-start justify-between gap-2">
          <h1 className="_hover-settings flex cursor-pointer items-center justify-center gap-2 text-lg font-semibold text-blue-500 hover:text-blue-400">
            <ImUser className="h-5 w-5" />
            <Link href={`/client/${report.id}`} passHref className="flex">
              {report.client_name}
            </Link>
          </h1>
          <h2 className="flex font-medium">
            Report Issued On: {report.date_issued}
          </h2>
        </div>
        {/* The Flags */}
        <div className="flex items-center justify-between gap-2">
          <span
            className={`--font-medium flex items-center justify-center gap-2 rounded-3xl ${
              report.client_engaged
                ? "bg-blue-200 text-blue-500"
                : "bg-red-200 text-red-500"
            } px-4 py-1 text-sm `}
          >
            {report.client_engaged
              ? `Engagged ${report.engagement_date}`
              : "Not Engagged"}
          </span>
          <span className="--font-medium flex items-center justify-center gap-2 rounded-3xl bg-gray-200 px-4 py-1 text-sm font-medium text-gray-500">
            {report.client_paid
              ? `Paid ${_numberFormat(report.client_paid_amount)}`
              : "Didn't Pay"}
          </span>
        </div>
      </div>
      {/* The Report */}
      <div className="flex w-full items-center justify-between gap-2">
        <p className="flex text-gray-700">{report.report_message}</p>
      </div>
      {/* The Action Buttons */}
      <div className="mt-4 flex w-full items-center justify-start gap-2">
        <button className="_hover-settings flex items-center justify-center gap-2 rounded-lg bg-green-100 px-2 py-1 pb-2 text-green-500 outline-none ring-1 ring-green-200 hover:bg-green-100 hover:text-green-400">
          <Icons.HiAnnotation className="h-5 w-5" />
          <span className="flex font-medium">Comment</span>
        </button>
        <button className="_hover-settings flex items-center justify-center gap-2 rounded-lg bg-violet-100 px-2 py-1 pb-2 text-violet-500 outline-none ring-1 ring-violet-200 hover:bg-violet-100 hover:text-violet-400">
          <Icons.HiLightBulb className="h-5 w-5" />
          <span className="flex font-medium">Evidence</span>
        </button>
        <button className="_hover-settings flex items-center justify-center gap-2 rounded-lg bg-red-100 px-2 py-1 pb-2 text-red-500 outline-none ring-1 ring-red-200 hover:bg-red-100 hover:text-red-400">
          <Icons.HiQuestionMarkCircle className="h-5 w-5" />
          <span className="flex font-medium">Request Evidence</span>
        </button>
      </div>
    </div>
  );
};

export default ClientReportCard;
