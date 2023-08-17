import React from 'react';
import search from '../assets/search.svg';
import filter from '../assets/filter.svg';
import profile1 from '../assets/profile-1.svg';
import profile3 from '../assets/profile-3.svg';

const RecentActivities = () => {
    return (
        <section className='mt-10'>
            <h3 className='text-4xl pb-4 font-bold'>
                Recent Acivities
            </h3>

            <div className='mt-4 flex space-x-10 items-center'>
                <div className='relative w-full'>
                    <input type="text"
                        placeholder='Search employee'
                        className='w-full rounded-2xl border py-1.5 pl-4'
                    />

                    <button className=' bg-primary absolute top-2 right-3'>
                        <img src={search} alt="search icon" />
                    </button>
                </div>

                <div >
                    <button className='flex items-center border px-6 py-1.5 rounded-2xl' style={{ borderColor: "#B5B6B5" }}>
                        <img src={filter} alt="filter icon" />

                        <span className='text-xs' style={{ color: "#8D8E8D" }}>Filter</span>
                    </button>
                </div>
            </div>

            <div className='mt-12'>
                <h5 className=' text-dark font-bold'> Wednesday, November 09, 2022</h5>

                <div className='bg-white mt-4 px-20 py-6 rounded-2xl'>
                    <ul style={{ color: "#8D8E8D" }} className='text-xs grid grid-cols-5 gap-x-2'>
                        <li>
                            PAYROLL
                        </li>

                        <li className='col-span-2'>
                            ACTIVITY
                        </li>

                        <li>
                            EMPLOYEE
                        </li>

                        <li>
                            TIME
                        </li>
                    </ul>

                    <div className='grid grid-cols-5 gap-x-2 pt-4'>
                        <div className='flex items-center space-x-2'>
                            <img src={profile1} alt="profile picture" />

                            <p className='font-bold' style={{ color: "#515251" }}>
                                Badmus Kemis
                            </p>
                        </div>

                        <p className='col-span-2 font-bold flex items-center' style={{ color: "#515251" }}>
                            Paid November 2022 salary
                        </p>

                        <p className='font-bold flex items-center' style={{ color: "#515251" }}>
                            52
                        </p>

                        <p className='font-bold flex items-center' style={{ color: "#515251" }}>
                            16:15
                        </p>
                    </div>
                </div>

                <div className='bg-white mt-4 px-20 py-6 rounded-2xl'>
                    <ul style={{ color: "#8D8E8D" }} className='text-xs grid grid-cols-5 gap-x-2'>
                        <li className='uppercase'>
                            EMPLOYEE MANAGEMENT
                        </li>

                        <li className='col-span-2'>
                            ACTIVITY
                        </li>

                        <li>
                            EMPLOYEE
                        </li>

                        <li>
                        </li>
                    </ul>

                    <div className='grid grid-cols-5 gap-x-2 pt-4'>
                        <div className='flex items-center space-x-2'>
                            <img src={profile3} alt="profile picture" />

                            <p className='font-bold' style={{ color: "#515251" }}>
                                Kalu Abasiama
                            </p>
                        </div>

                        <p className='col-span-2 font-bold flex items-center' style={{ color: "#515251" }}>
                            Added new employee
                        </p>

                        <p className='font-bold flex items-center' style={{ color: "#515251" }}>
                            04
                        </p>

                        <p className='font-bold flex items-center' style={{ color: "#515251" }}>

                        </p>
                    </div>
                </div>
            </div>

            <div className='mt-12'>
                <h5 className=' text-dark font-bold'> Friday, November 04, 2022</h5>

                <div className='bg-white mt-4 px-20 py-6 rounded-2xl'>
                    <ul style={{ color: "#8D8E8D" }} className='text-xs grid grid-cols-5 gap-x-2'>
                        <li className='uppercase'>
                            BONUS
                        </li>

                        <li className='col-span-2'>
                            ACTIVITY
                        </li>

                        <li>
                            BONUS NAME
                        </li>

                        <li>
                        </li>
                    </ul>

                    <div className='grid grid-cols-5 gap-x-2 pt-4'>
                        <div className='flex items-center space-x-2'>
                            <img src={profile1} alt="profile picture" />

                            <p className='font-bold' style={{ color: "#515251" }}>
                                Badmus Kemis
                            </p>
                        </div>

                        <p className='col-span-2 font-bold flex items-center' style={{ color: "#515251" }}>
                            Added new employee
                        </p>

                        <p className='font-bold flex items-center' style={{ color: "#515251" }}>
                            04
                        </p>

                        <p className='font-bold flex items-center' style={{ color: "#515251" }}>

                        </p>
                    </div>
                </div>

                <div className='bg-white mt-4 px-20 py-6 rounded-2xl'>
                    <ul style={{ color: "#8D8E8D" }} className='text-xs grid grid-cols-5 gap-x-2'>
                        <li>
                            WALLET
                        </li>

                        <li className='col-span-2'>
                            ACTIVITY
                        </li>

                        <li>
                            AMOUNT
                        </li>

                        <li>
                            TIME
                        </li>
                    </ul>

                    <div className='grid grid-cols-5 gap-x-2 pt-4'>
                        <div className='flex items-center space-x-2'>
                            <img src={profile1} alt="profile picture" />

                            <p className='font-bold' style={{ color: "#515251" }}>
                                Badmus Kemis
                            </p>
                        </div>

                        <p className='col-span-2 font-bold flex items-center' style={{ color: "#515251" }}>
                            Paid November 2022 salary
                        </p>

                        <p className='font-bold flex items-center' style={{ color: "#EA4E4B" }}>
                            N11,1678,900.00
                        </p>

                        <p className='font-bold flex items-center' style={{ color: "#515251" }}>
                            15:31
                        </p>
                    </div>
                </div>
            </div>

            <div className='mt-12'>
                <h5 className=' text-dark font-bold'> Monday, October 30, 2022</h5>

                <div className='bg-white mt-4 px-20 py-6 rounded-2xl'>
                    <ul style={{ color: "#8D8E8D" }} className='text-xs grid grid-cols-5 gap-x-2'>
                        <li>
                            PAYROLL
                        </li>

                        <li className='col-span-2'>
                            ACTIVITY
                        </li>

                        <li>
                            EMPLOYEE
                        </li>

                        <li>
                            TIME
                        </li>
                    </ul>

                    <div className='grid grid-cols-5 gap-x-2 pt-4'>
                        <div className='flex items-center space-x-2'>
                            <img src={profile1} alt="profile picture" />

                            <p className='font-bold' style={{ color: "#515251" }}>
                                Badmus Kemis
                            </p>
                        </div>

                        <p className='col-span-2 font-bold flex items-center' style={{ color: "#515251" }}>
                            Paid November 2022 salary
                        </p>

                        <p className='font-bold flex items-center' style={{ color: "#515251" }}>
                            52
                        </p>

                        <p className='font-bold flex items-center' style={{ color: "#515251" }}>
                            16:15
                        </p>
                    </div>
                </div>

                <div className='bg-white mt-4 px-20 py-6 rounded-2xl'>
                    <ul style={{ color: "#8D8E8D" }} className='text-xs grid grid-cols-5 gap-x-2'>
                        <li className='uppercase'>
                            EMPLOYEE MANAGEMENT
                        </li>

                        <li className='col-span-2'>
                            ACTIVITY
                        </li>

                        <li>
                            EMPLOYEE
                        </li>

                        <li>
                        </li>
                    </ul>

                    <div className='grid grid-cols-5 gap-x-2 pt-4'>
                        <div className='flex items-center space-x-2'>
                            <img src={profile3} alt="profile picture" />

                            <p className='font-bold' style={{ color: "#515251" }}>
                                Kalu Abasiama
                            </p>
                        </div>

                        <p className='col-span-2 font-bold flex items-center' style={{ color: "#515251" }}>
                            Added new employee
                        </p>

                        <p className='font-bold flex items-center' style={{ color: "#515251" }}>
                            04
                        </p>

                        <p className='font-bold flex items-center' style={{ color: "#515251" }}>

                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RecentActivities