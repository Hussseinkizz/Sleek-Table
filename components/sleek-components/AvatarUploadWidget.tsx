import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaUserTie } from "react-icons/fa";

interface Props {
  onImageSelection?: (image: any) => void;
  intialImage?: string | any;
  isPlaceholder?: boolean;
}

const AvatarUploadWidget = (props: Props) => {
  const [image, setImage] = useState<string | null>(null);

  let imageRef = useRef<any>();

  const handleImageChange = (event: any) => {
    const selectedImage = event?.target?.files[0];
    if (selectedImage) {
      releaseImageMemory();
      const imageUrl = URL.createObjectURL(selectedImage);
      setImage(imageUrl);
      props.onImageSelection!(selectedImage);
    }
  };

  const releaseImageMemory = () => {
    if (image) {
      URL.revokeObjectURL(image);
      setImage(null);
    }
  };

  useEffect(() => {
    if (props.intialImage) {
      setImage(props.intialImage);
    }
  }, [props.intialImage]);

  // allow widget to act as placeholder
  if (props.isPlaceholder) {
    return (
      <div className="relative grid h-32 w-32 place-items-center overflow-hidden rounded-full border border-slate-300 bg-slate-100 p-8 ">
        <span className="flex h-full w-full items-center justify-center">
          <FaUserTie className="h-16 w-16 text-slate-300 " />
        </span>
        <span className="text-indiog-500 absolute -bottom-2 left-0 right-0 z-20 flex w-full bg-indigo-100 py-2 text-center">
          <p className="mx-auto mb-2 flex text-sm text-slate-400 ">no photo</p>
        </span>
      </div>
    );
  }

  return (
    <section className="flex">
      {image ? (
        <span
          className="group relative flex h-40 w-40 transition ease-linear active:scale-90"
          onClick={() => imageRef?.current.click()}
        >
          <Image
            className="--group-hover:blur-md flex w-full rounded-full ring-1 ring-indigo-100 transition ease-linear group-hover:opacity-95 group-hover:grayscale"
            src={image}
            width={400}
            height={500}
            alt="user photo"
          />
          {/* <span className="absolute z-20 grid h-40 w-40 place-items-center">
            <HiPencil className="h-16 w-16 text-slate-300/75 group-hover:text-slate-400/75" />
          </span> */}
          <input
            ref={imageRef}
            id="image-file-picker"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />
        </span>
      ) : (
        <>
          <div
            className="group relative grid h-32 w-32 place-items-center overflow-hidden rounded-full border border-slate-300 bg-slate-100 p-8 transition ease-linear hover:border-slate-400 active:scale-95"
            onClick={() => imageRef?.current.click()}
          >
            <span className="flex">
              <FaUserTie className="h-16 w-16 text-slate-300 group-hover:text-slate-400" />
            </span>
            <span className="text-indiog-500 absolute -bottom-2 left-0 right-0 z-20 flex w-full bg-indigo-100 py-2 text-center">
              <p className="mx-auto mb-2 flex text-sm text-slate-400 group-hover:text-slate-500">
                upload
              </p>
            </span>
          </div>
          <input
            ref={imageRef}
            id="image-file-picker"
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />
        </>
      )}
    </section>
  );
};

export default AvatarUploadWidget;
