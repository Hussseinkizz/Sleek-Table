import { Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import * as Icons from "react-icons/hi";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ReactionModal(props: Props) {
  const [message, setMessage] = useState("");

  const handleNewReaction = () => {
    //
  };

  return (
    <section>
      <Modal show={props.isOpen} size="md" popup={true} onClose={props.onClose}>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              {`React To Bailiff's Report!`}
            </h3>
            {/* The Reaction Container */}
            <section className="grid w-full grid-cols-1 gap-4 md:gap-x-16">
              <div className="mt-8 flex w-full">
                <textarea
                  id="rejectInput"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Say something about the report..."
                  name="bordered-radio"
                  className="flex w-full flex-auto rounded-md border border-indigo-100 bg-slate-50 p-2.5 outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>
              {/* The Action Button */}
              <button
                className="_hover-settings mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-green-500 px-4 py-2 text-slate-50 shadow-sm hover:bg-green-400"
                onClick={props.onClose}
              >
                <Icons.HiChat className="h-5 w-5" />
                <span className="flex font-semibold">Send Reaction</span>
              </button>
            </section>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
}
