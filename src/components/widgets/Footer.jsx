import React from 'react';
import logo from '../assets/footer-logo.svg';
import { NavLink } from 'react-router-dom';
import instagram from '../assets/instgram-icon.svg';
import twitter from '../assets/twitter-icon.svg';
import linkedin from '../assets/linkedin-icon.svg';
import facebook from '../assets/facebook-icon.svg';
import sendArrow from '../assets/send-arrow.svg';

const Footer = () => {
    return (
        <footer className='mx-auto  mt-20 md:px-6 px-3 md:py-6 py-10 grid grid-cols-5 md:grid md:grid-cols-6 items-start'>
            <div className='md:col-span-2 col-span-6 md:justify-between md:block flex flex-col items-center justify-center space-y-6'>
                <img src={logo} alt="logo" />

                <p style={{ color: "#7C7C7C" }} className='text-center md:text-left text-xs'>
                    <span> Copyright © 2023 Eazipay. </span><br />
                    {" "}
                    <span>All rights reserved</span>
                </p>

                <div className='text-xs flex space-x-4 items-center'>
                    <img src={instagram} alt="instagram icon" />
                    <img src={twitter} alt="twitter icon" />
                    <img src={linkedin} alt="linkedin icon" />
                    <img src={facebook} alt="facebook icon" />
                </div>
            </div>

            <div className='md:flex grid grid-cols-2 text-center md:text-left md:mt-0 mt-10 space-y-4 md:space-y-0 col-span-5 md:col-span-4 justify-between md:w-full items-start'>
                <div>
                    <h4 className='font-bold md:text-xl text-lg text-dark'>Product</h4>

                    <ul style={{ color: "#7C7C7C" }} className='text-dark text-sm md:text-base space-y-2 pt-2'>
                        <li>
                            <NavLink to="#">
                                Individual
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="#">
                                Businessess
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="#">
                                Request Demo
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="#">
                                Pricing
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className='font-bold md:text-xl text-lg text-dark'>Legal</h4>

                    <ul style={{ color: "#7C7C7C" }} className='text-sm md:text-base text-dark space-y-2 pt-2'>
                        <li>
                            <NavLink to="#">
                                Privacy Policy
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="#">
                                Terms of Service
                            </NavLink>
                        </li>

                    </ul>
                </div>

                <div>
                    <h4 className='font-bold sm:text-xl text-lg text-dark'>Resources</h4>

                    <ul style={{ color: "#7C7C7C" }} className='text-sm sm:text-base text-dark space-y-2 pt-2'>
                        <li>
                            <NavLink to="#">
                                FAQs
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="#">
                                BLog
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="#">
                                Career
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="#">
                                Customer Stories
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className='font-bold sm:text-xl text-lg text-dark'>Contact us</h4>

                    <ul style={{ color: "#7C7C7C" }} className='text-sm sm:text-base text-dark space-y-2 pt-2'>
                        <li>
                            <NavLink to="#">
                                eazipay@gmail.com
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="#">
                                +234 816 878 9518
                            </NavLink>
                        </li>

                        <li className='relative'>
                            <input
                                style={{ background: "#f2f1f1", borderRadius: "16px" }}
                                type="text"
                                className='text-dark w-full sm:w-auto px-2 py-1.5 text-xs sm:text-sm'
                                placeholder='Your email address'
                            />

                            <img src={sendArrow} alt="send arrow icon" className='absolute top-2 right-2 text-xs'/>
                        </li>

                       
                    </ul>
                </div>
            </div>       
        </footer>
    )
}

export default Footer