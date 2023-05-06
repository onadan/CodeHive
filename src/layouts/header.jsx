import { BiCodeAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { IoAddCircle } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="fixed w-full h-20 border-b border-dark flex justify-center bg-transparent backdrop-blur-sm">
      <div className="h-full max-w-[1280px] w-full flex justify-between items-center px-4">
        <Link to="/dashboard">
          <div className="text-primary flex gap-1 items-center text-3xl font-semibold">
            <BiCodeAlt />
            <p>Codehive</p>
          </div>
        </Link>
        <div className="text-white flex gap-2 items-center">
          <IoAddCircle className="text-primary" size={36} />
          <CgProfile size={36} />
          <div className="h-[36px] w-[36px] bg-dark rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
