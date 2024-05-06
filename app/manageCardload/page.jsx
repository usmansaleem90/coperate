import DashboardWrapper from '@/components/Dashboard/Dashboard-Wrapper'
import ManageCardload from '@/components/mangeCardload/ManageCardload'
import React from 'react'

const page = () => {
    return (
        <DashboardWrapper
            title1={"Manage Card Load"}
            title2={"Dashboard - Manage Card Load"}
            top={true}
        >
            <div className='py-4 px-6'>
                <ManageCardload />
            </div>
        </DashboardWrapper>
    )
}

export default page
