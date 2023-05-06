import { HiSearch } from "react-icons/hi";
import Content from "../layouts/content";
import Header from "../layouts/header";
import { MdOutlineNoteAdd } from "react-icons/md";

export default function Workspace() {
  return (
    <>
      <Header />
      <Content>
        {/* <div className="text-white text-2xl pb-5">Welcome,</div> */}
        <div className="h-[40px] flex justify-between gap-2">
          <input
            type="text"
            className="w-full h-full bg-dark rounded-lg px-4 text-white outline-none focus:outline-primary"
            placeholder="Find a snip..."
          />
          <button className="shrink-0 flex justify-center items-center gap-1 bg-primary rounded-lg text-black px-4">
            <MdOutlineNoteAdd />
            {/* <p>yesy</p> */}
            <p>New</p>
          </button>
        </div>

        <div className="mb-10"></div>

        {/* Card component */}
        <div className="bg-dark h-[300px] w-[300px] rounded-lg text-white px-4 flex flex-col justify-between py-2 relative">
          <div className="flex justify-between items-center h-12 gap-2 w-full">
            <p className="text-lg font-semibold hover:underline text-gray-200 py-2 truncate">
              Bug Fix
            </p>
            <div className="absolute -top-4 -right-3  bg-primary py-1 px-2 rounded-lg flex justify-center items-center shrink-0">
              <p className="text-black text-xs">Lua</p>
            </div>
          </div>
          <div className="text-gray-200 h-[250px] overflow-hidden">
            <p className="text-gray-300">
              Fix for "Rendered less hooks than previous render"
            </p>
          </div>
          <div className="text-xs text-gray-400 py-2 shrink-0 flex justify-between">
            <p>Created 00:00 Mon Jan 1 2000</p>
            <p>44 Lns</p>
          </div>
        </div>
      </Content>

      {/* Code Editor */}
    </>
  );
}
