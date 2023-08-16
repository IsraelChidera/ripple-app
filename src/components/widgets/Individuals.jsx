import React from 'react'

const Individuals = () => {
    return (
        <section className='wave-bg flex justify-center items-center h-screen'>
            <div className='mx-auto md:w-5/6'>
                <h2 className='text-5xl text-primary font-bold'> For Individuals and Businesses</h2>
                <p className='text-sm mt-2'> Join 200+ businesses using Eazipay's easy solution. </p>

                <div className='text-white grid grid-cols-3 relative '>
                    <div className=' relative z-10 bg-primary p-8 rounded-2xl'>
                        <h4 className='font-bold text-xl pb-2'>
                            Tamper-proof Payroll for LIfe
                        </h4>
                        <ul className='text-sm flex flex-col space-y-2 mt-2'>
                            <li>
                                Your staff payroll history is kept in one place forever.
                            </li>

                            <li>
                                No more excel sheet or manual records.
                            </li>

                            <li>
                                Download your payroll history anytime you need it.
                            </li>
                        </ul>
                    </div>

                    <div className='relative z-20 bg-primary p-8 rounded-2xl'>
                        <h4 className='font-bold text-xl pb-2'>
                            Tamper-proof Payroll for LIfe
                        </h4>
                        <ul className='text-sm flex flex-col space-y-2 mt-2'>
                            <li>
                                Your staff payroll history is kept in one place forever.
                            </li>

                            <li>
                                No more excel sheet or manual records.
                            </li>

                            <li>
                                Download your payroll history anytime you need it.
                            </li>
                        </ul>
                    </div>

                    <div className='relative z-30 bg-primary p-8 rounded-2xl'>
                        <h4 className='font-bold text-xl pb-2'>
                            Tamper-proof Payroll for LIfe
                        </h4>
                        <ul className='text-sm flex flex-col space-y-2 mt-2'>
                            <li>
                                Your staff payroll history is kept in one place forever.
                            </li>

                            <li>
                                No more excel sheet or manual records.
                            </li>

                            <li>
                                Download your payroll history anytime you need it.
                            </li>
                        </ul>
                    </div>
                </div>

                <p className='w-2/4 mt-10 text-sm mx-auto text-center'>
                    We are happy to answer your queries. Please, 
                    reach us at <span style={{ color: "#EA4E4B" }}> 
                    hello@myeazipay.com  </span> and expect 
                    our response shortly after.
                </p>
            </div>

        </section>
    )
}

export default Individuals