import { useState } from "react";

// todo: make click event work!

const Button = ({ children }: any) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button
      className={`text:sm tinDownOut relative flex w-full items-center justify-between rounded-3xl bg-gradient-to-r  from-rose-400 via-fuchsia-500 to-indigo-500 px-4 py-2 text-center transition duration-500 ease-linear hover:from-rose-500 hover:via-fuchsia-600 hover:to-indigo-600 hover:text-slate-100 hover:shadow hover:shadow-indigo-500 active:scale-90 sm:text-base ${
        isClicked && "tinDownOut"
      }`}
      onClick={() => setIsClicked(true)}
    >
      {children}
    </button>
  );
};

export default Button;
