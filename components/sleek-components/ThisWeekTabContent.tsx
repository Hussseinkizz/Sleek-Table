import Image from "next/image";
import Accordion from "./Accordion";
import * as Icons from "react-icons/hi";

import PaperArt from "../public/assets/art/paper.svg";
import IconicDropDown from "./IconicDropDown";
import PopUpModal from "./PopUpModal";
import { useState } from "react";
import { clientsDetails } from "data/UI_data";
import ClientReportCard from "./ClientReportCard";
import { $ClientReport } from "data/data_types";

interface Props {}

const ThisWeekTabContent = (props: Props) => {
  const [showModal, setShowModal] = useState(false);

  // get client object for rpeorts page preview
  let clientReports: any = [];

  clientsDetails.forEach((clientItem) => {
    // get first report only for preview purposes
    let clientReport = clientItem.client_reports[0];
    let clientEntry = {
      id: clientItem.client_id,
      client_name: clientItem.client_name,
      date_issued: clientReport.date_issued,
      client_engaged: clientReport.client_engaged,
      engagement_date: clientReport.engagement_date,
      client_paid: clientReport.client_paid,
      client_paid_amount: clientReport.client_paid_amount,
      report_message: clientReport.report_message,
    };
    // add to reports array
    clientReports.push(clientEntry);
  });

  // console.log(clientReports);

  return (
    <section className="_content-load-animation w-full flex-col items-center justify-between gap-4">
      {/* The Collapsible */}
      <div className="flex w-full flex-col items-center justify-between gap-4">
        <Accordion title="Review All Clients Reports" defaultState="open">
          <section className="flex w-full flex-col items-center justify-between gap-4 p-4">
            {clientReports.map((report: any) => (
              <ClientReportCard key={report.id} {...report} />
            ))}
          </section>
        </Accordion>
        {/* The General Weekly Report */}
        <div className="flex w-full flex-col items-start justify-between gap-4 border-t border-gray-200 pt-2">
          <div className="flex w-full items-start justify-between gap-4">
            <div className="relative flex h-64 w-64">
              <Image
                src={PaperArt}
                alt="illustration art"
                className="h-64 w-64"
              />
            </div>
            {/* The Left Info Section */}
            <div className="flex w-full flex-col items-start justify-between gap-4">
              <h2 className="mt-8 flex w-full items-center justify-start gap-2 font-semibold">
                <Icons.HiLightBulb className="h-6 w-6" />
                <span className="flex text-2xl">General Weekly Report</span>
              </h2>
              {/* More Items */}
              <div className="mt-4 grid w-full grid-cols-1 place-items-center gap-4 md:grid-cols-2 md:gap-6">
                <p className="flex w-full flex-col items-start justify-center gap-1 text-lg font-semibold">
                  <div className="flex w-full items-center justify-start gap-2">
                    <Icons.HiClock className="h-6 w-6 text-violet-500" />
                    <span className="flex">Sumbitted At:</span>
                  </div>
                  <span className="flex font-medium text-gray-500">
                    16 Jun 2023
                  </span>
                </p>
                <p className="flex w-full flex-col items-start justify-center gap-1 text-lg font-semibold">
                  <div className="flex w-full items-center justify-start gap-2">
                    <Icons.HiUsers className="h-6 w-6 text-green-500" />
                    <span className="flex">Total Clients Engagged:</span>
                  </div>
                  <span className="flex font-medium text-gray-500">
                    60 Of 120 Total Clients
                  </span>
                </p>
                <p className="flex w-full flex-col items-start justify-center gap-1 text-lg font-semibold">
                  <div className="flex w-full items-center justify-start gap-2">
                    <Icons.HiUsers className="h-6 w-6 text-rose-500" />
                    <span className="flex">Total Who Clients Paid:</span>
                  </div>
                  <span className="flex font-medium text-gray-500">
                    30 Of 60 Engagged
                  </span>
                </p>
                <p className="flex w-full flex-col items-start justify-center gap-1 text-lg font-semibold">
                  <div className="flex w-full items-center justify-start gap-2">
                    <Icons.HiQuestionMarkCircle className="h-6 w-6 text-amber-500" />
                    <span className="flex">Not Engagged Clients:</span>
                  </div>
                  <span className="flex font-medium text-gray-500">
                    60 Of 120 Total Expected!
                  </span>
                </p>
              </div>
              {/* The General Report */}
              <div className="relative mt-4 flex w-full items-center justify-start gap-2 rounded-lg bg-gray-50/50 p-4 ring-1 ring-gray-200 md:p-6">
                <p className="flex flex-col pr-4">
                  During the week, I engaged with clients regarding outstanding
                  debts. Phiona Nalule requested a payment extension due to
                  medical expenses but paid 20,000 shillings. Joseph Mukasa was
                  on leave, and a notice was left with his workplace. Alice
                  Nakato received a payment extension until month-end. David
                  Ssempiira made a partial payment of 30,000 shillings. Despite
                  attempts, Grace Nakato remains unreachable. Legal action may
                  be initiated.
                </p>
                {/* The General Report Dropdown Trigger */}
                <IconicDropDown>
                  <button
                    className="_hover-settings flex w-full items-center justify-center gap-2 rounded-lg bg-blue-100 px-2 py-1 font-semibold text-blue-500 hover:text-blue-400"
                    onClick={() => setShowModal(true)}
                  >
                    <Icons.HiPencilAlt className="h-5 w-5" />
                    <span className="flex">React To Report</span>
                  </button>
                  {/* <button className="_hover-settings flex w-full items-center justify-center gap-2 rounded-lg bg-green-100 px-2 py-1 font-semibold text-green-500 hover:text-green-400">
                    <Icons.HiPencilAlt className="h-5 w-5" />
                    <span className="flex">React To Report</span>
                  </button> */}
                  {/* <button className="_hover-settings flex w-full items-center justify-center gap-2 rounded-lg bg-violet-100 px-2 py-1 font-semibold text-violet-500 hover:text-violet-400">
                    <Icons.HiExclamationCircle className="h-5 w-5" />
                    <span className="flex">Request Evidence</span>
                  </button> */}
                </IconicDropDown>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* The Make Report Modal */}
      <PopUpModal
        size="md"
        title="React To This Report!"
        onClose={() => setShowModal(false)}
        isOpen={showModal}
      >
        <div className="flex">make report ui</div>
      </PopUpModal>
    </section>
  );
};

export default ThisWeekTabContent;
