import React from 'react';
import logo from '../assets/dashboard-logo-2.svg';
import bell from '../assets/bell-icon.svg';
import side from '../assets/side-arrow.svg';
import profile from '../assets/profile-picture.svg';

const DbNav = () => {
    return (
        <nav className='bg-white px-10 flex py-2 items-center justify-between'>
            <img src={logo} alt="db logo" />

            <div className='flex items-center space-x-2'>
                <img className='pr-10' src={bell} alt="bell icon" />

                <img src={profile} alt="profile picture" />

                <div className=' '>
                    <div className='flex space-x-2'>
                        <div>
                            <p style={{ color: "#2B2B2B" }} className='text-sm font-bold'>
                                Kalu Abasiama
                            </p>

                            <p className='text-sm'>
                                Admin
                            </p>
                        </div>

                        <img src={side} alt="side arrow " className='flex justify-end items-end' />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default DbNav