import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface Props {
  isOpen: boolean;
  children: JSX.Element | JSX.Element[];
}

export default function NotificationPopup(props: Props) {
  return (
    <section
      className="flex w-full flex-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <Popover className="relative w-full">
        <Transition
          show={props.isOpen}
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute top-12 right-0 z-50 h-64 w-48 translate-y-0 transform md:h-80 md:w-96">
            <section className="relative isolate h-full rounded-lg bg-white text-slate-800 shadow-lg ring-1 ring-indigo-100 ring-opacity-5">
              {/* The decorator */}
              <div
                className="absolute right-1 -top-2 rounded-[6px] bg-white p-2"
                style={{ clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)" }}
              ></div>
              <div className="flex items-center justify-center  overflow-hidden p-2">
                {props.children}
              </div>
            </section>
          </Popover.Panel>
        </Transition>
      </Popover>
    </section>
  );
}
