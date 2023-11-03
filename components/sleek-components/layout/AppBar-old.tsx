import Link from "next/link";
import * as Icons from "react-icons/hi";
import BackButton from "components/BackButton";
import { useRouter } from "next/router";
import Notification from "components/Notification";
import { useEffect, useState } from "react";
const { useWindowScroll } = require("react-recipes");

type Props = {
  onOpenDrawer: () => void;
};

const AppBar = (props: Props) => {
  const [isScrolling, setIsScrolling] = useState(false);

  const router = useRouter();

  const { y: currentYScroll } = useWindowScroll();
  const scrollHeight = 10;

  useEffect(() => {
    console.log("is scrolling", currentYScroll);
    if (currentYScroll > scrollHeight) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  }, [currentYScroll]);

  return (
    <header
      className="w-full border-b-2
        border-indigo-300 bg-slate-800
       px-4 py-2 text-slate-50 shadow"
    >
      <nav className="flex w-full items-center justify-between gap-4">
        {/* Mobile Navigation */}
        <div className="flex items-center justify-between gap-2 md:hidden">
          <Icons.HiMenu
            className="_hover-settings h-5 w-5"
            onClick={props.onOpenDrawer}
          />
          <span className="font-bold tracking-wider md:hidden">KBMS</span>
        </div>
        {/* The Brand Logo Or Mark */}
        {router.route === "/" ? (
          <Link
            href="/"
            passHref
            className="nav-left flex flex-1 items-center gap-2"
          >
            <Icons.HiShieldCheck className="hidden h-6 w-6 md:flex" />
            <span className="hidden font-bold tracking-wider md:flex md:text-lg">
              KBMS
            </span>
          </Link>
        ) : (
          <BackButton />
        )}
        {/* Desktop Navigation */}
        <section className="hidden flex-auto items-center justify-end gap-24 md:flex">
          {/* <div className="nav-middle flex">
            <SearchBox placeholder="search..." />
          </div> */}
          <div className="nav-right flex items-center justify-between gap-2">
            <Link
              href="/"
              passHref
              className="_hover-settings flex items-center justify-center gap-2 rounded-lg bg-slate-700 px-2 py-1 hover:text-indigo-300"
            >
              <Icons.HiHome className="h-5 w-5" />
              <span className="flex">Home</span>
            </Link>
            <Link
              href="/manage-banks"
              passHref
              className="_hover-settings flex items-center justify-center gap-2 rounded-lg bg-slate-700 px-2 py-1 text-green-300 hover:text-indigo-300"
            >
              <Icons.HiLibrary className="h-5 w-5" />
              <span className="flex">Manage Banks</span>
            </Link>
            <Link
              href="/my-account"
              passHref
              className="_hover-settings flex items-center justify-center gap-2 rounded-lg bg-slate-700 px-2 py-1 text-amber-300 hover:text-indigo-300"
            >
              <Icons.HiUser className="h-5 w-5" />
              <span className="flex">My Account</span>
            </Link>
            <Link
              href="/manage-officers"
              passHref
              className="_hover-settings flex items-center justify-center gap-2 rounded-lg bg-slate-700 px-2 py-1 text-indigo-300 hover:text-indigo-300"
            >
              <Icons.HiUsers className="h-5 w-5" />
              <span className="flex">Manage Officers</span>
            </Link>
          </div>
        </section>
        {/* The Notification Control */}
        <Notification />
      </nav>
    </header>
  );
};

export default AppBar;
