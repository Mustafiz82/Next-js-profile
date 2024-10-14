import React from "react";
import { IoMdAdd } from "react-icons/io";

const Others = () => {
  return (
    <div>
      <div className="border rounded-md text-center py-4 mb-6">
        <span className="text-[15px] font-semibold inline-block mb-1">Intrests</span>
        <p className="text-sm mb-2">You currently don't have any interests added</p>

        <button className="flex items-center px-6 py-2 rounded-md border border-primary gap-2 justify-center text-[15px] text-primary mx-auto ">
          <IoMdAdd className="text-lg" />
          Interests
        </button>
      </div>

      <div className="border rounded-md text-center py-4">
        <span className="text-[15px] font-semibold inline-block mb-1">Intrests</span>
        <p className="text-sm mb-2">You currently don't have any interests added</p>

        <button className="flex items-center px-6 py-2 rounded-md border border-primary gap-2 justify-center text-[15px] text-primary mx-auto ">
          <IoMdAdd className="text-lg" />
          Resume
        </button>
      </div>
    </div>
  );
};

export default Others;
