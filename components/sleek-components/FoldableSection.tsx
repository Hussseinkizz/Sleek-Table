import React, { useState, useRef } from "react";
import * as Icons2 from "react-icons/io5";

interface Props {
  sectionTitle: string;
  children: JSX.Element | JSX.Element[];
  defaultState?: string;
  variant?: string;
}

const FoldableSection = (props: Props) => {
  const [isClosed, setIsClosed] = useState<boolean>(false);

  const contentElementRef = useRef<any>();

  const handleToggle = () => {
    if (isClosed) {
      contentElementRef.current.style.height = "100%";
    } else {
      contentElementRef.current.style.height = "0px";
    }
    setIsClosed(!isClosed);
  };

  function getColor(status: string | undefined) {
    if (status === "isFailure") {
      return "red";
    } else if (status === "isSuccess") {
      return "green";
    } else {
      // normal
      return "indigo";
    }
  }

  return (
    <section
      className={`flex w-full flex-col items-center justify-between gap-4 overflow-hidden rounded-lg --bg-${getColor(
        props.variant
      )}-50 bg-white shadow transition duration-300 ease-linear
will-change-auto`}
    >
      <div
        className="mb-2 flex w-full items-center justify-start gap-2 rounded-lg py-1 px-2 hover:text-slate-600"
        onClick={handleToggle}
      >
        {!isClosed ? (
          <Icons2.IoCaretForward className="h-6 w-6" />
        ) : (
          <Icons2.IoCaretDown className="h-6 w-6" />
        )}
        <h1 className="section-title flex text-xl font-bold capitalize md:text-2xl">
          {props.sectionTitle}
        </h1>
      </div>
      <div
        className="section-content w-full rounded-lg py-1 px-2"
        ref={contentElementRef}
      >
        {props.children}
      </div>
    </section>
  );
};

export default FoldableSection;
