import { HiOutlineInformationCircle } from "react-icons/hi";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-white">
      <div className="flex gap-4 items-center text-lg  mt-4">
        {error.status === 404 ? (
          <>
            <p>{error.status}</p>
            <div className="h-10 w-[1px] bg-white"></div>
            <p>{error.statusText || error.message}</p>
          </>
        ) : (
          <>
            <HiOutlineInformationCircle size={"3em"} color={"#0E0F16"} />
            <p className="text-3xl text-brandSecondary">Unknown Error!</p>
          </>
        )}
      </div>
    </div>
  );
}
