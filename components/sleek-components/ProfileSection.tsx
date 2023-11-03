import React from "react";
import * as Icons from "react-icons/hi";
import sampleAvatar from "../public/assets/me.jpg";
import Image from "next/image";

interface Props {}

const ProfileSection = (props: Props) => {
  return (
    <section className="_default-surface flex w-full items-center justify-between gap-4 rounded-md">
      {/* The Avatar */}
      <div className="flex w-full items-center justify-between gap-4">
        <span className="flex h-32 w-40">
          <Image
            className="flex w-full rounded-full"
            src={sampleAvatar}
            alt="user photo"
          />
        </span>
        {/* The Info */}
        <div className="flex w-full flex-col items-center justify-center gap-2">
          <div className="flex w-full items-center justify-between gap-4">
            <span className="flex font-semibold">Name:</span>
            <span className="flex">John Doe</span>
          </div>
          <div className="flex w-full items-center justify-between gap-4">
            <span className="flex font-semibold">Phone Contact:</span>
            <span className="flex">0704353301</span>
          </div>
          <div className="flex w-full items-center justify-between gap-4">
            <span className="flex font-semibold">Email:</span>
            <span className="flex">johndoe@gmail.com</span>
          </div>
          <div className="flex w-full items-center justify-between gap-4">
            <span className="flex font-semibold">Password:</span>
            <span className="flex">***********</span>
          </div>
        </div>
      </div>
      {/* The Action Buttons */}
      <div className="flex w-1/2 items-center justify-end">
        <button className="_hover-settings --hover:bg-indigo-50 group flex items-center justify-center gap-4 rounded-lg bg-white p-2 text-indigo-400 ring-1 ring-indigo-300 hover:text-indigo-500 hover:shadow-md">
          <Icons.HiPencilAlt className="_icon-interaction h-5 w-5" />
          <span className="flex">Edit</span>
        </button>
      </div>
    </section>
  );
};

export default ProfileSection;
