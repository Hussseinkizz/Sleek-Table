import { $Bailiff } from "data/data_types";
import * as Icons from "react-icons/hi";
import BailiffSchema from "utils/schemas";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import AvatarUploadWidget from "./AvatarUploadWidget";
import { _getLocalImageUrl } from "utils/utilities";

interface Props {
  accountDetials: $Bailiff;
  onDetailsChange: (details: $Bailiff) => void;
  onCancel: () => void;
}

const AccountEditForm = (props: Props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [newUserImage, setNewUserImage] = useState(null);
  const [emailError, setEmailError] = useState("");
  const [newEmail, setNewEmail] = useState("");

  // intialize react hook form stuff
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(BailiffSchema),
  });

  const handleForm = (data: any) => {
    if (data.email !== "" && !isValidEmail(data.email)) {
      setEmailError("Invalid email!");
    }
    // Note - In production we send a base64 string instead!
    let newImage = newUserImage
      ? _getLocalImageUrl(newUserImage)
      : props.accountDetials.bailiff_image_url;

    if (!emailError) {
      let newData = {
        ...props.accountDetials,
        ...data,
        bailiff_image_url: newImage,
        email: newEmail ? newEmail : props.accountDetials.email,
      };
      // Todo: Perform form submission logic, remove logs in production!
      console.log("form data", data);
      // pass edited data up
      props.onDetailsChange(newData);
    }
  };

  const handleCancel = () => {
    props.onCancel();
  };

  const handleEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (value && !isValidEmail(value)) {
      setEmailError("Invalid email!");
    } else {
      setEmailError("");
    }
  };

  const isValidEmail = (email: string) => {
    // Perform your email validation logic here
    // Return true if the email is valid, false otherwise
    // You can use a regular expression or any other email validation method
    // Example:
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <section className="_default-surface flex w-full flex-col items-center justify-between gap-4 rounded-md">
      {/* The Upper Section */}
      <div className="flex w-full flex-col items-center justify-start gap-4 md:flex-row">
        {/* The Avatar */}
        <div className="--w-full flex items-center justify-between gap-4">
          <AvatarUploadWidget
            intialImage={props.accountDetials?.bailiff_image_url ?? null}
            onImageSelection={(newImage) => setNewUserImage(newImage)}
          />
        </div>
        {/* The Action Buttons */}
        <div className="--w-1/2 mt-4 flex items-center justify-center gap-4 md:mt-0">
          <button
            className="_hover-settings --hover:bg-indigo-50 --text-indigo-400 group flex items-center justify-center gap-4 rounded-lg bg-indigo-500 p-2 text-indigo-100 ring-1 ring-indigo-300 hover:text-indigo-50 hover:shadow"
            onClick={handleSubmit(handleForm)}
          >
            <Icons.HiThumbUp className="_icon-interaction h-5 w-5" />
            <span className="flex">Save Profile</span>
          </button>
          <button
            className="_hover-settings --hover:bg-indigo-50 --hover:shadow-md group flex items-center justify-center gap-2 rounded-lg bg-red-100 p-2 text-red-400 ring-1 ring-red-300 hover:text-red-500"
            onClick={handleCancel}
          >
            <Icons.HiXCircle className="h-5 w-5" />
            <span className="flex">cancel</span>
          </button>
        </div>
      </div>
      {/* The Details Form */}
      <div className="felx w-full items-center justify-center gap-4">
        <form onSubmit={handleSubmit(handleForm)} className="mt-8 space-y-5">
          <div>
            <label className="font-medium">Full Names:</label>
            <input
              type="text"
              defaultValue={props.accountDetials.bailiff_name}
              {...register("bailiff_name")}
              className={`mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600 ${
                errors.bailiff_name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.bailiff_name && (
              <p className="mt-2 text-red-500">
                {errors?.bailiff_name?.message?.toString()}
              </p>
            )}
          </div>

          <div>
            <label className="font-medium">Phone:</label>
            <input
              type="tel"
              defaultValue={props.accountDetials.phone_number}
              {...register("phone_number")}
              className={`mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600 ${
                errors.phone_number ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.phone_number && (
              <p className="mt-2 text-red-500">
                {errors?.phone_number?.message?.toString()}
              </p>
            )}
          </div>
          <div>
            <label className="font-medium">Password:</label>
            <div className="relative flex">
              <input
                defaultValue={props.accountDetials.password}
                type={isPasswordVisible ? "text" : "password"}
                {...register("password")}
                className={`mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600 ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
              />
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
            </div>
            {errors.password && (
              <p className="mt-2 text-red-500">
                {errors?.password?.message?.toString()}
              </p>
            )}
          </div>
          <div>
            <label className="font-medium">Email:</label>
            <input
              type="email"
              onChange={(e) => setNewEmail(e.target.value)}
              defaultValue={props.accountDetials.email}
              name="email"
              onBlur={handleEmailBlur} // Add onBlur event handler
              className={`mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600 ${
                emailError ? "border-red-500" : "border-gray-300"
              }`}
            />
            {emailError && <p className="mt-2 text-red-500">{emailError}</p>}
          </div>
          <div>
            <label className="font-medium">Tin Number:</label>
            <input
              type="text"
              defaultValue={
                props.accountDetials.tin_number < 1
                  ? ""
                  : props.accountDetials.tin_number
              }
              {...register("tin_number")}
              className={`mt-2 w-full rounded-lg border bg-transparent px-3 py-2 text-gray-500 shadow-sm outline-none focus:border-indigo-600 ${
                errors.tin_number ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.tin_number && (
              <p className="mt-2 text-red-500">
                {errors?.tin_number?.message?.toString()}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default AccountEditForm;
