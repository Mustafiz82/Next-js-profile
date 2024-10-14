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

          <ul>
            <li>
              <span className="hover:bg-primary hover:text-white">My Agenda</span>
            </li>
            <li>
              <span className="hover:bg-primary hover:text-white">My Profile</span>
            </li>
          </ul>
        </li>
      </ul>
  );
}
