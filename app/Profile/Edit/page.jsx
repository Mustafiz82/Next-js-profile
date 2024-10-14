"use client"
import Affiliation from '@/app/Components/Affiliation';
import BasicDetails from '@/app/Components/BasicDetails';
import Education from '@/app/Components/Education';
import Others from '@/app/Components/Others';
import Image from 'next/image';
import React, { useState } from 'react';
import { GoPeople } from "react-icons/go";

const Page = () => {

    const [activeTab, setActiveTab] = useState("basic-details")

    console.log(activeTab)
    return (
        <div className=' bg-white flex gap-5 2xl:gap-10 p-5 2xl:p-10 mx-auto'>

            <div className='border w-1/4 p-5 pr-10'>
                <div className='flex justify-center items-center'>
                    <div className=' relative '>
                        <Image src="/images/Group 71.png" width={100} height={100} ></Image>
                        <span className="p-2 bottom-3 absolute -right-5  bg-primary rounded-full "></span>
                    </div>
                </div>

                <div className=' mt-5 mb-10'>
                    <ul className='font-semibold space-y-5'>
                        <li className='flex gap-4 items-center' onClick={() => setActiveTab("basic-details")}>
                            <div className={ `${(activeTab ===  "basic-details" ) ? "bg-primary text-white" : "bg-base-200 text-primary"} rounded-lg p-2 `}>
                                <GoPeople className='text-xl' />
                            </div>
                            <div>
                                <h1 className='text-sm 2xl:text-base'>Basic Details</h1>
                                <p className='text-xs 2xl:text-sm text-black/60'> Name/Email/Date
                                </p>
                            </div>

                        </li>
                        <li className='flex gap-4 items-center' onClick={() => setActiveTab("Affiliation")}>
                            <div className={ `${(activeTab ===  "Affiliation" ) ? "bg-primary text-white" : "bg-base-200 text-primary"} rounded-lg p-2 `}>
                                <GoPeople className='text-xl' />
                            </div>
                            <div>
                                <h1 className='text-sm 2xl:text-base'>Affiliation</h1>
                                <p className='text-xs 2xl:text-sm text-black/60'> Affiliation Sitting
                                </p>
                            </div>

                        </li>
                        <li className='flex gap-4 items-center' onClick={() => setActiveTab("Education")}>
                            <div className={ `${(activeTab ===  "Education" ) ? "bg-primary text-white" : "bg-base-200 text-primary"} rounded-lg p-2 `}>
                                <GoPeople className='text-xl' />
                            </div>
                            <div>
                                <h1 className='text-sm 2xl:text-base'>Education</h1>
                                <p className='text-xs 2xl:text-sm text-black/60'> Education Details
                                </p>
                            </div>

                        </li>
                       
                        <li className='flex gap-4 items-center' onClick={() => setActiveTab("Others")}>
                            <div className={ `${(activeTab ===  "Others" ) ? "bg-primary text-white" : "bg-base-200 text-primary"} rounded-lg p-2 `}>
                                <GoPeople className='text-xl' />
                            </div>
                            <div>
                                <h1 className='text-sm 2xl:text-base'>Others</h1>
                                <p className='text-xs 2xl:text-sm text-black/60'>  Interests/Resume

                                </p>
                            </div>

                        </li>
                        
                    </ul>
                </div>
            </div>

            <div className='w-3/4'>
                {activeTab === "basic-details" && <BasicDetails></BasicDetails>}
                {activeTab === "Affiliation" && <Affiliation></Affiliation>}
                {activeTab === "Education" && <Education></Education>}
                {activeTab === "Others" && <Others></Others>}
            </div>
        </div>
    );
};

export default Page;