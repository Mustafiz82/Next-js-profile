import { FaRegUserCircle } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Sidebar() {
  return (
      <ul className="bg-white w-[280px] rounded-md menu text-base-content min-h-full py-4">
        <li>
          <div className="bg-primary text-white hover:bg-primary">
            <FaRegUserCircle />
            <span>My Profile</span>
            <MdKeyboardArrowDown />
          </div>
        </li>
      </ul>
  );
}
