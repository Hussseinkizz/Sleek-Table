import { useState } from "react";
import * as Icons from "react-icons/hi";

interface Props {
  isEditMode: boolean;
  errorMessage: string;
  defaultValue: any;
  isInputType: string;
  label: string;
  hasIcon: boolean;
}

const SmartField = (props: Props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <section className="flex w-full flex-col items-center justify-between gap-4">
      {props.isEditMode ? (
        <div className="flex w-full items-center justify-between gap-4">
          <span className="flex font-semibold">{props.label}</span>
          <span className="flex">{props.defaultValue}</span>
        </div>
      ) : (
        <div>
          <label className="font-medium">{props.label}</label>
          <div className="relative flex">
            <input
              type="text"
              {...props}
              className={`mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600 ${
                props.errorMessage ? "border-red-500" : "border-gray-300"
              }`}
              placeholder={props.defaultValue ? props.defaultValue : ""}
            />
            {props.hasIcon && (
              <div className="absolute right-2 top-5 flex pl-4">
                {isPasswordVisible ? (
                  <Icons.HiEye
                    className="h-5 w-5 text-slate-400 transition ease-linear"
                    onClick={() => setIsPasswordVisible(false)}
                  />
                ) : (
                  <Icons.HiEyeOff
                    className="h-5 w-5 text-slate-400 transition ease-linear"
                    onClick={() => setIsPasswordVisible(true)}
                  />
                )}
              </div>
            )}
          </div>
          {props.errorMessage && (
            <p className="mt-2 text-red-500">{props.errorMessage}</p>
          )}
        </div>
      )}
    </section>
  );
};

export default SmartField;
