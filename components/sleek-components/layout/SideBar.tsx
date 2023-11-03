import Link from "next/link";
import * as Icons from "react-icons/hi";
import { SideBarLinks } from "data/UI_data";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const SideBar = (props: Props) => {
  const handleAction = (action: string) => {
    console.log(action);
  };

  return (
    <aside
      className={`fixed h-screen cursor-pointer bg-slate-900 py-2 px-4 text-white shadow-md transition-transform ease-linear ${
        props.isOpen ? "w-52 translate-x-0" : "w-0 -translate-x-full"
      }`}
    >
      {props.isOpen && (
        <div className="flex h-full w-full flex-col items-start justify-between gap-6">
          {/* Branding Area */}
          <div className="mb-2 flex w-full items-center justify-between gap-4">
            <Link href="/" passHref>
              <div className="flex items-center justify-start gap-2">
                <Icons.HiShieldCheck className="h-5 w-5" />
                <h1 className="text-lg font-bold">KBMS</h1>
              </div>
            </Link>
            <Icons.HiChevronDoubleLeft
              className="h-6 w-6 rounded-md border border-slate-700 bg-slate-800 p-1 text-blue-400 transition hover:text-blue-200 hover:shadow-sm"
              onClick={props.onClose}
            />
          </div>
          {/* The Sidebar Items */}
          <div className="flex w-full flex-col items-start justify-between gap-4">
            {SideBarLinks.map((link) => (
              <div
                key={link.title}
                className="mb-4 flex w-full flex-col items-start justify-center gap-2"
              >
                <h1 className="font-semibold uppercase text-gray-400">
                  {link.title}
                </h1>
                {link.links.map((item) => {
                  if ("route" in item) {
                    return (
                      <Link key={item.name} href={item.route} passHref>
                        <div className="group flex items-center justify-start gap-2">
                          {item.icon}
                          <span className="transition ease-linear group-hover:text-blue-400">
                            {item.name}
                          </span>
                        </div>
                      </Link>
                    );
                  } else {
                    return (
                      <div
                        key={item.name}
                        className="group flex items-center justify-start gap-2"
                        onClick={() => handleAction(item.action)}
                      >
                        {item.icon}
                        <span className="transition ease-linear group-hover:text-blue-400">
                          {item.name}
                        </span>
                      </div>
                    );
                  }
                })}
              </div>
            ))}
          </div>
          {/* A Vertical Spacer */}
          <div className="flex h-full w-full flex-1" />
          {/* The SideBar Action */}
          <button className="my-3 flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-l from-blue-400 via-indigo-500 to-blue-500 py-2 px-4 text-blue-100 shadow-sm transition ease-linear hover:text-blue-200 active:scale-95">
            <Icons.HiLockOpen className="h-5 w-5" />
            <h1 className="font-bold">Log Out</h1>
          </button>
        </div>
      )}
    </aside>
  );
};

export default SideBar;
