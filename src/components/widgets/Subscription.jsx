import React from 'react';
import dots from '../assets/dots-2.svg';
import circle from '../assets/circle-2.svg';
import FilledButton from '../elements/FilledButton';
import OutlinedButton from '../elements/OutlinedButton';

export const Subscription = () => {
    return (
        <section className='relative py-6'>

            <img src={dots} className='absolute top-10 left-0' alt="dots" />
            <img src={circle} className='absolute top-0 right-0' alt="dots" />

            <div className='relative z-40 flex items-center justify-around pt-20 mx-auto md:w-5/6'>
                <div>
                    <h3>
                        <span className=' text-primary text-5xl font-bold'>
                            Get an Exclusive <br /> {" "}
                            Demo of Eazipay
                        </span>
                    </h3>

                    <p className='text-dark mt-4 leading-5'>
                        Our greatest priority is to put you and <br /> {" "}
                        your business first. Let's show you how <br /> {" "}
                        we can help.
                    </p>
                </div>

                <div style={{ borderRadius: "32px" }} className='border p-4 bg-white drop-shadow-xl'>
                    <div>
                        <h3 className='font-bold text-2xl text-center pt-4'> First things first</h3>

                        <p className='w-3/4 mx-auto text-center pt-2'>
                            We want to serve you better. Tell us a bit about
                            yourself or company
                        </p>
                    </div>

                    <div style={{ borderColor: "#E7E8E7", borderRadius: "32px" }} className='border mt-3 p-2 flex space-x-4 items-center'>
                        <FilledButton className='py-2 w-full'>
                            Individual
                        </FilledButton>

                        <OutlinedButton className='py-2 w-full'>
                            Company
                        </OutlinedButton>
                    </div>

                    <form className='mt-10 space-y-4 pb-6'>
                        <div>
                            <label className='hidden'>
                                First Name
                            </label>

                            <input
                                type="text"
                                placeholder='First Name'
                                style={{ color: "#8D8E8D", border: "1px solid #b5b6b5" }}
                                className='py-2 px-2 rounded-2xl w-full'
                            />
                        </div>

                        <div>
                            <label className='hidden'>
                                Last Name
                            </label>

                            <input
                                type="text"
                                placeholder='Last Name'
                                style={{ color: "#8D8E8D", border: "1px solid #b5b6b5" }}
                                className='py-2 px-2 rounded-2xl w-full'
                            />
                        </div>

                        <div>
                            <label className='hidden'>
                                Email
                            </label>

                            <input
                                type="email"
                                placeholder='First Name'
                                style={{ color: "#8D8E8D", border: "1px solid #b5b6b5" }}
                                className='py-2 px-2 rounded-2xl w-full'
                            />
                        </div>

                        <div>
                            <label className='hidden'>
                                Job Title
                            </label>

                            <input
                                type="text"
                                placeholder='Job Title'
                                style={{ color: "#8D8E8D", border: "1px solid #b5b6b5" }}
                                className='py-2 px-2 rounded-2xl w-full'
                            />
                        </div>

                        <div>
                            <label className='hidden'>
                                Company Size
                            </label>

                            <input
                                type="text"
                                placeholder='Company Size'
                                style={{ color: "#8D8E8D", border: "1px solid #b5b6b5" }}
                                className='py-2 px-2 rounded-2xl w-full'
                            />
                        </div>

                        <FilledButton className='py-3 w-full'>
                            Request Demo
                        </FilledButton>
                    </form>
                </div>
            </div>
        </section>
    )
}
