import React from 'react'
import Sidebar from '../components/widgets/Sidebar'
import DbNav from '../components/widgets/DbNav'
import DbProfile from '../components/widgets/DbProfile'
import RecentActivities from '../components/widgets/RecentActivities';
import MobileDashboard from '../components/widgets/MobileDashboard';

const Dashboard = () => {
    return (
        <>
            <section className='sm:block hidden relative'>
                <Sidebar />

                <main style={{ background: "#f9fafc" }} className='pb-20 pl-56'>
                    <DbNav />
                    <div className='mx-auto px-10'>
                        <DbProfile />
                        <RecentActivities />
                    </div>

                </main>
            </section>

            <section className='sm:hidden block'>
                <MobileDashboard />
            </section>
        </>
    )
}

export default Dashboard