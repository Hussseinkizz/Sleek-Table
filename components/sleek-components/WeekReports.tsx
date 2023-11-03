import Link from "next/link";
import { useState } from "react";
import * as Icons from "react-icons/hi";
import ReactionModal from "./ReactionModal";

const WeekReports = () => {
  const [reactionModalOpen, setReactionModalOpen] = useState(false);

  // const handleReacting = () => {};

  return (
    <section className="flex w-full flex-col items-center justify-between gap-4">
      {/* The Weeks Wrapper */}
      <div className="flex w-full flex-auto flex-col items-center justify-between gap-8 md:flex-row md:gap-16">
        {/* This Week Stuff */}
        <div className="flex w-full flex-col items-center justify-between gap-4 rounded-lg bg-slate-50 p-2">
          <h1 className="w-full text-left text-lg font-bold">This Week</h1>
          <div className="flex w-full items-center justify-between gap-2 border-b border-slate-300 pb-2">
            <Link
              href="/total-clients-engagged"
              passHref
              className="flex font-semibold text-indigo-500 transition duration-300 ease-linear hover:gap-2 hover:text-indigo-600"
            >
              <Icons.HiChevronRight className="h-5 w-5" />
              Total Clients Engagged:
            </Link>
            <span className="flex font-semibold text-indigo-500">100</span>
          </div>
          <div className="flex w-full items-center justify-between gap-2 border-b border-slate-300 pb-2">
            <Link
              href="/total-clients-who-paid"
              passHref
              className="flex font-semibold text-indigo-500 transition duration-300 ease-linear hover:gap-2 hover:text-indigo-600"
            >
              <Icons.HiChevronRight className="h-5 w-5" />
              Total Clients Who Paid:
            </Link>
            <span className="flex font-semibold text-indigo-500">60</span>
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-2">
            <span className="flex w-full justify-start font-semibold">
              Bailiff Remark:
            </span>
            <p className="flex">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              vero, tempore fugit hic blanditiis soluta ut quae rerum cumque sed
              ducimus reprehenderit assumenda, dolores repellendus quam debitis
              culpa dolor quisquam, mollitia optio tempora! Sed quis impedit
              maiores magnam praesentium labore deleniti itaque nam corporis,
              aspernatur neque sequi quibusdam odit saepe!
            </p>
          </div>
          <div className="flex w-full items-center justify-start gap-2">
            <Link
              href={"/individual-reports"}
              passHref
              className="_hover-settings flex w-fit items-center justify-center gap-2 rounded-lg bg-indigo-100 px-2 py-1 font-semibold text-indigo-500 hover:text-indigo-400"
            >
              <Icons.HiEye className="h-5 w-5" />
              <span className="flex">View Individual Reports</span>
            </Link>
            <button
              className="_hover-settings flex w-fit items-center justify-center gap-2 rounded-lg bg-green-100 px-2 py-1 font-semibold text-green-500 hover:text-green-400"
              onClick={() => setReactionModalOpen(true)}
            >
              <Icons.HiChat className="h-5 w-5" />
              <span className="flex">React To Report</span>
            </button>
          </div>
        </div>
        {/* Last Week Stuff */}
        <div className="flex w-full flex-col items-center justify-between gap-4 rounded-lg bg-slate-50 p-2">
          <h1 className="w-full text-left text-lg font-bold">Last Week</h1>
          <div className="flex w-full items-center justify-between gap-2 border-b border-slate-300 pb-2">
            <Link
              href="/total-clients-engagged"
              passHref
              className="flex font-semibold text-indigo-500 transition duration-300 ease-linear hover:gap-2 hover:text-indigo-600"
            >
              <Icons.HiChevronRight className="h-5 w-5" />
              Total Clients Engagged:
            </Link>
            <span className="flex font-semibold text-indigo-500">60</span>
          </div>
          <div className="flex w-full items-center justify-between gap-2 border-b border-slate-300 pb-2">
            <Link
              href="/total-clients-who-paid"
              passHref
              className="flex font-semibold text-indigo-500 transition duration-300 ease-linear hover:gap-2 hover:text-indigo-600"
            >
              <Icons.HiChevronRight className="h-5 w-5" />
              Total Clients Who Paid:
            </Link>
            <span className="flex font-semibold text-indigo-500">60</span>
          </div>
          <div className="flex w-full flex-col items-center justify-between gap-2">
            <span className="flex w-full justify-start font-semibold">
              Bailiff Remark:
            </span>
            <p className="flex">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              vero, tempore fugit hic blanditiis soluta ut quae rerum cumque sed
              ducimus reprehenderit assumenda, dolores repellendus quam debitis
              culpa dolor quisquam, mollitia optio tempora! Sed quis impedit
              maiores magnam praesentium labore deleniti itaque nam corporis,
              aspernatur neque sequi quibusdam odit saepe! Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Non, facilis? Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Nulla quibusdam
              provident perferendis alias velit id asperiores sed cum ab
              quaerat!
            </p>
          </div>
          <div className="flex w-full items-center justify-start gap-2">
            <Link
              href={"/individual-reports"}
              passHref
              className="_hover-settings flex w-fit items-center justify-center gap-2 rounded-lg bg-indigo-100 px-2 py-1 font-semibold text-indigo-500 hover:text-indigo-400"
            >
              <Icons.HiEye className="h-5 w-5" />
              <span className="flex">View Individual Reports</span>
            </Link>
            <button
              className="_hover-settings flex w-fit items-center justify-center gap-2 rounded-lg bg-green-100 px-2 py-1 font-semibold text-green-500 hover:text-green-400"
              onClick={() => setReactionModalOpen(true)}
            >
              <Icons.HiChat className="h-5 w-5" />
              <span className="flex">React To Report</span>
            </button>
          </div>
        </div>
      </div>
      {/* The More Weeks */}
      <Link
        href="/all-weeks-reports"
        passHref
        className="_hover-settings mt-8 flex w-full items-center justify-center gap-2 rounded-lg border border-indigo-300 bg-indigo-100 px-4 py-4 text-indigo-500 shadow hover:text-indigo-400"
      >
        <span className="flex">All Weeks</span>
        <Icons.HiChevronRight className="h-5 w-5" />
      </Link>
      <ReactionModal
        isOpen={reactionModalOpen}
        onClose={() => setReactionModalOpen(false)}
      />
    </section>
  );
};

export default WeekReports;
