import { $Bailiff } from "data/data_types";
import * as Icons from "react-icons/hi";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loader from "./Loader";
import AvatarUploadWidget from "./AvatarUploadWidget";
import RatingStars from "./RatingStars";
import AttachmentViewWidget from "./AttachmentViewWidget";

interface Props {
  accountDetials: $Bailiff;
  onEdit: () => void;
}

const AccountView = (props: Props) => {
  console.log("load data", props.accountDetials);

  if (!props.accountDetials) {
    return <Loader />;
  }

  return (
    <section className="_default-surface flex w-full flex-col items-center justify-between gap-8 rounded-md">
      {/* The top wrapper */}
      <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
        {/* The Avatar */}
        <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
          {props.accountDetials?.bailiff_image_url ? (
            <span className="flex h-40 w-40">
              <Image
                className="flex w-full rounded-full"
                src={props.accountDetials?.bailiff_image_url}
                width={400}
                height={400}
                alt="user photo"
              />
            </span>
          ) : (
            <AvatarUploadWidget isPlaceholder />
          )}

          {/* The Info */}
          <div className="flex w-full flex-col items-center justify-center gap-2">
            <div className="flex w-full items-center justify-between gap-4">
              <span className="flex font-semibold">Name:</span>
              <span className="flex">{props.accountDetials?.bailiff_name}</span>
            </div>
            <div className="flex w-full items-center justify-between gap-4">
              <span className="flex font-semibold">Phone Contact:</span>
              <span className="flex">{props.accountDetials?.phone_number}</span>
            </div>
            <div className="flex w-full items-center justify-between gap-4">
              <span className="flex font-semibold">Email:</span>
              <span className="flex">
                {props.accountDetials?.email
                  ? props.accountDetials?.email
                  : "--"}
              </span>
            </div>
            <div className="flex w-full items-center justify-between gap-4">
              <span className="flex font-semibold">Password:</span>
              <span className="flex">
                {props.accountDetials?.password.split("").map((char) => "*")}
              </span>
            </div>
            <div className="flex w-full items-center justify-between gap-4">
              <span className="flex font-semibold">TIN Number:</span>
              <span className="flex">
                {props.accountDetials?.tin_number
                  ? props.accountDetials?.tin_number
                  : "--"}
              </span>
            </div>
            <div className="flex w-full items-center justify-between gap-4">
              <span className="flex font-semibold">Rating:</span>
              <span className="flex">
                <RatingStars rating={props.accountDetials?.bailiff_rating} />
              </span>
            </div>
          </div>
        </div>
        {/* The Action Buttons */}
        <div className="flex w-full items-center justify-center md:w-1/2 md:justify-end">
          <button
            className="_hover-settings --hover:bg-indigo-50 group mt-4 flex flex-1 items-center justify-center gap-4 rounded-lg bg-white p-2 text-indigo-400 ring-1 ring-indigo-300 hover:text-indigo-500 hover:shadow-md md:mt-0 md:flex-initial"
            onClick={props.onEdit}
          >
            <Icons.HiPencilAlt className="_icon-interaction h-5 w-5" />
            <span className="flex">Edit Profile</span>
          </button>
        </div>
      </div>
      {/* The Other Contents */}
      <div className="flex w-full flex-col items-start justify-between gap-4 border-t border-t-slate-100 p-2">
        <p className="flex text-slate-500">Your attached documents</p>
        {/* The Attachments Previews Wrapper */}
        <section className="flex w-full flex-col items-start justify-between gap-8">
          {/* The Attachment Item */}
          <AttachmentViewWidget
            title="company document"
            imageUrl={props.accountDetials.company_doc_url}
          />
          <div className="flex w-full"></div>
          <AttachmentViewWidget
            title="trading license"
            imageUrl={props.accountDetials.trading_license_image_url}
          />
          <AttachmentViewWidget
            title="high court license"
            imageUrl={props.accountDetials.highcourt_license_image_url}
          />
        </section>
      </div>
    </section>
  );
};

export default AccountView;
