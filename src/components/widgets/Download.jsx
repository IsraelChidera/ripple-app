import React from 'react';
import dots from '../assets/dots.svg';
import stock from '../assets/stock-image.svg';
import patterns from '../assets/patterns.svg';
import appStore from '../assets/apple-icon.svg';
import googleplay from '../assets/google-play-icon.svg';

const Download = () => {
    return (
        <section
            style={{ background: "#ffe9e7" }}
            className=' mt-20 relative py-20'
        >
            <div className='mx-auto md:w-5/6 flex items-center justify-between'>

                <div>
                    <h3 className='text-5xl font-bold'>
                        <span style={{ color: "#292a29" }}>Free Forever <br /> {" "}
                            for your{" "}
                        </span>
                        <span style={{ color: "#EA4E4B" }}>salary <br /> payment</span>
                    </h3>

                    <div className='mt-10'>
                        <p className='text-xs'>Subscribe to the Eazilife today</p>
                        <div className='mt-4 flex items-center space-x-4'>
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

                <div>
                    <img src={stock} alt="a happy man holding a phone" />
                </div>
            </div>
            <img className='absolute top-0 left-40' src={dots} alt="dots icon" />


            <img src={patterns} alt="background patterns" className='centered-image' />
        </section>
    )
}

export default Download