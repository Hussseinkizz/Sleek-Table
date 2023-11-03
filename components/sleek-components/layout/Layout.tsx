import Head from "next/head";
import { useStore } from "../../react-hands-v2";
import { JSXElement } from "utils/UI_types";
import SideBar from "./SideBar";
import AppBar from "./AppBar";

const Layout = ({ children }: JSXElement) => {
  const [state, dispatch] = useStore();

  return (
    <>
      <Head>
        <title>KBMS - Bank</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <section className="relative min-h-screen w-full bg-gray-100 text-gray-800">
        {/* The Sidebar */}
        <SideBar
          isOpen={state.drawerOpen}
          onClose={() => dispatch({ action: "closeDrawer" })}
        />
        <main
          className={`h-screen min-h-screen overflow-y-auto ${
            state.drawerOpen ? "ml-52" : "w-full"
          }`}
        >
          {/* The Header */}
          <AppBar
            onToggleSideBar={() => dispatch({ action: "toggleDrawer" })}
          />
          {/* The Main View */}
          <section className="w-full p-4">
            <div className="min-h-full w-full rounded-md bg-white pb-8 shadow-lg">
              {children}
            </div>
          </section>
        </main>
      </section>
    </>
  );
};

export default Layout;
