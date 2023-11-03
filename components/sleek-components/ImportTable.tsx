import { bailiffs, tableItems } from "data/UI_data";
// import Link from "next/link";
import * as Icons from "react-icons/hi";
import AddEntryModal from "./AddEntryModal";
import { useEffect, useState } from "react";
import BailiffSelectMenu from "./BailiffSelectMenu";
import BailiffSelectModal from "./BailiffSelectModal";
import PopUpModal from "./PopUpModal";
import SimpleInlineDocUploader from "./SimpleInlineDocUploader";

interface Props {}

const ImportTable = (props: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectModalOpen, setSelectModalOpen] = useState(false);
  const [docsPopup, setDocsPopup] = useState(false);
  const [selectedId, setSelectedId] = useState("");
  const [requiredDocs, setRequiredDocs] = useState<any>([]);

  const addToBailiffHandler = (clientId: string) => {
    setSelectModalOpen(true);
    console.log(clientId, selectedId);
  };

  const handleNewEntry = () => {
    // open modal
    setIsModalOpen(true);
  };

  const newClients = [
    {
      id: "559j",
      name: "Busslwa Geofrey",
      loanAmount: 2500000,
      loanPeriod: "24 months",
      paymentScheduleAmount: 100000,
      paymentSchedule: "monthly",
      intersetRate: "25%",
      defaultFeeRate: "0.5%",
    },
    {
      id: "2h7k",
      name: "Sarah Johnson",
      loanAmount: 500000,
      loanPeriod: "12 months",
      paymentScheduleAmount: 50000,
      paymentSchedule: "monthly",
      intersetRate: "15%",
      defaultFeeRate: "1%",
    },
    {
      id: "6s5d",
      name: "John Doe",
      loanAmount: 1000000,
      loanPeriod: "6 months",
      paymentScheduleAmount: 200000,
      paymentSchedule: "bi-monthly",
      intersetRate: "20%",
      defaultFeeRate: "0.75%",
    },
    {
      id: "8u2l",
      name: "Jane Smith",
      loanAmount: 750000,
      loanPeriod: "18 months",
      paymentScheduleAmount: 50000,
      paymentSchedule: "weekly",
      intersetRate: "18%",
      defaultFeeRate: "0.5%",
    },
  ];

  const handleAddNewClient = (newClient: any) => {
    // console.log(newClient, newClients);
    newClients.push(newClient);
    setIsModalOpen(false);
  };

  const handleBailiffSelection = (selectedBailiff: string) => {
    setSelectedId(selectedBailiff);
    setDocsPopup(true);
  };

  function NumberFormatter(number: number) {
    const formatter = Intl.NumberFormat("en", { notation: "standard" });
    const formattedNumber = formatter.format(number);
    return formattedNumber;
  }

  useEffect(() => {
    let newDocs = [
      {
        title: "demandNotice1",
        colorCode: "green",
        data: {},
      },
      {
        title: "demandNotice2",
        colorCode: "purple",
        data: {},
      },
      {
        title: "defaultNotice",
        colorCode: "rose",
        data: {},
      },
      {
        title: "intentionToSell",
        colorCode: "amber",
        data: {},
      },
      {
        title: "other",
        colorCode: "indigo",
        data: {},
      },
    ];

    setRequiredDocs(newDocs);
    return () => {
      setRequiredDocs([]);
    };
  }, [requiredDocs]);

  return (
    <section className="--px-4 --md:px-8 relative mx-auto w-full max-w-screen-xl">
      <div className="mt-12 overflow-x-auto rounded-lg border shadow-lg">
        <table className="w-full table-auto bg-white text-left text-sm text-slate-900 shadow-md">
          <thead className="border-b bg-blue-500 font-bold text-white">
            <tr>
              <th className="py-3 px-6">Client Name</th>
              <th className="py-3 px-6">
                Outstanding Loan <br /> Amount (UGX)
              </th>
              <th className="py-3 px-6">Loan Period (N/A)</th>
              <th className="py-3 px-6">
                Repayment Schedule <br /> Amount (Monthly)
              </th>
              <th className="py-3 px-6">
                Interest Rate <br /> (Per Annum)
              </th>
              <th className="py-3 px-6">
                Default Fee <br /> Rate (Per Month)
              </th>
              <th className="py-3 px-6">
                {/* The add Button */}
                <button
                  className="_hover-settings flex items-center justify-center gap-2 rounded-lg bg-slate-50 px-4 py-2 text-indigo-500 hover:bg-indigo-50 hover:text-blue-500"
                  onClick={handleNewEntry}
                >
                  <Icons.HiPlus className="h-6 w-6" />
                  <span className="flex">Add New Entry</span>
                </button>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y text-gray-600">
            {newClients.map((client) => (
              <tr key={client.id}>
                <td className="whitespace-nowrap px-6 py-4 font-bold">
                  {client.name}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {NumberFormatter(client.loanAmount)}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {client.loanPeriod}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  {NumberFormatter(client.paymentScheduleAmount)}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-green-500">
                  {client.intersetRate}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-red-500">
                  {client.defaultFeeRate}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <button
                    className="_hover-settings --bg-indigo-50 relative z-0 flex rounded-lg px-2 py-1 text-blue-400 hover:bg-gray-50 hover:text-blue-500 hover:shadow"
                    onClick={() => addToBailiffHandler(client.id)}
                  >
                    Assign To Bailiff
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* The Add New Entry Modal */}
      <AddEntryModal
        addNewClient={handleAddNewClient}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      {/* The Bailiff Selection Modal */}
      <BailiffSelectModal
        onSelect={(val) => handleBailiffSelection(val)}
        isOpen={selectModalOpen}
        onClose={() => setSelectModalOpen(false)}
      />
      {/* Docs Upload Form Popup */}
      <PopUpModal
        size="md"
        title="Please Upload Required Documents"
        isOpen={docsPopup}
        onClose={() => setDocsPopup(false)}
      >
        <div className="flex w-full flex-col items-start justify-center gap-4">
          <h3 className="flex">
            Upload the required docs for Bailiff
            <span className="mx-2 flex font-semibold text-blue-500">
              {
                bailiffs?.find((bailiff) => bailiff.id === selectedId)
                  ?.bailiff_name
              }
            </span>
            to accept this client!
          </h3>
          <div className="flex w-full flex-col items-center justify-start gap-2 md:gap-3">
            {requiredDocs?.map((item: any) => (
              <SimpleInlineDocUploader
                key={item.title}
                title={item.title}
                // color={item.colorCode}
                onUpload={(data) => (item.data = data)}
              />
            ))}
          </div>
          <button
            className="_hover-settings mx-auto mt-8 flex w-1/2 items-center justify-center rounded-lg bg-blue-500 px-4 py-4 font-semibold text-white hover:bg-blue-400"
            onClick={() => setDocsPopup(false)}
          >
            submit
          </button>
        </div>
      </PopUpModal>
    </section>
  );
};

export default ImportTable;
