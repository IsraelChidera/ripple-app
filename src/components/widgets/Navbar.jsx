import React from 'react';
import logo from '../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import FilledButton from '../elements/FilledButton';
import OutlinedButton from '../elements/OutlinedButton';

const Navbar = () => {
    return (
        <nav className='mx-auto md:w-5/6 flex justify-between items-center py-4'>
            <div className='flex items-center space-x-10'>
                <div>
                    <img src={logo} alt="logo" />
                </div>

                <ul className='text-sm flex justify-between items-center space-x-4'>
                    <li>
                        <NavLink>
                            Individual
                        </NavLink>
                    </li>

                    <li>
                        <NavLink>
                            Business
                        </NavLink>
                    </li>

                    <li>
                        <NavLink>
                            Pricing
                        </NavLink>
                    </li>

                    <li>
                        <NavLink>
                            Set your payroll
                        </NavLink>
                    </li>
                </ul>
            </div>

            <div className='flex space-x-4'>
                <OutlinedButton>
                    Log in
                </OutlinedButton>

                <FilledButton>
                    Register
                </FilledButton>
            </div>
        </nav>
    )
}

export default Navbar