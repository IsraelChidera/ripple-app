import React from 'react';
import logo from '../assets/logo.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import FilledButton from '../elements/FilledButton';
import OutlinedButton from '../elements/OutlinedButton';
import listIcon from '../assets/list-icon.svg';

const Navbar = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/dashboard");
    }

    return (
        <nav className='mx-auto md:w-5/6 md:py-4 py-4 px-3 md:px-0  flex justify-between items-center '>
            <div className='flex items-center space-x-10'>
                <div>
                    <img className='md:h-auto md:w-auto w-20' src={logo} alt="logo" />
                </div>

                <ul className='text-sm hidden md:flex justify-between items-center space-x-4'>
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

            <div className='hidden md:flex space-x-4'>
                <OutlinedButton onClick={handleClick}>
                    Log in
                </OutlinedButton>

                <FilledButton>
                    Register
                </FilledButton>
            </div>

            <div className='md:hidden block'>
                <img src={listIcon} alt="list icon" />
            </div>
        </nav>
    )
}

export default Navbar