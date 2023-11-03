import Image from "next/image";

import BriefCaseArt from "../../public/assets/art/briefcase.svg";
import BagArt from "../../public/assets/art/bag.svg";
import BucketArt from "../../public/assets/art/bucket.svg";
import CalendarArt from "../../public/assets/art/calendar.svg";

interface Props {}

const HeroSection = (props: Props) => {
  return (
    <section className="mt-12 grid w-full grid-cols-1 items-center justify-between gap-4 md:grid-cols-4">
      {/* Card 1 */}
      <div className="_hover-settings group relative flex cursor-pointer flex-col items-center justify-between gap-2 overflow-clip rounded-lg bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 text-blue-50 shadow-2xl will-change-auto hover:scale-95 hover:shadow-xl">
        <div className="relative flex h-64 w-64">
          <Image
            src={BriefCaseArt}
            alt="illustration art"
            className="_hover-settings h-64 w-64 -rotate-6 transform group-hover:rotate-0"
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-2 px-8 py-2 pb-16 text-white">
          <h1 className="flex gap-2 text-3xl font-bold">
            <span className="_hover-settings flex group-hover:text-blue-100">
              30,000,000
            </span>
            <span className="flex text-xl">UGX</span>
          </h1>
          <p className="flex font-semibold text-blue-100">Total Portfolio</p>
        </div>
        {/* The Card Waves */}
        <div className="absolute bottom-0 left-0 z-[1] flex w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              className="w-full fill-blue-200"
              fillOpacity="0.5"
              d="M0,96L160,192L320,192L480,224L640,128L800,192L960,64L1120,160L1280,160L1440,32L1440,320L1280,320L1120,320L960,320L800,320L640,320L480,320L320,320L160,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      {/* Card 2 */}
      <div className="_hover-settings group relative flex cursor-pointer flex-col items-center justify-between gap-2 overflow-clip rounded-lg bg-gradient-to-br from-rose-400 via-rose-500 to-rose-700 text-rose-50 shadow-2xl will-change-auto hover:scale-95 hover:shadow-xl">
        <div className="relative flex h-64 w-64">
          <Image
            src={CalendarArt}
            alt="illustration art"
            className="_hover-settings h-64 w-64 -rotate-6 transform group-hover:rotate-0"
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-2 px-8 py-2 pb-16 text-white">
          <h1 className="flex gap-2 text-3xl font-bold">
            <span className="_hover-settings flex group-hover:text-rose-100">
              5,000,000
            </span>
            <span className="flex text-xl">UGX</span>
          </h1>
          <p className="flex font-semibold text-rose-100">Total Retrieved</p>
        </div>
        {/* The Card Waves */}
        <div className="absolute bottom-0 left-0 z-[1] flex w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              className="w-full fill-rose-200"
              fillOpacity="0.5"
              d="M0,96L240,160L480,256L720,192L960,128L1200,224L1440,128L1440,320L1200,320L960,320L720,320L480,320L240,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      {/* Card 3 */}
      <div className="_hover-settings group relative flex cursor-pointer flex-col items-center justify-between gap-2 overflow-clip rounded-lg bg-gradient-to-br from-green-400 via-green-500 to-green-700 text-green-50 shadow-2xl will-change-auto hover:scale-95 hover:shadow-xl">
        <div className="relative flex h-64 w-64">
          <Image
            src={BagArt}
            alt="illustration art"
            className="_hover-settings h-64 w-64 -rotate-6 transform group-hover:rotate-0"
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-2 px-8 py-2 pb-16 text-white">
          <h1 className="flex gap-2 text-3xl font-bold">
            <span className="_hover-settings flex group-hover:text-green-100">
              780,000
            </span>
            <span className="flex text-xl">UGX</span>
          </h1>
          <p className="flex font-semibold text-green-100">
            Collected This Week
          </p>
        </div>
        {/* The Card Waves */}
        <div className="absolute bottom-0 left-0 z-[1] flex w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              className="w-full fill-green-200"
              fillOpacity="0.5"
              d="M0,128L160,256L320,192L480,288L640,128L800,224L960,96L1120,192L1280,96L1440,96L1440,320L1280,320L1120,320L960,320L800,320L640,320L480,320L320,320L160,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      {/* Card 4 */}
      <div className="_hover-settings group relative flex cursor-pointer flex-col items-center justify-between gap-2 overflow-clip rounded-lg bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 text-amber-50 shadow-2xl will-change-auto hover:scale-95 hover:shadow-xl">
        <div className="relative flex h-64 w-64">
          <Image
            src={BucketArt}
            alt="illustration art"
            className="_hover-settings h-64 w-64 -rotate-6 transform group-hover:rotate-0"
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-2 px-8 py-2 pb-16 text-white">
          <h1 className="flex gap-2 text-3xl font-bold">
            <span className="_hover-settings flex group-hover:text-amber-100">
              60
            </span>
            <span className="flex text-xl">%</span>
          </h1>
          <p className="flex font-semibold text-amber-100">Recovery Rate</p>
        </div>
        {/* The Card Waves */}
        <div className="absolute bottom-0 left-0 z-[1] flex w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              className="w-full fill-amber-200"
              fillOpacity="0.5"
              d="M0,192L160,256L320,160L480,224L640,96L800,256L960,128L1120,224L1280,64L1440,128L1440,320L1280,320L1120,320L960,320L800,320L640,320L480,320L320,320L160,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
