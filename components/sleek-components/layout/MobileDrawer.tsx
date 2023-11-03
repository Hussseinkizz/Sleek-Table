import * as Icons from "react-icons/hi";
import Link from "next/link";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const MobileDrawer = (props: Props) => {
  return (
    <section
      className="absolute left-0 right-0 top-0 bottom-0 z-50 flex min-h-screen w-full bg-black/25"
      onClick={props.onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`${
          props.isOpen
            ? "_slide-right-animation w-4/6 translate-x-0 bg-opacity-95"
            : "_slide-left-animation w-4/6 -translate-x-full bg-opacity-0"
        } left-0 top-0 flex h-full transform flex-col items-center justify-between gap-4 bg-slate-800 text-indigo-50 shadow  will-change-transform`}
      >
        {/* The Drawer Header */}
        <nav className="flex w-full items-center justify-between gap-4 bg-slate-800 px-4 py-2">
          <span className="font-bold tracking-wider">KBMS</span>
          <button className="flex items-center justify-between gap-2">
            <Icons.HiXCircle className="flex h-6 w-6" onClick={props.onClose} />
          </button>
        </nav>
        {/* The Drawer Body */}
        <div className="flex h-full w-full flex-col items-start justify-start gap-4 px-4 py-2">
          <Link
            href="/"
            passHref
            onClick={props.onClose}
            className="_hover-settings flex w-full items-center  justify-start gap-2 border-b border-slate-700 px-2 py-1 hover:text-indigo-300"
          >
            <Icons.HiHome className="h-5 w-5 text-indigo-400 group-hover:text-indigo-300" />
            <span className="flex group-hover:text-indigo-300">Home</span>
          </Link>
          <Link
            href="/manage-banks"
            passHref
            onClick={props.onClose}
            className="_hover-settings group flex w-full  items-center justify-start gap-2 border-b border-slate-700 px-2 py-1"
          >
            <Icons.HiLibrary className="h-5 w-5 text-green-400 group-hover:text-green-300" />
            <span className="flex group-hover:text-indigo-300">
              Manage Banks
            </span>
          </Link>
          <Link
            href="/my-account"
            passHref
            onClick={props.onClose}
            className="_hover-settings group flex w-full  items-center justify-start gap-2 border-b border-slate-700 px-2 py-1"
          >
            <Icons.HiUser className="h-5 w-5  text-amber-400 group-hover:text-amber-300" />
            <span className="flex group-hover:text-indigo-300">My Account</span>
          </Link>
          <Link
            href="/manage-officers"
            passHref
            onClick={props.onClose}
            className="_hover-settings --border-b --border-slate-700 group  flex w-full items-center justify-start gap-2 px-2 py-1"
          >
            <Icons.HiUsers className="h-5 w-5  text-fuchsia-400 group-hover:text-fuchsia-300" />
            <span className="flex group-hover:text-indigo-300">
              Manage Officers
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MobileDrawer;
