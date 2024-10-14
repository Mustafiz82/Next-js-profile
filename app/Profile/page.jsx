import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegEdit , FaLinkedinIn } from "react-icons/fa";

const Profile = () => {
  return (
    <div>
      {/* top section */}
      <div className="bg-white rounded-md p-5 mb-5">
        <h3 className="text-lg">My Profile</h3>
      </div>

      {/* profile contnet */}
      <div className="bg-white rounded-md px-6 py-4">
        {/* top */}
        <div className="h-[175px] border rounded-md flex justify-between p-2 mb-5">
          <div className="flex items-center gap-5 px-10">
            <Image
              width={120}
              height={120}
              src="/images/avatar-2.png"
              alt="avatar-2.png"
              className="rounded-full"
            />
            <div>
              <h3 className="text-[22px]">Punam Chowdhury</h3>
              <span className="text-lg">Software Programmer</span>
            </div>
          </div>

          <Link href="/Profile/Edit" className="w-[25px] h-[25px] bg-primary text-white rounded-md flex items-center">
            <FaRegEdit className="m-auto mt-1" />
          </Link>
        </div>

        {/* affiliation */}
        <div className="mb-5">
          <h3 className="text-[15px]">Affiliation</h3>

          <div className="border rounded-md p-2">
            <div className="text-[13px] py-1 px-3 bg-[#7367F029] rounded-md mb-3">
              <p>Bangladesh Research & Education Network (BdREN) · Full-time</p>
              <p>Software Programmer</p>
              <span>2019-Present</span>
            </div>
            <div className="text-[13px] py-1 px-3 bg-[#7367F029] rounded-md">
              <p>Bangladesh Research & Education Network (BdREN) · Full-time</p>
              <p>Software Programmer</p>
              <span>2019-Present</span>
            </div>
          </div>
        </div>

        {/* education */}
        <div className="mb-5">
          <h3 className="text-[15px]">Education</h3>

          <div className="border rounded-md p-2">
            <div className="text-[13px] py-1 px-3 bg-[#7367F029] rounded-md mb-3">
              <p>Bangladesh Research & Education Network (BdREN) · Full-time</p>
              <p>Software Programmer</p>
              <span>2019-Present</span>
            </div>
            <div className="text-[13px] py-1 px-3 bg-[#7367F029] rounded-md">
              <p>Bangladesh Research & Education Network (BdREN) · Full-time</p>
              <p>Software Programmer</p>
              <span>2019-Present</span>
            </div>
          </div>
        </div>

        {/* about */}
        <div className="mb-5">
          <h3 className="text-[15px]">About</h3>

          <div className="border rounded-md p-2">
            <textarea
              placeholder="Bio"
              className="outline-none w-full h-[126px] resize-none"
            ></textarea>
          </div>
        </div>

        {/* social */}
        <div className="mb-5">
          <h3 className="text-[15px]">Social account links</h3>

          <div className="border rounded-md p-4">
            <ul>
              <li>
                <Link href="/" className="bg-[#7367F029] flex items-center py-2 px-3 rounded-md gap-8">
                  <FaLinkedinIn className="bg-[#0075b1] text-white p-[2px] rounded-sm" />
                  <p className="text-primary text-[13px]">Linkedin</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
