import Head from "next/head";
import { JSXElement } from "utils/UI_types";
import AppBar from "./AppBar-old";
import MobileDrawer from "./MobileDrawer";
import { useStore } from "react-hands-v2";

const Layout = ({ children }: JSXElement) => {
  const [state, dispatch] = useStore();

  return (
    <>
      <Head>
        <title>KBMS - Bailiff</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <section className="--bg-svg-pattern relative min-h-screen w-full bg-white text-slate-800 transition ease-linear">
        {/* The App Bar */}
        <AppBar onOpenDrawer={() => dispatch({ type: "openDrawer" })} />
        {/* The Dynamic Page Content */}
        <main
          className="--py-4 --px-4 --pb-40 grid h-screen min-h-screen w-full place-items-center overflow-y-auto"
          onClick={() => dispatch({ type: "closeNotifications" })}
        >
          {children}
        </main>
        {/* The Mobile App Drawer */}
        {state?.drawerOpen && (
          <MobileDrawer
            isOpen={state?.drawerOpen}
            onClose={() => dispatch({ type: "closeDrawer" })}
          />
        )}
      </section>
    </>
  );
};

export default Layout;
