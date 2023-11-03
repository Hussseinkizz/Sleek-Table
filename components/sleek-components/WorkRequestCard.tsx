import Image from "next/image";
import sampleAvatar from "../public/assets/me.jpg";

interface Props {
  id: string;
  email: string;
  image: any;
  password: string;
  bailiff_name: string;
  phone_number: string;
  tin_number: string;
  company_doc_url: string;
  trading_license_image_url: string;
  highcourt_license_image_url: string;
  status: string;
  submitted: string;
  bio: string;
  onOpenDocPrviews: () => void;
}

const WorkRequestCard = (props: Props) => {
  let request = props;

  return (
    <div className="cursor-pointer rounded-lg bg-white p-6 shadow-lg hover:shadow-md hover:ring-1 hover:ring-gray-200">
      <div className="mb-4 flex flex-col items-start justify-center gap-2 rounded-r-lg p-2 shadow">
        <Image
          className="--w-32 mr-4 h-48 w-full rounded-lg"
          src={request.image}
          alt="User Profile"
        />
        <div>
          <h2 className="text-lg font-bold">{request.bailiff_name}</h2>
          <p className="text-gray-500">Contact: {request.phone_number}</p>
        </div>
      </div>
      <div className="mb-4">
        <p>
          <span className="font-medium">TIN Number:</span> {request.tin_number}
        </p>
      </div>
      <p className="text-gray-600">{request.bio}</p>
      <div className="mt-6 flex flex-col items-center justify-between gap-2">
        <button
          className="flex w-full flex-1 items-center justify-center gap-2 rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          onClick={props.onOpenDocPrviews}
        >
          View bailiff Documents
        </button>
        <div className="flex w-full flex-1 items-center justify-center gap-2">
          <button className=" mr-2 flex w-full flex-1 items-center justify-center gap-2 rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600">
            Reject
          </button>
          <button className=" flex w-full flex-1 items-center justify-center gap-2 rounded-md bg-green-500 px-4 py-2 text-white hover:bg-green-600">
            Accept
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkRequestCard;
