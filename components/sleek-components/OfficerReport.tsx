import React from "react";

interface Props {
  name: string;
  date: string;
  report: string;
}

const OfficerReport = (props: Props) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-2 rounded-lg bg-indigo-100 p-2">
      <h1 className="flex w-full items-center justify-between gap-2">
        <span className="flex text-xl font-bold capitalize">{props.name}</span>
        {/* <span className="flex">{props.date}</span> */}
      </h1>
      <p className="flex w-full items-center justify-start gap-2">
        <span className="flex font-semibold text-slate-700">Report:</span>
        <span className="flex">{props.report}</span>
      </p>
    </div>
  );
};

export default OfficerReport;
