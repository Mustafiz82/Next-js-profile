import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function Text({ title, post, duration, icon }) {
  return (
    <div
      className={`text-[13px] py-1 px-3 bg-[#7367F029] rounded-md mb-3 ${
        icon && "flex justify-between py-2"
      }`}
    >
      <div>
        <p>{title}</p>
        <p>{post}</p>
        <span>{duration}</span>
      </div>
      {icon && (
        <div className="flex gap-6 text-[19px] text-[#808390] pr-2">
          <button>
            <FaRegEdit />
          </button>
          <button>
            <RiDeleteBin6Line />
          </button>
        </div>
      )}
    </div>
  );
}
