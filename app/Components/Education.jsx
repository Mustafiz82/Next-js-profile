import React from "react";
import { IoMdAdd } from "react-icons/io";
import Text from "./Text";
import Button from "./Button";

const Education = () => {
  return (
    <div>
      <div>
        <h3 className="text-[15px] font-semibold">Education</h3>

        <div className="border p-3 rounded-md">

          <div className="mb-14">
            <Text
              title="Dhaka University of Engineering and Technology"
              post="Computer Science and Engineering Bachelor of Engineering - BE"
              duration="2016 - 2021"
              icon={true}
            />

          </div>

          <Button text="Add Education" icon={IoMdAdd} />
        </div>

        <div className="flex justify-end mt-10">
          <Button text="Save" />
        </div>
      </div>
    </div>
  );
};

export default Education;
