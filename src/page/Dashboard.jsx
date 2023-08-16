import React from 'react'
import Sidebar from '../components/widgets/Sidebar'
import DbNav from '../components/widgets/DbNav'
import DbProfile from '../components/widgets/DbProfile'

const Dashboard = () => {
    return (
        <section className='relative'>
            <Sidebar />

            <main style={{ background: "#f9fafc" }} className='h-screen pl-56'>
                <DbNav />
                <div className='mx-auto md:w-5/6'>
                    <DbProfile />
                </div>

            </main>
        </section>
    )
}

export default Dashboard