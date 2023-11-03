import { useEffect, useState } from "react";

interface Props {
  title: string;
  onSelect: (event: any) => void;
  activeTab: string;
}

const TabTrigger = (props: Props) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (props.title === props.activeTab) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [props.title, props.activeTab]);

  return (
    <button
      className={`_hover-settings flex w-full items-center justify-center gap-2 px-4 py-2 ${
        isActive ? "border-b border-blue-300 text-blue-400" : "text-gray-600"
      } hover:text-blue-500`}
      onClick={() => props.onSelect(props.title)}
    >
      <span className="flex">{props.title}</span>
    </button>
  );
};

export default TabTrigger;
