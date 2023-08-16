import React from 'react'
import Navbar from '../components/widgets/Navbar'
import Hero from '../components/widgets/Hero'
import Individuals from '../components/widgets/Individuals'
import How from '../components/widgets/How'
import Download from '../components/widgets/Download'

const LandingPage = () => {
    return (
        <div className=''>
            <Navbar />
            <Hero />
            <Individuals />
            <How />
            <Download />
        </div>
    )
}

export default LandingPage