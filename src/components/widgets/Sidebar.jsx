import React from 'react';
import logo from '../assets/db-logo.svg';
import dashboard from '../assets/dashboard-icon.svg';
import wallet from '../assets/wallet-icon.svg';
import sideArrow from '../assets/side-arrow.svg';
import user from '../assets/user-icon.svg';
import payroll from '../assets/payroll-icon.svg';
import compliance from '../assets/compliance-icon.svg';
import loan from '../assets/loan-icon.svg';
import book from '../assets/book-icon.svg';
import call from '../assets/call-icon.svg';
import settings from '../assets/settings-icon.svg';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <aside className='fixed top-0 left-0 h-full overflow-auto w-56 bg-white'>
            <div className='relative'>
                <img src={logo} alt="logo" />
            </div>

            <ul className='mt-10 text-xs pb-10'>
                <li className='p-4 border-l-4 border-primary' style={{ background: "#F0F7EB80" }}>

                    <NavLink to="#" className='flex space-x-2 '>
                        <img src={dashboard} alt="dashboard icon" />
                        <span style={{ color: "#11453B" }}> Dashboard </span>
                    </NavLink>
                </li>

                <li className='p-4 border-y' style={{ background: "#fff", borderColor: "#E7E8E7" }}>

                    <NavLink to="#" className='flex justify-between items-center'>
                        <div className='flex space-x-2 items-center'>
                            <img src={wallet} alt="dashboard icon" />
                            <span style={{ color: "#11453B" }}> Wallet </span>
                        </div>

                        <img src={sideArrow} alt="side arrow" />
                    </NavLink>
                </li>


                <li className='p-4 border-y' style={{ background: "#fff", borderColor: "#E7E8E7" }}>

                    <NavLink to="#" className='flex justify-between items-center'>
                        <div className='flex space-x-2 items-center'>
                            <img src={user} alt="user icon" />
                            <span style={{ color: "#11453B" }}> Employee Management </span>
                        </div>

                        <img src={sideArrow} alt="side arrow" />
                    </NavLink>
                </li>

                <li className='p-4 border-y' style={{ background: "#fff", borderColor: "#E7E8E7" }}>

                    <NavLink to="#" className='flex justify-between items-center'>
                        <div className='flex space-x-2 items-center'>
                            <img src={payroll} alt="payroll icon" />
                            <span style={{ color: "#11453B" }}> Payroll </span>
                        </div>

                        <img src={sideArrow} alt="side arrow" />
                    </NavLink>
                </li>

                <li className='p-4 border-y' style={{ background: "#fff", borderColor: "#E7E8E7" }}>

                    <NavLink to="#" className='flex justify-between items-center'>
                        <div className='flex space-x-2 items-center'>
                            <img src={compliance} alt="dashboard icon" />
                            <span style={{ color: "#11453B" }}> Compliance </span>
                        </div>

                        <img src={sideArrow} alt="side arrow" />
                    </NavLink>
                </li>

                <li className='p-4 border-y' style={{ background: "#fff", borderColor: "#E7E8E7" }}>

                    <NavLink to="#" className='flex justify-between items-center'>
                        <div className='flex space-x-2 items-center'>
                            <img src={loan} alt="loan icon" />
                            <span style={{ color: "#11453B" }}> Quick Loan </span>
                        </div>

                        <img src={sideArrow} alt="side arrow" />
                    </NavLink>
                </li>

                <li className='p-4 border-y' style={{ background: "#fff", borderColor: "#E7E8E7" }}>

                    <NavLink to="#" className='flex justify-between items-center'>
                        <div className='flex space-x-2 items-center'>
                            <img src={book} alt="book icon" />
                            <span style={{ color: "#11453B" }}> Book Keeping </span>
                        </div>

                        <img src={sideArrow} alt="side arrow" />
                    </NavLink>
                </li>

                <li className='mt-10 p-4 border-y' style={{ background: "#fff", borderColor: "#E7E8E7" }}>

                    <NavLink to="#" className='flex justify-between items-center'>
                        <div className='flex space-x-2 items-center'>
                            <img src={call} alt="support icon" />
                            <span style={{ color: "#11453B" }}> Support </span>
                        </div>

                        <img src={sideArrow} alt="side arrow" />
                    </NavLink>
                </li>

                <li className='p-4 border-y' style={{ background: "#fff", borderColor: "#E7E8E7" }}>

                    <NavLink to="#" className='flex justify-between items-center'>
                        <div className='flex space-x-2 items-center'>
                            <img src={settings} alt="settings icon" />
                            <span style={{ color: "#11453B" }}> Settings </span>
                        </div>

                        <img src={sideArrow} alt="side arrow" />
                    </NavLink>
                </li>
            </ul>
        </aside>
    )
}

export default Sidebar