'use client'
import DashboardWrapper from '@/components/Dashboard/Dashboard-Wrapper'
import Comments from '@/components/manageCardHolders/Comments';
import History from '@/components/manageCardHolders/History';
import ReissueCard from '@/components/manageCardHolders/ReissueCard';
import React, { useState } from 'react'

const Page = () => {

    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };


    const tabs = [
        { label: 'Transaction History', content: <History /> },
        { label: 'Network Transactions', content: <History/> },
        { label: 'Reissue Card', content: <ReissueCard/> },
        { label: 'Memo/Comments', content: <Comments/> },
    ];

    return (
        <DashboardWrapper
            title1={"Manage Cardholder"}
            title2={"Dashboard - Manage Card Load - Employer Detail"}
            top={true}
        >
            <div className='py-4 px-6'>
                {/* topbar */}
                <div className='bg-white rounded-lg' >
                    <div className='flex gap-3 flex-wrap p-2'>
                        {tabs.map((tab, index) => (
                            <button
                                key={index}
                                className={`px-4 py-2 sm:w-[200px] sm:text-base text-xs whitespace-nowrap rounded-sm ${activeTab === index ? 'bg-[#0D4C7B] text-white' : 'bg-none border text-primary '
                                    }`}
                                onClick={() => handleTabClick(index)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
                <div className='w-full bg-white rounded-lg h-full mt-4'>
                    <div className=" w-full">
                        {tabs.map((tab, index) => (
                            <div key={index} className={activeTab === index ? '' : 'hidden'}>
                                {tab.content}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </DashboardWrapper>
    )
}

export default Page
