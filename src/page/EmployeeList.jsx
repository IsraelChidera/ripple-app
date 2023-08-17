import React, { useState } from 'react'
import BottomNavigation from '../components/widgets/BottomNavigation'
import wave from '../components/assets/wave-3.svg';
import wave2 from '../components/assets/wave-4.svg';
import FilledButton from '../components/elements/FilledButton';
import OutlinedButton from '../components/elements/OutlinedButton';
import search from '../components/assets/search.svg';
import filter from '../components/assets/filter.svg';
import more from '../components/assets/more-2.svg';
import dashboard from '../components/assets/list-icon.svg';

const EmployeeList = () => {

    const [click, setClick] = useState(false);
    return (
        <section className='pt-6 pb-20 relative sm:hidden block'>
            <h1
                style={{ color: "#292A29", borderColor: "#f6f6f6" }}
                className='border-b text-center text-lg font-size pb-2 font-bold'
            >
                Eazipay's Team
            </h1>

            <div className='px-2'>
                <div className='mt-10 bg-primary h-auto relative rounded-3xl'>
                    <img src={wave} alt="wave pattern" className='opacity-10 absolute z-10 top-0 left-0 w-full' />
                    <img src={wave2} alt="wave pattern" className='opacity-10 absolute z-10 bottom-0 right-0 w-full' />

                    <div className='relative z-20 '>
                        <div className='py-10 px-4'>
                            <div>
                                <div>
                                    <p className='text-base text-white'>Total Employee </p>
                                    <div className='flex mt-2 items-center space-x-3'>
                                        <p className='font-bold' style={{ fontSize: "28px", color: "#fff" }}>
                                            11264
                                        </p>
                                    </div>
                                </div>

                            </div>


                        </div>


                    </div>
                </div>

                <div
                    style={{ borderColor: "#E7E8E7", borderRadius: "32px" }}
                    className='border mt-6 p-2 flex space-x-4 items-center'
                >
                    <FilledButton className='py-2 w-full'>
                        Individual
                    </FilledButton>

                    {
                        click ? <FilledButton onClick={() => setClick(prev => !prev)} className='py-2 w-full'>
                            Company
                        </FilledButton> : <OutlinedButton onClick={() => setClick(prev => !prev)} className='py-2 w-full'>
                            Company
                        </OutlinedButton>
                    }

                </div>

                <div className='flex items-center space-x-2'>
                    <div className='mt-6 relative w-full'>
                        <input type="text"
                            placeholder='Search employee'
                            className='w-full rounded-2xl border py-1.5 pl-4'
                        />

                        <button className='absolute top-2 right-3'>
                            <img src={search} alt="search icon" />
                        </button>
                    </div>

                    <div style={{ background: "#F2F1F1" }}
                        className='p-2 rounded-md flex relative top-2 items-center justify-center'>
                        <img src={filter} className='text-4xl' alt="filter icon" />
                    </div>
                </div>

                <div style={{ color: "#B5B6B5" }} className='mt-6 flex justify-between items-center'>
                    <div className='flex items-center space-x-3 '>
                        <img src={more} alt="more icon" className='border-r-2 pr-2' />

                        <img src={dashboard} alt="db icon " className='border-r-2 pr-2' />

                        <p>
                            Archived
                        </p>
                    </div>

                    <div>
                        <form className='flex space-x-2'>
                            <input type="checkbox" name="employee" value="dd" />
                            <span>Select All</span>
                        </form>
                    </div>
                </div>

                <div>
                    <div>
                        {/* <img src={profilePicture} alt="profile picture" /> */}
                        <div>
                            <h3> Caleb Nwafor</h3>
                            <p>Accountant</p>
                            <p>
                                <span className='border-r-2 pr-2'>Female</span> {" "}
                                <span>Monthly</span>
                            </p>
                        </div>
                    </div>
                </div>

            </div>

            <BottomNavigation />
        </section>
    )
}

export default EmployeeList