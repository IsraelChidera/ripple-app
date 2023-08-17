import React from 'react';
import wave from '../assets/wave-3.svg';
import wave2 from '../assets/wave-4.svg';
import eye from '../assets/eye-icon.svg';
import employee from '../assets/employee.svg';
import services from '../assets/services.svg';
import compliances from '../assets/compliances.svg';
import loan from '../assets/loan.svg';
import calendar from '../assets/calendar.svg';
import gender from '../assets/gender.svg';
import report from '../assets/graph.svg';

import OutlinedButton from '../elements/OutlinedButton';
import { NavLink } from 'react-router-dom';

const DbProfile = () => {
    return (
        <section>
            <div className='mt-4'>
                <h1 className='text-5xl font-bold'>
                    Welcome Abasiama
                </h1>
                <p className=' mt-1'>
                    Pay and manage your employee in minutes
                </p>
            </div>

            <div className='pb-10 grid mt-10 grid-cols-6 gap-x-10'>
                <div className='col-span-4 '>
                    <div className='bg-primary h-auto relative rounded-3xl'>
                        <img src={wave} alt="wave pattern" className='opacity-10 absolute z-10 top-0 left-0 w-full' />
                        <img src={wave2} alt="wave pattern" className='opacity-10 absolute z-10 bottom-0 right-0 w-full' />

                        <div className='relative z-20 '>
                            <div className='flex py-20 px-4 justify-between'>
                                <div>
                                    <p className='text-sm text-white'>Wallet Balance </p>
                                    <div className='flex items-center space-x-3'>
                                        <p style={{ fontSize: "30px", color: "#fff" }}>N12,560,078.00</p>
                                        <img src={eye} alt="eye icon" />
                                    </div>
                                </div>

                                <div className='flex items-end'>
                                    <OutlinedButton className="hover:text-white py-1 text-xs px-4 text-primary">
                                        Fund Wallet
                                    </OutlinedButton>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='mt-10 grid grid-cols-4 gap-x-4'>
                        <NavLink to="#" className='bg-white drop-shadow-xl px-3 py-2 rounded-2xl'>
                            <div className='flex justify-center items-center'>
                                <img src={employee} alt="add employee icon" />
                            </div>
                            <p className='text-xs w-full text-center mt-2'>Add Employee</p>
                        </NavLink>

                        <NavLink to="#" className='bg-white drop-shadow-xl px-3 py-2 rounded-2xl'>
                            <div className='flex justify-center items-center'>
                                <img src={services} alt="add employee icon" />
                            </div>
                            <p className='text-xs w-full text-center mt-2'>Pay Services</p>
                        </NavLink>

                        <NavLink to="#" className='bg-white drop-shadow-xl px-3 py-2 rounded-2xl'>
                            <div className='flex justify-center items-center'>
                                <img src={compliances} alt="add employee icon" />
                            </div>
                            <p className='text-xs w-full text-center mt-2'>Pay Compliances</p>
                        </NavLink>

                        <NavLink to="#" className='bg-white drop-shadow-xl px-3 py-2 rounded-2xl'>
                            <div className='flex justify-center items-center'>
                                <img src={loan} alt="add employee icon" />
                            </div>
                            <p className='text-xs w-full text-center mt-2'>Quick Loan</p>
                        </NavLink>
                    </div>
                </div>

                <div className='col-span-2'>
                    <div className='bg-white rounded-2xl'>
                        <div className='rounded-t-2xl ' style={{ background: "#D9EBCD" }}>
                            <p className='py-2 text-center font-bold'> Next Payroll</p>
                        </div>

                        <div className='flex items-center justify-center'>
                            <div className='flex mt-4 items-center space-x-2'>
                                <img src={calendar} alt="calendar icon" />
                                <p className='text-xs text-dark'>
                                    Friday
                                </p>
                            </div>
                        </div>

                        <p className='text-center pt-2 text-2xl font-bold mt-1'>
                            09/11/2022
                        </p>

                        <div style={{ borderColor: "#E7E8E7" }} className='px-6 py-2 mt-10 border-t'>
                            <h4 className='text-xl text-dark'>
                                Total Employee
                            </h4>

                            <p className='py-4 text-4xl font-bold'>
                                64
                            </p>

                            <img src={gender} alt="gender percentage" className='w-full' />
                        </div>
                    </div>
                </div>
            </div>

            <img src={report} alt="graph report" />
        </section>
    )
}

export default DbProfile