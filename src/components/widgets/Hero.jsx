import React from 'react';
import gradients from '../assets/header-gradients.svg';
import FilledButton from '../elements/FilledButton';
import appStore from '../assets/apple-icon.svg';
import googleplay from '../assets/google-play-icon.svg';
import heroImage from '../assets/hero.svg';

const Hero = () => {
    return (
        <header className='relative py-3 px-3 md:py-0 md:px-0 '>
            <div className='z-20 md:mt-0 mt-10 relative md:flex justify-between items-center'>
                <div className='md:pl-24'>
                    <div className=''>
                        <h1 className="text-5xl font-bold">
                            <span style={{ color: "#292a29" }}>Run your</span>
                            <span>&nbsp;</span>
                            <span className="text-primary">payroll</span>
                            <span style={{ color: "#b4a572" }}>
                                {" "}
                                <br />
                                easily
                            </span>
                            <span className="text-primary"> in </span>
                            <span style={{ color: "#ea4e4b" }}>seconds</span>
                        </h1>

                        <p className='text-dark md:text-base text-sm mt-4 md:w-5/6'>
                            We've built an all-inclusive simple solution
                            for individual and businesses to manage staff,
                            pay salaries, bills, and relevant
                            taxes all at once.
                        </p>

                        <FilledButton className='md:w-auto w-full mt-4'>
                            Start Using Free, Forever
                        </FilledButton>
                    </div>

                    <div className='mt-10 md:mt-20'>
                        <p className='text-xs font-bold'>Download the Eazipay App</p>
                        <div className='mt-2 flex items-center space-x-4'>
                            <div style={{ border: "1px none" }} className='bg-white rounded-lg p-2 flex items-center space-x-2'>
                                <img src={appStore} alt="app store icon" />
                                <div>
                                    <p className='text-xs ' style={{ color: "#515251" }}>Download on the</p>
                                    <p className='font-bold text-sm'>Appstore</p>
                                </div>
                            </div>

                            <div style={{ border: "1px none" }} className='bg-white rounded-lg p-2 flex items-center space-x-2'>
                                <img src={googleplay} alt="app store icon" />
                                <div>
                                    <p className='text-xs' style={{ color: "#515251" }}>Get in </p>
                                    <p className='font-bold text-sm'>Google Play</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=' mt-20 md:mt-10 md:mb-10'>
                    <img style={{ width: "971.83px", }} src={heroImage} alt="hero image" />
                </div>
            </div>

            <div className=''>
                <img style={{ height: "100vh" }} className=' absolute top-0 left-0 w-full z-10' src={gradients} alt="hero gradient" />
            </div>
        </header>
    )
}

export default Hero