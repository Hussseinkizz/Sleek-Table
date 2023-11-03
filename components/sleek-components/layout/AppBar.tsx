import * as Icons from "react-icons/hi";
import * as Icons2 from "react-icons/hi2";
import SearchBox from "../SearchBox";
import myAvatar from "../../public/assets/me.jpg";
import Image from "next/image";
import BackButton from "components/BackButton";
import useFullScreen from "hooks/useFullScreen";

type Props = {
  onToggleSideBar: () => void;
};

const AppBar = (props: Props) => {
  const [isFullscreen, toggleFullscreen] = useFullScreen();

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-lg">
      <nav className="py-2 px-4">
        <div className="flex items-center justify-between gap-4">
          <Icons.HiMenu
            className="h-6 w-6 text-gray-600 transition ease-linear hover:text-gray-500"
            onClick={props.onToggleSideBar}
          />
          <BackButton />
          <span className="mx-8 w-3/4">
            <SearchBox placeholder="search here..." />
          </span>
          <div className="flex items-center justify-center gap-3">
            {isFullscreen ? (
              <Icons2.HiOutlineViewfinderCircle
                className="h-6 w-6 text-green-400 transition ease-linear hover:text-green-500"
                onClick={toggleFullscreen}
              />
            ) : (
              <Icons2.HiViewfinderCircle
                className="h-6 w-6 text-green-400 transition ease-linear hover:text-green-300"
                onClick={toggleFullscreen}
              />
            )}
            {/* <Icons.HiSun className="h-6 w-6 text-gray-600 transition ease-linear hover:text-gray-500" /> */}
            <Icons.HiBell className="h-6 w-6 text-green-400 transition ease-linear hover:text-green-300" />
            <span className="h-12 w-12 rounded-full border border-green-200">
              <Image
                src={myAvatar}
                // layout="responsive"
                width={50}
                height={50}
                alt="user avatar"
                className="rounded-full transition-opacity ease-linear hover:opacity-80"
              />
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AppBar;
