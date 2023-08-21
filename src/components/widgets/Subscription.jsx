import React, { useState } from 'react';
import dots from '../assets/dots-2.svg';
import circle from '../assets/circle-2.svg';
import FilledButton from '../elements/FilledButton';
import OutlinedButton from '../elements/OutlinedButton';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';

export const Subscription = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click)
    }

    return (
        <section className='relative py-3 px-3 md:py-0 md:px-0  py-6'>

            <img src={dots} className='absolute md:block hidden top-10 left-0' alt="dots" />
            <img src={circle} className='absolute md:opacity-100 opacity-30 top-0 right-0' alt="dots" />

            <div className='relative z-40 md:flex items-center justify-around pt-20 mx-auto md:w-5/6'>
                <div>
                    <h3>
                        <span className=' text-primary text-4xl md:text-5xl font-bold'>
                            Get an Exclusive <br /> {" "}
                            Demo of Eazipay
                        </span>
                    </h3>

                    <p className='md:block hidden text-dark mt-4 text-sm md:text-base md:leading-5'>
                        Our greatest priority is to put you and <br /> {" "}
                        your business first. Let's show you how <br /> {" "}
                        we can help.
                    </p>

                    <p className='block md:hidden text-dark mt-4 text-sm md:text-base md:leading-5'>
                        Our greatest priority is to put you and 
                        your business first. Let's show you how 
                        we can help.
                    </p>
                </div>

                <div style={{ borderRadius: "32px" }} className='border md:mt-0 mt-10 md:p-4 p-2 bg-white drop-shadow-xl'>
                    <div>
                        <h3 className='font-bold text-2xl text-center pt-4'> First things first</h3>

                        <p className='md:w-3/4 text-sm md:text-base mx-auto text-center pt-2'>
                            We want to serve you better. Tell us a bit about
                            yourself or company
                        </p>
                    </div>

                    <div 
                        style={{ borderColor: "#E7E8E7", borderRadius: "32px" }} 
                        className='border mt-6 md:mt-3 p-2 md:flex md:space-y-0 space-y-4 md:space-x-4 items-center'
                    >
                        {
                            click ? <FilledButton onClick={handleClick} className={`md:text-base text-xs py-2 w-full`}>
                                Individual
                            </FilledButton> :
                                <OutlinedButton onClick={handleClick} className='md:text-base text-xs py-2 w-full'>
                                    Individual
                                </OutlinedButton>
                        }

                        {
                            click ? <OutlinedButton onClick={handleClick} className=' md:text-base text-xs py-2 w-full'>
                                Company
                            </OutlinedButton> :
                                <FilledButton onClick={handleClick} className={`md:text-base text-xs py-2 w-full`}>
                                    Company
                                </FilledButton>
                        }


                    </div>

                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': {
                                                               
                            },

                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <form className='mt-10 text-xs md:text-base space-y-4 pb-6'>
                            <div>
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="First Name"
                                    multiline
                                    maxRows={4}
                                    InputProps={{ sx: { borderRadius: 6, width: '100%' } }}
                                    fullWidth
                                    placeholder='First Name'
                                />
                            </div>

                            <div>
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="Last Name"
                                    multiline
                                    maxRows={4}
                                    InputProps={{ sx: { borderRadius: 6 } }}
                                    fullWidth
                                    placeholder='Last Name'

                                />
                            </div>

                            <div>
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="Email"
                                    multiline
                                    maxRows={4}
                                    InputProps={{ sx: { borderRadius: 6 } }}
                                    fullWidth
                                    placeholder='Email'

                                />
                            </div>

                            <div>
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="Job Title"
                                    multiline
                                    maxRows={4}
                                    InputProps={{ sx: { borderRadius: 6 } }}
                                    fullWidth
                                    placeholder='Job Title'

                                />
                            </div>

                            <div>
                                <TextField
                                    id="outlined-multiline-flexible"
                                    label="Company Size"
                                    multiline
                                    maxRows={4}
                                    InputProps={{ sx: { borderRadius: 6 } }}
                                    fullWidth
                                    placeholder='Company Size'

                                />
                            </div>



                            <FilledButton className='py-3 w-full'>
                                Request Demo
                            </FilledButton>
                        </form>
                    </Box>


                </div>
            </div>
        </section>
    )
}
