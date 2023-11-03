import Image from "next/image";
import { useState } from "react";
import * as Icons from "react-icons/hi";

interface Props {
  title: string;
  imageUrl: any; // should be string in production
  onImageSelection?: (image: any) => void;
}

const AttachmentViewWidget = (props: Props) => {
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (event: any) => {
    const selectedImage = event?.target?.files[0];
    if (selectedImage) {
      releaseImageMemory();
      const imageUrl = URL.createObjectURL(selectedImage);
      setImage(imageUrl);

      // pass image up if prop true
      if (props.onImageSelection) {
        props.onImageSelection(selectedImage);
      }
    }
  };

  const releaseImageMemory = () => {
    if (image) {
      URL.revokeObjectURL(image);
      setImage(null);
    }
  };

  return (
    <div className="flex w-full flex-col items-start justify-between gap-4 md:w-1/2">
      <div className="flex w-full flex-col items-center justify-between gap-4 md:flex-row">
        <h2 className="font-semibold capitalize">{props.title} :</h2>
        {/* The Actions */}
        {props.imageUrl ? (
          <div className="--w-full hidden items-center justify-between gap-4 md:flex">
            <button
              className="_hover-settings flex items-center justify-between gap-2 rounded-lg bg-indigo-50 px-2 py-1 text-indigo-500 ring-1 ring-slate-200 hover:bg-indigo-100 hover:text-indigo-600"
              onClick={() => console.log("foo")}
            >
              <Icons.HiEye className="h-5 w-5" />
              <span className="flex">View</span>
            </button>
            <button
              className="_hover-settings flex items-center justify-between gap-2 rounded-lg bg-green-50 px-2 py-1 text-green-500 ring-1 ring-slate-200 hover:bg-green-100 hover:text-green-600"
              onClick={() => console.log("replace photo, toggle edit")}
            >
              <Icons.HiRefresh className="h-5 w-5" />
              <span className="flex">Replace Photo</span>
            </button>
            <button
              className="_hover-settings flex items-center justify-between gap-2 rounded-lg bg-red-50 px-2 py-1 text-red-500 ring-1 ring-slate-200 hover:bg-red-100 hover:text-red-600"
              onClick={() => console.log("delete photo")}
            >
              <Icons.HiTrash className="h-5 w-5" />
              <span className="flex">Delete Photo</span>
            </button>
          </div>
        ) : (
          <label
            className="_hover-settings flex items-center justify-between gap-2 rounded-lg bg-indigo-50 px-2 py-1 text-indigo-500 ring-1 ring-slate-200 hover:bg-indigo-100 hover:text-indigo-600"
            htmlFor="image-file-viewer"
          >
            <div className="flex items-center justify-between gap-4">
              <Icons.HiArchive className="h-5 w-5" />
              <span className="flex text-sm md:text-base">
                Click Here To Upload!
              </span>
            </div>
            <input
              id="image-file-viewer"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
        )}
      </div>
      {props.imageUrl && (
        <div
          className="group relative flex w-full transition ease-linear active:scale-90"
          onClick={() => console.log("show large image")}
        >
          <Image
            className="--group-hover:blur-md flex w-full rounded ring-1 ring-indigo-100 transition ease-linear hover:opacity-60 hover:grayscale"
            src={props.imageUrl}
            alt={`${props.title} photo`}
          />
        </div>
      )}
    </div>
  );
};

export default AttachmentViewWidget;
