import React from 'react';
import circles from '../assets/circles.svg';
import onboard from '../assets/onboard.svg';
import step1 from '../assets/how-1.svg';
import step2 from '../assets/how-2.svg';

const How = () => {
    return (
        <section className='mx-auto mt-10 md:mt-0 md:w-5/6 md:px-0 md:py-20 py-3 px-3'>
            <div className='text-center mb-10'>
                <h2 className='text-primary font-bold md:text-4xl text-3xl'> How Eazipay Works </h2>
                <p className='text-xs md:text-sm text-dark mt-2'>
                    Get started in 3 simple steps
                </p>
            </div>

            <div className='md:flex md:space-x-28 items-start mt-20'>
                <div className='relative md:block flex items-center justify-center'>
                    <img src={circles} className='w-72 md:w-full' alt="circles" />
                    <img 
                        className='md:centered-image absolute top-0 w-40 z-10' 
                        src={onboard} 
                        alt="image of an onboarding process" 
                    />
                </div>

                <div className='relative md:block grid grid-cols-2 mt-40 md:mt-0'>
                    <div className=''>
                        <span className='text-2xl md:text-4xl text-white bg-primary rounded-2xl py-4 px-8'>
                            1
                        </span>

                        <h6 className='font-bold text-xl md:text-sm mt-6'>Create your free account</h6>
                        <p className='text-xs mt-2'>
                            Click here to set up your Eazipay account.
                        </p>
                    </div>

                    <div className='md:block hidden'>
                        <img className='absolute top-0 -left-16' src={step1} alt="step" />
                    </div>

                    <div className='md:mt-20 '>
                        <span style={{ background: "#f2f1f1" }} className='text-2xl md:text-4xl text-primary rounded-2xl py-4 px-8'>
                            2
                        </span>

                        <h6 className='font-bold text-xl md:text-sm mt-6'>Create your free account</h6>
                        <p className='text-xs mt-2'>
                            Click here to set up your Eazipay account.
                        </p>
                    </div>

                    <div className='md:block hidden'>
                        <img className='absolute md:bottom-20 md:block hidden md:right-0' src={step2} alt="step" />
                    </div>

                    <div className='md:mt-20 mt-10'>
                        <span style={{ background: "#f2f1f1" }} className='text-2xl md:text-4xl text-primary rounded-2xl py-4 px-8'>
                            3
                        </span>

                        <h6 className='font-bold text-xl md:text-sm mt-6'>Create your free account</h6>
                        <p className='text-xs mt-2'>
                            Click here to set up your Eazipay account.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default How