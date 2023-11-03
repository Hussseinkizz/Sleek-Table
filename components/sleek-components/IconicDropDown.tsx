import { useRef, useState } from "react";
import * as Icons from "react-icons/hi";
import { useOnClickOutside } from "usehooks-ts";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const IconicDropDown = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  let awayRef = useRef(null);

  useOnClickOutside(awayRef, () => setIsOpen(false));

  return (
    <div className="absolute right-2 top-2 z-[2]">
      <span
        className="_hover-settings z-[3] flex rounded-lg p-1 text-blue-400 shadow ring-1 ring-blue-50 hover:text-blue-500 hover:shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Icons.HiChevronDown className="h-5 w-5" />
      </span>
      {/* The DropDown Content */}
      {isOpen ? (
        <div
          ref={awayRef}
          className="absolute right-2 top-8 z-[4] flex w-48 animate-fade flex-col gap-2 rounded-lg bg-white p-4 text-sm shadow-lg animate-duration-200"
        >
          {props.children}
        </div>
      ) : null}
    </div>
  );
};

export default IconicDropDown;
