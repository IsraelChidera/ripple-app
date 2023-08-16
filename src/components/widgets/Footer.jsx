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
        <footer className='mx-auto md:w-5/6 mt-20 py-6 grid grid-cols-6 items-start'>
            <div className='col-span-2 justify-between space-y-6'>
                <img src={logo} alt="logo" />

                <p style={{ color: "#7C7C7C" }} className='text-xs'>
                    <span>Copyright © 2023 Eazipay.</span><br />
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

            <div className='flex col-span-4 justify-between w-full items-start'>
                <div>
                    <h4 className='font-bold text-xl text-dark'>Product</h4>

                    <ul style={{ color: "#7C7C7C" }} className='text-dark space-y-2 pt-2'>
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
                    <h4 className='font-bold text-xl text-dark'>Product</h4>

                    <ul style={{ color: "#7C7C7C" }} className='text-dark space-y-2 pt-2'>
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
                    <h4 className='font-bold text-xl text-dark'>Resources</h4>

                    <ul style={{ color: "#7C7C7C" }} className='text-dark space-y-2 pt-2'>
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
                    <h4 className='font-bold text-xl text-dark'>Contact us</h4>

                    <ul style={{ color: "#7C7C7C" }} className='text-dark space-y-2 pt-2'>
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
                                className='text-dark px-2 py-1.5 text-sm'
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