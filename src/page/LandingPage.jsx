import React from 'react'
import Navbar from '../components/widgets/Navbar'
import Hero from '../components/widgets/Hero'
import Individuals from '../components/widgets/Individuals'
import How from '../components/widgets/How'

const LandingPage = () => {
    return (
        <div className=''>
            <Navbar />
            <Hero />
            <Individuals />
            <How />
        </div>
    )
}

export default LandingPage