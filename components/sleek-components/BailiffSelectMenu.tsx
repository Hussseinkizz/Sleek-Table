import { bailiffs } from "data/UI_data";
import React from "react";
import * as Icons from "react-icons/hi";

const BailiffSelectMenu = (onSelect: any) => {
  return (
    <div className="p2 absolute z-50 flex w-fit flex-col items-center justify-between gap-2 bg-slate-50 shadow-md">
      {bailiffs.map((bailiff) => (
        <div
          key={bailiff.id}
          className="flex items-center justify-between gap-2"
          onClick={() => onSelect(bailiff.id)}
        >
          <span className="flex">
            <Icons.HiUser className="h-6 w-6" />
          </span>
          <span className="flex">{bailiff.bailiff_name}</span>
        </div>
      ))}
    </div>
  );
};

export default BailiffSelectMenu;
