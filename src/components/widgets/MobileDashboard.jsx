import React from 'react';
import profile from '../assets/mobile-profile-picture.svg';
import bell from '../assets/bell-2.svg';
import wave from '../assets/wave-3.svg';
import wave2 from '../assets/wave-4.svg';
import OutlinedButton from '../elements/OutlinedButton';
import eye from '../assets/eye-icon.svg';
import naira from '../assets/naira.svg';
import action1 from '../assets/action-1.svg';
import action2 from '../assets/action-2.svg';
import action3 from '../assets/action-3.svg';
import action4 from '../assets/action-4.svg';
import action5 from '../assets/action-5.svg';
import action6 from '../assets/action-6.svg';
import action7 from '../assets/action-7.svg';
import action8 from '../assets/action-8.svg';
import action9 from '../assets/action-9.svg';
import user from '../assets/user-icon.svg';
import home from '../assets/home-icon.svg';
import payroll from '../assets/payroll-icon.svg';
import loan from '../assets/loan-icon.svg';
import more from '../assets/loan-icon.svg';

const MobileDashboard = () => {
    return (
        <section className=' relative'>
            <div className='px-4 pb-40 pt-10'>
                <div className='flex justify-between items-center '>
                    <div className='flex items-center space-x-2'>
                        <img src={profile} alt="profile picture" />
                        <p className='text-dark text-xl'>Hello Wasiu</p>
                    </div>

                    <img src={bell} alt="bell notification icon" />
                </div>

                <div className='mt-10 bg-primary h-auto relative rounded-3xl'>
                    <img src={wave} alt="wave pattern" className='opacity-10 absolute z-10 top-0 left-0 w-full' />
                    <img src={wave2} alt="wave pattern" className='opacity-10 absolute z-10 bottom-0 right-0 w-full' />

                    <div className='relative z-20 '>
                        <div className='py-20 px-4'>
                            <div className='flex  justify-between'>
                                <div>
                                    <p className='text-base text-white'>Wallet Balance </p>
                                    <div className='flex items-center space-x-3'>
                                        <p className='font-bold' style={{ fontSize: "28px", color: "#fff" }}>N12,560,078.00</p>
                                    </div>
                                </div>

                                <img src={eye} alt="eye icon" />
                            </div>

                            <OutlinedButton className="mt-10 w-full hover:text-white py-1 text-base px-4 text-primary">
                                Fund Wallet
                            </OutlinedButton>
                        </div>


                    </div>
                </div>

                <div className='mt-14'>
                    <p className='text-dark text-sm'>
                        QUICK STATS
                    </p>

                    <div className='mt-4 grid grid-cols-2 gap-x-4'>
                        <div style={{ background: "#F2F1F1" }} className='rounded-2xl p-4'>
                            <h3 className='text-sm'>Total Payroll</h3>
                            <div className='flex space-x-1 mt-2'>
                                <img src={naira} alt="naira" />
                                <p className='font-bold'>
                                    2,293,044,345.05
                                </p>
                            </div>
                        </div>

                        <div style={{ background: "#F2F1F1" }} className='rounded-2xl p-4'>
                            <h3 className='text-sm'>Total Employee</h3>
                            <div className='flex space-x-1 mt-2'>
                                <img src={naira} alt="naira" />
                                <p className='font-bold'>
                                    10, 000
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-14'>
                    <p className='text-dark text-sm'>
                        QUICK ACTIONS
                    </p>

                    <div style={{ borderRadius: "24px", borderColor: "#e7e8e7", padding: "32px 7px 34px 7px" }} className='border mt-4 grid grid-cols-3 gap-y-10 gap-x-4'>
                        <div className='flex flex-col justify-center items-center'>
                            <img src={action1} alt="payment icon" />
                            <p className='text-sm mt-2'>
                                Pay Salaries
                            </p>
                        </div>

                        <div className='flex flex-col justify-center items-center'>
                            <img src={action2} alt="add employee icon" />
                            <p className='text-sm mt-2'>
                                Add Employee
                            </p>
                        </div>

                        <div className='flex flex-col justify-center items-center'>
                            <img src={action3} alt="payslips icon" />
                            <p className='text-sm mt-2'>
                                Send Payslips
                            </p>
                        </div>

                        <div className='flex flex-col justify-center items-center'>
                            <img src={action4} alt="edit salaries icon" />
                            <p className='text-sm mt-2'>
                                Edit Salaries
                            </p>
                        </div>

                        <div className='flex flex-col justify-center items-center'>
                            <img src={action5} alt="loan icon" />
                            <p className='text-sm mt-2'>
                                Get a Loan
                            </p>
                        </div>

                        <div className='flex flex-col justify-center items-center'>
                            <img src={action6} alt="transfer icon" />
                            <p className='text-sm mt-2'>
                                Make a Transfer
                            </p>
                        </div>

                        <div className='flex flex-col justify-center items-center'>
                            <img src={action7} alt="airtime icon" />
                            <p className='text-sm mt-2'>
                                Airtime
                            </p>
                        </div>

                        <div className='flex flex-col justify-center items-center'>
                            <img src={action8} alt="payslips icon" />
                            <p className='text-sm mt-2'>
                                Data
                            </p>
                        </div>

                        <div className='flex flex-col justify-center items-center'>
                            <img src={action9} alt="payslips icon" />
                            <p className='text-sm mt-2'>
                                Electricity
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <footer style={{ boxShadow: "0px -8px 12px #656c7d14" }} className='py-6  bg-white  w-full fixed bottom-0 left-0 bg-primary'>
                <div className='flex justify-around items-center'>
                    <div className='flex flex-col items-center'>
                        <img src={home} alt="home icon" />
                        <p className='text-xs p-1 text-primary'>
                            Home
                        </p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <img src={user} alt="user icon" />
                        <p className='text-xs p-1 text-primary'>
                            Employee
                        </p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <img src={payroll} alt="payroll icon" />
                        <p className='text-xs p-1 text-primary'>
                            Payroll
                        </p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <img src={loan} alt="loan icon" />
                        <p className='text-xs p-1 text-primary'>
                            Loans
                        </p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <img src={more} alt="more icon" />
                        <p className='text-xs p-1 text-primary'>
                            More
                        </p>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default MobileDashboard