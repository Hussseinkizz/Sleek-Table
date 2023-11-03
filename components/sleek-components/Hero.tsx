import { stats } from "data/UI_data";
import Link from "next/link";
import * as Icons from "react-icons/hi";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="w-full py-12">
      <div className="--md:px-8 mx-auto max-w-screen-xl px-4 text-gray-600">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-3xl font-semibold text-gray-800 sm:text-4xl">
            General Summary!
          </h3>
          <p className="mt-3">
            Here is how things are going ever since you started using this
            system!
          </p>
        </div>
        <div className="mt-12 w-full">
          <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x">
            {stats.map((item, idx) => (
              <li key={idx} className="--md:px-16 px-8 text-center">
                <h4 className="text-3xl font-semibold text-indigo-500">
                  {item.data}
                </h4>
                <p className="mt-3 font-medium">{item.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* The Approvals Banner */}
      <Link
        href="/pending-approvals"
        passHref
        className="_hover-settings mx-auto mt-8 flex w-4/5 items-center justify-center gap-2 rounded-lg border border-red-300 bg-red-100 px-4 py-4 text-red-500 shadow hover:text-red-400"
      >
        <Icons.HiClock className="h-5 w-5" />
        <span className="flex">You have 5 Pending Payments</span>
        <Icons.HiChevronRight className="h-5 w-5" />
      </Link>
    </section>
  );
};

export default Hero;
