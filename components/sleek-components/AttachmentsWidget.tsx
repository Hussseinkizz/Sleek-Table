import React from "react";
import * as Icons from "react-icons/hi";

interface Props {}

const AttachmentsWidget = (props: Props) => {
  return (
    <section className="my-2 flex w-full items-center justify-between gap-4 rounded-3xl bg-indigo-50 px-4 py-2">
      <h3 className="text-sm font-semibold text-slate-700">Attach Media:</h3>
      {/* The Wrapper */}
      <div className="flex w-full items-center justify-start gap-4">
        {/* Add Photo */}
        <div className="_hover-settings group flex gap-2 rounded-3xl bg-white px-2 py-2 font-semibold hover:ring-1 hover:ring-indigo-200">
          <Icons.HiPhotograph className="h-6 w-6 text-indigo-400 group-hover:text-indigo-500" />
          <span className="flex text-indigo-400 group-hover:text-indigo-500">
            Add Photos
          </span>
        </div>
        {/* Add Video */}
        <div className="_hover-settings group flex gap-2 rounded-3xl bg-white px-2 py-2 font-semibold hover:ring-1 hover:ring-indigo-200">
          <Icons.HiVideoCamera className="h-6 w-6 text-indigo-400 group-hover:text-indigo-500" />
          <span className="flex text-indigo-400 group-hover:text-indigo-500">
            Add Video
          </span>
        </div>
        {/* Add Audio */}
        <div className="_hover-settings group flex gap-2 rounded-3xl bg-white px-2 py-2 font-semibold hover:ring-1 hover:ring-indigo-200">
          <Icons.HiMusicNote className="h-6 w-6 text-indigo-400 group-hover:text-indigo-500" />
          <span className="flex text-indigo-400 group-hover:text-indigo-500">
            Add Audio
          </span>
        </div>
      </div>
    </section>
  );
};

export default AttachmentsWidget;
