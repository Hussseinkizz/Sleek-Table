import * as Icons from "react-icons/hi";
import CenteLogo from "../public/assets/centenaryLogo.png"; // Assuming you have the Centenary Bank logo file
import Image from "next/image";
import { _numberFormat } from "utils/utilities";

const UserProfile = () => {
  const handleEditProfile = () => {
    // do some
  };

  const profileData = {
    id: "6",
    bankName: "Centenary Bank",
    bailiff_rating: 4.3,
    bankNewRepliesCount: 20,
    bankTotalPortfolio: 2000000,
    banktotalRetrieved: 1000000,
    banktotalRemaining: 1000000,
    totalClients: 50,
    bankRejections: 18,
    colorCode: "blue",
    slogan: "Leading the way in financial inclusion",
    about:
      "Centenary Bank is a commercial bank in Uganda licensed by the Bank of Uganda, the national banking regulator.",
    bank_logo: CenteLogo,
  };

  return (
    <div className="container mx-auto my-8">
      <section className="flex w-full items-center justify-between gap-4 p-4">
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <Image
            className="mr-4 h-32 w-[350px] rounded-full"
            src={profileData.bank_logo}
            alt="Bank Logo"
          />
          <div className="flex w-full flex-col items-start justify-center gap-2 p-4">
            <h1 className="text-2xl font-bold">{profileData.bankName}</h1>
            <p className="text-gray-500">{profileData.slogan}</p>
          </div>
        </div>
        {/* The More Contnent */}
        <div className="flex w-full flex-col items-center justify-center gap-4 rounded-lg border bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-sky-400 to-indigo-900 p-4 text-white shadow-md">
          <h1 className="mt-8 text-2xl font-bold md:mt-16">
            Your Admin Details
          </h1>
          <div className="flex w-full items-center justify-between gap-4">
            <span className="flex font-semibold">Name:</span>
            <span className="flex">John Doe</span>
          </div>
          <div className="flex w-full items-center justify-between gap-4">
            <span className="flex font-semibold">Phone Contact:</span>
            <span className="flex">0704353301</span>
          </div>
          <div className="flex w-full items-center justify-between gap-4">
            <span className="flex font-semibold">Email:</span>
            <span className="flex">johndoe@gmail.com</span>
          </div>
          <div className="flex w-full items-center justify-between gap-4">
            <span className="flex font-semibold">Password:</span>
            <span className="flex">***********</span>
          </div>
          <button
            className="_hover-settings flex w-full items-center justify-center gap-2  rounded-lg bg-indigo-500 px-4 py-3 font-semibold text-indigo-50 hover:text-indigo-200"
            onClick={handleEditProfile}
          >
            <Icons.HiPencilAlt className="h-5 w-5" />
            <span className="flex">Edit Admin Details</span>
          </button>
        </div>
      </section>
      <div className="mb-8 grid grid-cols-2 gap-4 rounded-lg bg-white p-6 shadow-md">
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <h2 className="mb-4 text-xl font-bold text-blue-500">
            Bank Statistics
          </h2>
          <p className="flex w-full items-center justify-start gap-4">
            <span className="font-bold">Rating:</span>
            <span className="flex">{profileData.bailiff_rating}</span>
          </p>
          <p className="flex w-full items-center justify-start gap-4">
            <span className="font-bold">New Replies:</span>
            <span className="flex">{profileData.bankNewRepliesCount}</span>
          </p>
          <p className="flex w-full items-center justify-start gap-4">
            <span className="font-bold">Total Portfolio:</span>
            <span className="flex">
              {_numberFormat(profileData.bankTotalPortfolio)}
            </span>
          </p>
          <p className="flex w-full items-center justify-start gap-4">
            <span className="font-bold">Total Retrieved:</span>
            <span className="flex">
              {_numberFormat(profileData.banktotalRetrieved)}
            </span>
          </p>
          <p className="flex w-full items-center justify-start gap-4">
            <span className="font-bold">Total Remaining:</span>
            <span className="flex">
              {_numberFormat(profileData.banktotalRemaining)}
            </span>
          </p>
          <p className="flex w-full items-center justify-start gap-4">
            <span className="font-bold">Total Clients:</span>
            <span className="flex">{profileData.totalClients}</span>
          </p>
          <p className="flex w-full items-center justify-start gap-4">
            <span className="font-bold">Rejections:</span>
            <span className="flex">{profileData.bankRejections}</span>
          </p>
        </div>
        <div className="flex w-full flex-col items-start justify-start gap-4 text-start">
          <h2 className="text-lg font-bold">About</h2>
          <p>{profileData.about}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
