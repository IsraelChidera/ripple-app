import React from 'react';
import dashboard from '../components/assets/list-icon.svg';
import bell from '../components/assets/bell-icon.svg';
import down from '../components/assets/down-arrow.svg';
import back from '../components/assets/back-arrow.svg';
import logo from '../components/assets/change-logo.png';
import FilledButton from '../components/elements/FilledButton';
import OutlinedButton from '../components/elements/OutlinedButton';

const Settings = () => {
    return (
        <section className='pb-14' style={{ background: "#eeeded" }}>
            <nav>
                <div style={{ background: "#fff" }} className='flex justify-between items-center bg-white pt-6 px-2 pb-3'>
                    <div style={{ background: "#eeeded" }} className='p-2 rounded-md'>
                        <img src={dashboard} alt="db icon" />
                    </div>

                    <p className='text-lg font-bold text-dark'>Settings</p>

                    <img src={bell} alt="notification bell icon" />
                </div>
            </nav>

            <div className='mt-10 px-2'>
                <div className='flex  items-center justify-between bg-white p-3 rounded-2xl'>
                    <p className='text-sm'> BUSINESS PROFILE </p>

                    <img src={down} alt="down arrow" />
                </div>

                <div className='bg-white mt-4 rounded-2xl p-2'>
                    <div className='grid grid-cols-2  border rounded-2xl '>
                        <div>
                            <p className='border p-2 rounded-tl-2xl'>Company</p>
                            <p className=' p-2 border-r'>CEO/Founder</p>
                        </div>

                        <div>
                            <p className='border rounded-tr-2xl p-2 '>Company Director</p>
                            <p className=' p-2 '>Account information</p>
                        </div>
                        <p className='border rounded-bl-2xl p-2 '>Branch/Department</p>

                        <div className=''>

                            <p className='border-t p-2 '>KYC Information</p>
                        </div>

                    </div>
                </div>

                <div className='mt-4 py-2 px-2 bg-white rounded-2xl'>
                    <div className='flex items-center space-x-4 border-b pb-2'>
                        <img src={back} alt="back arrow" />

                        <p className='text-xl text-dark font-bold'>Edit Company Information</p>
                    </div>

                    <div className='flex pt-2 space-x-3'>
                        <img src={logo} alt="logo" />

                        <div className='flex items-end'>
                            <button style={{ background: "#F0F7EB", color: "#11453B" }} className='text-sm p-2 rounded-md' > Change Logo </button>
                            {/* <input type="file" placeholder='Change Logo'/> */}
                        </div>


                    </div>

                    <div className='mt-6'>
                        <form style={{ color: "#8D8E8D" }} className='pb-4 space-y-4'>
                            <div>
                                <input className='p-2 rounded-2xl border w-full' type="text" placeholder='Juyonna Travels  |' />
                            </div>

                            <div className='mt-2'>
                                <p style={{ color: "#8D8E8D" }}>Is your companyu registered?</p>

                                <div className='mt-1 flex space-x-4 items-center'>
                                    <FilledButton className='py-2 w-auto'>
                                        Yes
                                    </FilledButton>

                                    <OutlinedButton className='py-2 w-auto'>
                                        No
                                    </OutlinedButton>
                                </div>

                                <div className='flex mt-2 space-x-2'>
                                    <button style={{ background: "#F0F7EB", color: "#11453B" }} className='text-xs p-2 rounded-md' > Change Logo </button>
                                    <p style={{ fontSize: "11px" }} className='flex items-end'>
                                        Jpeg and Png Only {"(2mb max)"}
                                    </p>
                                </div>
                            </div>

                            <div className='mt-2'>
                                <div>
                                    <input className='p-2 rounded-2xl border w-full' type="text" placeholder='17, Simbiat  |' />
                                </div>

                                <div className='flex mt-2 space-x-2'>
                                    <button style={{ background: "#F0F7EB", color: "#11453B" }} className='text-xs p-2 rounded-md' > Change Logo </button>
                                    <p style={{ fontSize: "11px" }} className='flex items-end'>
                                        Jpeg and Png Only {"(2mb max)"}
                                    </p>
                                </div>
                            </div>

                            <div className='mt-2'>
                                <div>
                                    <input className='p-2 rounded-2xl border w-full' type="text" placeholder='100 and above  ' />
                                </div>
                            </div>

                            <div className='mt-2'>
                                <div>
                                    <input className='p-2 rounded-2xl border w-full' type="text" placeholder='ADDFER4546GFSDD76  ' />
                                </div>
                            </div>

                            <div className='mt-2'>
                                <div>
                                    <input className='p-2 rounded-2xl border w-full' type="text" placeholder='Lagos  ' />
                                </div>
                            </div>

                            <div className='mt-2'>
                                <div>
                                    <input className='p-2 rounded-2xl border w-full' type="text" placeholder='N-12565432  ' />
                                </div>
                            </div>

                            <div className='mt-2'>
                                <div>
                                    <input className='p-2 rounded-2xl border w-full' type="text" placeholder='100667zuhef4  ' />
                                </div>
                            </div>

                            <div className='mt-2'>
                                <div>
                                    <input className='p-2 rounded-2xl border w-full' type="text" placeholder='www.customerwebsite.com  ' />
                                </div>
                            </div>

                            <div className='mt-2'>
                                <div>
                                    <input className='p-2 rounded-2xl border w-full' type="text" placeholder='Travel & Tourism  ' />
                                </div>
                            </div>

                            <div className='mt-4 flex space-x-4 items-center'>
                                <FilledButton className='py-2 w-full'>
                                    Cancel
                                </FilledButton>

                                <OutlinedButton className='py-2 w-full'>
                                    Save
                                </OutlinedButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Settings