import React from "react";
import { IoMdAdd } from "react-icons/io";
import Text from "./Text";
import Button from "./Button";

const Affiliation = () => {
  return (
    <div>
      <h3 className="text-[15px] font-semibold">Affiliation</h3>

      <div className="border p-3 rounded-md">
        <div className="mb-14">
        <Text
          title="Bangladesh Research & Education Network (BdREN) · Full-time"
          post="Software Programmer"
          duration="2019-Present"
          icon={true}
        />
        </div>

        <Button text="Add Affiliation" icon={IoMdAdd} />
      </div>

      <div className="flex justify-end mt-10">
        <Button text="Save" />
      </div>
    </div>
  );
};

export default Affiliation;
