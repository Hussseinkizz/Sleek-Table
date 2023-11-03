import { useRouter } from "next/router";
import { useEffect } from "react";
import * as Icons from "react-icons/hi";

interface Props {
  backPageLink?: string;
}

const BackButton = (props: Props) => {
  const router = useRouter();

  function handleClick() {
    props.backPageLink ? router.push(`/${props.backPageLink}`) : router.back();
    console.log(router.asPath, router);
  }

  function handlePopState(): boolean {
    if (!router.asPath.startsWith("/")) {
      router.push("/");
      return false;
    }
    return true;
  }

  useEffect(() => {
    router.beforePopState(handlePopState);
  });

  return (
    <button
      className="_hover-settings hidden items-center justify-center rounded-lg bg-red-100 px-2 py-1 pr-3 font-semibold text-red-400 hover:text-red-500 md:flex"
      onClick={handleClick}
    >
      <Icons.HiChevronLeft className="h-5 w-5" />
      <span className="flex">Back</span>
    </button>
  );
};

export default BackButton;
