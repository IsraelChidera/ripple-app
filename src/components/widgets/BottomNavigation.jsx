import React from 'react'
import user from '../assets/user-icon.svg';
import home from '../assets/home-icon.svg';
import payroll from '../assets/payroll-icon.svg';
import loan from '../assets/loan-icon.svg';
import more from '../assets/loan-icon.svg';
import { NavLink } from 'react-router-dom';

const BottomNavigation = () => {
    return (
        <footer style={{ boxShadow: "0px -8px 12px #656c7d14" }} className='py-6  bg-white  w-full fixed bottom-0 left-0 bg-primary'>
            <div className='flex justify-around items-center'>
                <NavLink to="#" className='flex flex-col items-center'>
                    <img src={home} alt="home icon" />
                    <p className='text-xs p-1 text-primary'>
                        Home
                    </p>
                </NavLink>

                <NavLink to="/dashboard/employees" className='flex flex-col items-center'>
                    <img src={user} alt="user icon" />
                    <p className='text-xs p-1' style={{ color: "#8D8E8D" }}>
                        Employee
                    </p>
                </NavLink>

                <NavLink to="#" className='flex flex-col items-center'>
                    <img src={payroll} alt="payroll icon" />
                    <p className='text-xs p-1' style={{ color: "#8D8E8D" }}>
                        Payroll
                    </p>
                </NavLink>

                <NavLink to="#" className='flex flex-col items-center'>
                    <img src={loan} alt="loan icon" />
                    <p className='text-xs p-1' style={{ color: "#8D8E8D" }}>
                        Loans
                    </p>
                </NavLink>

                <div className='flex flex-col items-center'>
                    <img src={more} alt="more icon" />
                    <p className='text-xs p-1' style={{ color: "#8D8E8D" }}>
                        More
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default BottomNavigation