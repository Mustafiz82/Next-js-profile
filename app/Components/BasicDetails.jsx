import React from 'react';
import { FaLinkedin } from "react-icons/fa";

const BasicDetails = () => {
    return (
        <div className='p-2'>

            <div className="flex justify-between gap-5">
                <div className='flex-1'>
                    <h1 className='font-medium'>First Name </h1>
                    <input type=" text" className='input w-full  input-bordered rounded-md ' placeholder='First Name' />
                </div>
                <div className='flex-1'>
                    <h1 className='font-medium'>Last Name </h1>
                    <input type=" text" className='input w-full  input-bordered rounded-md ' placeholder='First Name' />
                </div>
            </div>


            <div>
                <h1 className='font-medium'>About</h1>
                <textarea name="" className='textarea textarea-bordered w-full resize-none h-24' id=""></textarea>

            </div>
            <div>
                <h1 className='font-medium'>Social Account Link </h1>
                <div className="border p-5">
                    <div className='p-5 flex gap-5 bg-[#E9E7FC] rounded-md'>
                        <FaLinkedin className='text-[#0075B1] text-xl'></FaLinkedin>
                        <p className='text-primary'>Linkedin</p>
                    </div>

                    <button>
                         
                    </button>
                </div>

            </div>

        </div>
    );
};

export default BasicDetails;