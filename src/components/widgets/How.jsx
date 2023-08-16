import React from 'react';
import circles from '../assets/circles.svg';
import onboard from '../assets/onboard.svg';
import step1 from '../assets/how-1.svg';
import step2 from '../assets/how-2.svg';
const How = () => {
    return (
        <section className='mx-auto md:w-5/6 py-10'>
            <div className='text-center mb-10'>
                <h2 className='text-primary font-bold text-4xl'>How Eazipay Works</h2>
                <p className='text-sm text-dark mt-2'>
                    Get started in 3 simple steps
                </p>
            </div>

            <div className='flex space-x-28 items-start mt-20'>
                <div className='relative'>
                    <img src={circles} alt="circles" />
                    <img className='centered-image z-10' src={onboard} alt="image of an onboarding process" />
                </div>

                <div className='relative'>
                    <div className=''>
                        <span className='text-4xl text-white bg-primary rounded-2xl py-4 px-8'>
                            1
                        </span>

                        <h6 className='font-bold text-sm mt-6'>Create your free account</h6>
                        <p className='text-xs mt-2'>
                            Click here to set up your Eazipay account.
                        </p>
                    </div>

                    <div>
                        <img className='absolute top-0 -left-16' src={step1} alt="step" />
                    </div>

                    <div className='mt-20'>
                        <span style={{ background: "#f2f1f1" }} className='text-4xl text-primary rounded-2xl py-4 px-8'>
                            2
                        </span>

                        <h6 className='font-bold text-sm mt-6'>Create your free account</h6>
                        <p className='text-xs mt-2'>
                            Click here to set up your Eazipay account.
                        </p>
                    </div>

                    <div>
                        <img className='absolute bottom-20 -right-24' src={step2} alt="step" />
                    </div>

                    <div className='mt-20'>
                        <span style={{ background: "#f2f1f1" }} className='text-4xl text-primary rounded-2xl py-4 px-8'>
                            3
                        </span>

                        <h6 className='font-bold text-sm mt-6'>Create your free account</h6>
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