import React from "react";
import { IoMdAdd } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const Affiliation = () => {
  return (
    <div>
      <h3 className="text-[15px] font-semibold">Affiliation</h3>

      <div className="border p-3 rounded-md">
        <div className="text-[13px] py-2 px-3 bg-[#7367F029] rounded-md mb-14 flex justify-between">
          <div>
            <p>Bangladesh Research & Education Network (BdREN) · Full-time</p>
            <p>Software Programmer</p>
            <span>2019-Present</span>
          </div>
          <div className="flex gap-6 text-[19px] text-[#808390] pr-2">
            <button><FaRegEdit /></button>
            <button><RiDeleteBin6Line /></button>
          </div>
        </div>

        <button className="flex items-center px-6 py-2 rounded-md border border-primary gap-2 justify-center text-[15px] text-primary">
          <IoMdAdd className="text-lg" />
          Add Affiliation
        </button>
      </div>

      <div className="flex justify-end mt-10">
        <button className="bg-primary text-white rounded-md py-2 px-8">Save</button>
      </div>
    </div>
  );
};

export default Affiliation;
