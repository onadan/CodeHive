import { AiOutlineGithub } from "react-icons/ai";
import { appInfo } from "../data/info";
import ArrowIcon from "../assets/arrow-icon";

export default function Home() {
  return (
    <div className="overflow-x-hidden flex flex-col justify-center items-center w-full h-screen overflow-y-auto">
      <div className="max-w-[1200px] w-full py-10 h-full px-4 ">
        <main className="py-10 flex flex-col items-center justify-center text-white h-full overflow-x-hidden shrink-0">
          <header className=" text-center max-w-[480px] md:max-w-[576px]  text-gray-300">
            <p className="text-primary text-5xl sm:text-6xl font-semibold py-3">
              {appInfo.name}
            </p>
            <p className="text-lg sm:text-2xl">
              A place to store and access your Snippets anytime, anywhere.
            </p>
          </header>

          <button className="shrink-0 mt-10 mb-4 bg-white text-black font-medium h-[48px] min-w-[100px] px-6 rounded-lg flex items-center justify-center gap-2">
            <AiOutlineGithub />
            <p>Sign In with Github</p>
          </button>

          {/* get started with svg doodles */}
          <div className="flex flex-col justify-center items-center gap-3 text-xs">
            <ArrowIcon />
            <p className="opacity-40">Get Started</p>
          </div>
        </main>
      </div>
      {/* made by me */}
      <div>Made by onadan</div>
    </div>
  );
}
