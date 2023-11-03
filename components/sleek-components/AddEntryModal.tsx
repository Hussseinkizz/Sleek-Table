import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  addNewClient: (newClient: ClientType) => void;
}

interface ClientType {
  id: number;
  name: string;
  loanAmount: string;
  loanPeriod: string;
  paymentScheduleAmount: string;
  paymentSchedule: string;
  intersetRate: string;
  defaultFeeRate: string;
}

export default function AddEntryModal(props: Props) {
  const [name, setName] = useState("");
  const [loan, setLoan] = useState("");
  const [period, setPeriod] = useState("");
  const [scheduleAmount, setScheduleAmount] = useState("");
  const [interest, setInterest] = useState("");
  const [defaultRate, setDefaultRate] = useState("");

  const handleNewEntry = () => {
    // do som
    let newClient: ClientType = {
      id: 1,
      name: name,
      loanAmount: loan,
      loanPeriod: period,
      paymentScheduleAmount: scheduleAmount,
      paymentSchedule: "monthly",
      intersetRate: interest,
      defaultFeeRate: defaultRate,
    };
    props.addNewClient(newClient);
    // console.log(newClient);
  };

  return (
    <section>
      <Modal show={props.isOpen} size="md" popup={true} onClose={props.onClose}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Fill In To Add A New Entry!
            </h3>
            {/* The Inputs Container */}
            <section className="grid w-full grid-cols-1 gap-4 md:gap-x-16">
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="clientName" value="Client Name:" />
                </div>
                <TextInput
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder=""
                  required={true}
                  className="_hover-settings outline-none"
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="loanAmount"
                    value="Outstanding Loan Amount: (UGX)"
                  />
                </div>
                <TextInput
                  id="loan"
                  placeholder=""
                  required={true}
                  value={loan}
                  onChange={(e) => setLoan(e.target.value)}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="loanPeriod" value="Loan Period:" />
                </div>
                <TextInput
                  id="period"
                  placeholder=""
                  required={true}
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label
                    htmlFor="scheduleAmount"
                    value="Repayment Schedule Amount: (UGX)"
                  />
                </div>
                <TextInput
                  id="scheduleAmount"
                  placeholder=""
                  required={true}
                  value={scheduleAmount}
                  onChange={(e) => setScheduleAmount(e.target.value)}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="interestRate" value="Interest Rate: (%)" />
                </div>
                <TextInput
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  id="interest"
                  placeholder=""
                  required={true}
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="defaultRate" value="Default Fee Rate: (%)" />
                </div>
                <TextInput
                  id="defaultRate"
                  placeholder=""
                  required={true}
                  value={defaultRate}
                  onChange={(e) => setDefaultRate(e.target.value)}
                />
              </div>
              {/* The Action Button */}
              <button
                className="_hover-settings mt-2 flex w-full items-center justify-center rounded-lg bg-blue-500 px-4 py-2 text-slate-50 shadow-sm hover:bg-blue-400"
                onClick={handleNewEntry}
              >
                Submit
              </button>
            </section>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
}
