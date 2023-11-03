import { useEffect, useState } from "react";
import Loader from "./Loader";

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate app loading with a setTimeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Adjust the delay as needed

    return () => clearTimeout(timer); // Clear the timeout when the component unmounts
  }, []);

  if (isLoading) {
    return (
      <div className="--bg-opacity-75 fixed top-0 left-0 z-[1000] grid h-screen w-screen place-items-center bg-slate-50 bg-gradient-to-t from-rose-100 to-teal-100 text-indigo-800">
        <div className="flex h-full w-full animate-pulse flex-col items-center justify-center text-6xl font-bold text-indigo-800">
          <h1>KBMS</h1>
          {/* Add your loader component here */}
          <Loader />
        </div>
      </div>
    );
  }

  // Render the rest of your app once loading is done
  return null;
};

export default LoadingScreen;
