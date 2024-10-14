import React from "react";
import { IoMdAdd } from "react-icons/io";
import Button from "./Button";

const Others = () => {
  return (
    <div>
      <div className="border rounded-md text-center py-4 mb-6">
        <span className="text-[15px] font-semibold inline-block mb-1">Intrests</span>
        <p className="text-sm mb-2">You currently don't have any interests added</p>

        <Button text="Interests" icon={IoMdAdd} style="mx-auto" />
      </div>

      <div className="border rounded-md text-center py-4">
        <span className="text-[15px] font-semibold inline-block mb-1">Intrests</span>
        <p className="text-sm mb-2">You currently don't have any interests added</p>

        <Button text="Resume" icon={IoMdAdd} style="mx-auto" />
      </div>
    </div>
  );
};

export default Others;
