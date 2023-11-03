import { useEffect, useRef, useState } from "react";
import * as Icons from "react-icons/hi";

interface Props {
  title: string;
  defaultState?: "open" | "closed";
  children: JSX.Element | JSX.Element[];
}

const Accordion = (props: Props) => {
  let initialState = props.defaultState === "open" ? true : false;
  const [isExpanded, setIsExpanded] = useState(initialState);

  const contentElementRef = useRef<any>();

  const handleToggle = () => {
    if (!isExpanded) {
      contentElementRef.current.style.height = "100%";
    } else {
      contentElementRef.current.style.height = "0px";
    }
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (props.defaultState === "open") {
      contentElementRef.current.style.height = "100%";
    }
  }, [props.defaultState]);

  return (
    <div className="flex w-full flex-col items-center justify-between gap-4 overflow-hidden">
      <h2
        className="flex w-full cursor-pointer items-center justify-start gap-2 font-semibold transition duration-200 ease-linear will-change-transform hover:text-gray-600"
        onClick={handleToggle}
      >
        <Icons.HiChevronDown
          className={`h-6 w-6 ${isExpanded ? "-rotate-180" : "rotate-0"}`}
        />
        <span className="flex">{props.title}</span>
      </h2>
      <div
        className={`flex h-0 w-full flex-col items-center justify-between gap-4 transition duration-200 ease-linear will-change-auto`}
        ref={contentElementRef}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Accordion;
