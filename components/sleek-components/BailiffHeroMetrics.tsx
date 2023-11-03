// import { bailiffHomeMetrics } from "data/UI_data";
import MetricCard from "./MetricCard";
import * as Icons from "react-icons/hi";
import { useRouter } from "next/router";

interface Props {}

const BailiffHeroMetrics = (props: Props) => {
  const router = useRouter();

  const navigateTo = (route: string) => {
    router.push(route);
  };

  return (
    <section className="flex w-full flex-col gap-4 p-2 md:flex-row">
      <MetricCard
        route="/my-account"
        title="Total Portfolio"
        icon={<Icons.HiChartPie className="h-5 w-5" />}
        data={1000000}
        percentText="Retrieved Totaling"
        percentAmount={200000}
      />
      {/* Closed Files Card */}
      <div
        className="_hover-settings --hover:shadow-blue-200 group relative mx-auto flex max-w-xs flex-auto cursor-pointer flex-col gap-1 overflow-clip rounded-lg bg-gradient-to-l from-rose-400 to-rose-600 py-6 px-8 text-white shadow will-change-transform hover:-translate-y-4 hover:shadow-lg hover:transition-transform"
        onClick={() => navigateTo("/closed-files")}
      >
        <p className="flex">Compared To Last Week</p>
        <div className="flex w-full items-center justify-between gap-4">
          <div className="flex items-center justify-start gap-2">
            <span className="--group-hover:bg-blue-400 flex rounded-lg bg-rose-400 p-2 text-rose-50 transition ease-linear">
              <Icons.HiBriefcase className="h-5 w-5" />
            </span>
            <div className="flex flex-col items-start  justify-center text-xl font-bold text-white transition ease-linear group-hover:text-rose-100">
              <span className="flex">120</span>
              <span className="flex">Closed Files</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1 text-sm text-rose-50">
            <Icons.HiArrowCircleDown className="h-5 w-5" />
            <span className="flex">-20%</span>
          </div>
        </div>
        {/* The Card Waves */}
        <div className="absolute bottom-0 left-0 z-[1] flex w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              className="w-full fill-rose-200"
              fillOpacity="0.5"
              d="M0,96L160,192L320,192L480,224L640,128L800,192L960,64L1120,160L1280,160L1440,32L1440,320L1280,320L1120,320L960,320L800,320L640,320L480,320L320,320L160,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      {/* Total Clients Card */}
      <div
        className="_hover-settings --hover:shadow-blue-200 group relative mx-auto flex max-w-xs flex-auto cursor-pointer flex-col gap-1 overflow-clip rounded-lg bg-gradient-to-l from-green-400 to-green-600 py-6 px-8 text-white shadow will-change-transform hover:-translate-y-4 hover:shadow-lg hover:transition-transform"
        onClick={() => navigateTo("/all-clients")}
      >
        <p className="flex">Compared To Last Week</p>
        <div className="flex w-full items-center justify-between gap-4">
          <div className="flex items-center justify-start gap-2">
            <span className="--group-hover:bg-blue-400 flex rounded-lg bg-green-400 p-2 text-green-50 transition ease-linear">
              <Icons.HiUsers className="h-5 w-5" />
            </span>
            <div className="flex flex-col items-start  justify-center text-xl font-bold text-white transition ease-linear group-hover:text-green-100">
              <span className="flex">450</span>
              <span className="flex">Total Clients</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1 text-sm text-green-50">
            <Icons.HiArrowCircleUp className="h-5 w-5" />
            <span className="flex">+34%</span>
          </div>
        </div>
        {/* The Card Waves */}
        <div className="absolute bottom-0 left-0 z-[1] flex w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              className="w-full fill-green-200"
              fillOpacity="0.5"
              d="M0,256L160,224L320,256L480,128L640,192L800,96L960,96L1120,160L1280,64L1440,128L1440,320L1280,320L1120,320L960,320L800,320L640,320L480,320L320,320L160,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      {/* Total Officers Card */}
      <div
        className="_hover-settings --hover:shadow-blue-200 group relative mx-auto flex max-w-xs flex-auto cursor-pointer flex-col gap-1 overflow-clip rounded-lg bg-gradient-to-l from-amber-400 to-amber-600 py-6 px-8 text-white shadow will-change-transform hover:-translate-y-4 hover:shadow-lg hover:transition-transform"
        onClick={() => navigateTo("/manage-officers")}
      >
        <p className="flex">Compared To Last Week</p>
        <div className="flex w-full items-center justify-between gap-4">
          <div className="flex items-center justify-start gap-2">
            <span className="--group-hover:bg-blue-400 flex rounded-lg bg-amber-400 p-2 text-amber-50 transition ease-linear">
              <Icons.HiUserGroup className="h-5 w-5" />
            </span>
            <div className="flex flex-col items-start  justify-center text-xl font-bold text-white transition ease-linear group-hover:text-amber-100">
              <span className="flex">40</span>
              <span className="flex">Total Officers</span>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1 text-sm text-amber-50">
            <Icons.HiSwitchVertical className="h-5 w-5" />
            <span className="flex">100%</span>
          </div>
        </div>
        {/* The Card Waves */}
        <div className="absolute bottom-0 left-0 z-[1] flex w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              className="w-full fill-amber-200"
              fillOpacity="0.5"
              d="M0,64L160,160L320,96L480,128L640,128L800,192L960,160L1120,128L1280,96L1440,192L1440,320L1280,320L1120,320L960,320L800,320L640,320L480,320L320,320L160,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default BailiffHeroMetrics;
