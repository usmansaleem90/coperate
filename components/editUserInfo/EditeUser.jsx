'use client'
import React, { useState } from 'react';
import DashboardWrapper from '../Dashboard/Dashboard-Wrapper';
import PersonalInformation from '@/app/settings/profileInfo/PersonalInformation';
import Adress from '@/app/settings/profileInfo/Adress';
import EditPersonalInfo from './EditPersonalInfo';
import EditAdress from './EditAdress';

const EditUser = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const handlePreviousStep = () => {
        setCurrentStep(currentStep - 1);
    };

    const steps = [
        null, // Placeholder for index 0, as indexing starts from 1
        <EditPersonalInfo key="EditPersonalInfo" />,
        <EditAdress key="EditAdress" />
    ];

    return (
        <DashboardWrapper
            title1={"Microsoft Corporate Details"}
            title2={"Dashboard - Corporates - Microsoft Corporate"}
            top={true}
        >
            <div className='py-4 px-6'>
                <div className=" flex sm:flex-row flex-col gap-x-2 px-4 bg-white" data-hs-stepper>
                    {/* Stepper Nav */}
                    <ul className='pt-4'>
                        {[1, 2].map(step => (
                            <React.Fragment key={step}>
                                <li className={`flex items-center gap-x-2 w-full whitespace-nowrap basis-0 flex-1 group`} data-hs-stepper-nav-item={`{"index": ${step}}`}>
                                    <span className="min-w-7 min-h-7 group flex flex-col items-start text-xs align-middle">
                                        <span className={`size-7 flex justify-center  ${currentStep > step ? 'bg-blue-400 text-white' : 'text-white'} ${currentStep === step ? 'bg-[#0D4C7B] text-[white]' : 'bg-gray-100 text-gray-800'} items-center flex-shrink-0 font-medium rounded-full `}>
                                            {currentStep > step ? (
                                                <svg className="flex-shrink-0 size-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                    <polyline points="20 6 9 17 4 12"></polyline>
                                                </svg>
                                            ) : (
                                                <span className="hs-stepper-success:hidden hs-stepper-completed:hidden">{step}</span>
                                            )}
                                        </span>
                                        <span className={`ms-2 text-sm font-medium  ${currentStep > step ? ' text-[#0D4C7B]' : ''} ${currentStep === step ? ' text-[#0D4C7B]' : ' text-primary'}`}>
                                            {step === 1 ? 'Personal Information' : 'Address'}
                                        </span>
                                    </span>
                                    <div className="w-full h-px sm:flex-1 hidden bg-gray-200 group-last:hidden"></div>
                                </li>
                                {step < 2 && <div className="h-8 w-0.5 ml-3 mb-2 mt-1 bg-[#94A3B8]"></div>}
                            </React.Fragment>
                        ))}
                    </ul>


                    {/* Stepper Content */}
                    <div className=" sm:border-l-2 border-[#E2E8F0] sm:pl-6 sm:ml-3 bg-white w-full lg:pr-20 pt-6 pb-20">
                        {steps[currentStep]}

                        {/* Button Group */}
                        <div className="mt-5 flex items-center gap-x-4">
                            <button type="button" onClick={handlePreviousStep} className="py-2 px-6 gap-x-1 text-sm font-medium rounded-sm bg-[#CBD5E1]  text-primary shadow-sm " disabled={currentStep === 1}>
                                Cancel
                            </button>
                            <button type="button" onClick={handleNextStep} className="py-2 px-3 w-[220px] text-center gap-x-1 text-sm font-semibold rounded-sm bg-[#0D4C7B] text-white " disabled={currentStep === 3}>
                                Continue to Next Step
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </DashboardWrapper>
    );
};

export default EditUser;
