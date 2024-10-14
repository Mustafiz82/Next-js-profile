import React from 'react';
import { FaLinkedin } from "react-icons/fa";

const BasicDetails = () => {
    return (
        <div className='p-2 space-y-5'>

            <div className="flex justify-between gap-5">
                <div className='flex-1'>
                    <h1 className='font-semibold pb-1 text-sm 2xl:text-base'>First Name </h1>
                    <input type=" text" className='input w-full  input-bordered rounded-md ' placeholder='First Name' />
                </div>
                <div className='flex-1'>
                    <h1 className='font-semibold pb-1 text-sm 2xl:text-base'>Last Name </h1>
                    <input type=" text" className='input w-full  input-bordered rounded-md ' placeholder='First Name' />
                </div>
            </div>


            <div>
                <h1 className='font-semibold pb-1 text-sm 2xl:text-base'>About</h1>
                <textarea name="" className='textarea textarea-bordered w-full resize-none h-24' id=""></textarea>

            </div>
            <div>
                <h1 className='font-semibold pb-1 text-sm 2xl:text-base'>Social Account Link </h1>
                <div className="border p-5">
                    <div className='p-5 py-3 flex items-center gap-5 bg-[#E9E7FC] rounded-md'>
                        <FaLinkedin className='text-[#0075B1] text-xl'></FaLinkedin>
                        <p className='text-primary text-sm 2xl:text-base'>Linkedin</p>
                    </div>

                    <button className='btn hover:bg-primary  mt-4 btn-outline text-primary rounded-md '>
                        <span className='text-base 2xl:text-lg font-semibold'>+</span>
                        Add New Account 
                         
                    </button>
                </div>

            </div>

            <div className="flex justify-end">
                    <button className='btn btn-primary text-white bg-primary border-none font-semibold px-8 '>Save</button>
            </div>
        </div>
    );
};

export default BasicDetails;