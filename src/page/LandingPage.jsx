import React from 'react'
import Navbar from '../components/widgets/Navbar'
import Hero from '../components/widgets/Hero'
import Individuals from '../components/widgets/Individuals'
import How from '../components/widgets/How'
import Download from '../components/widgets/Download'
import { Subscription } from '../components/widgets/Subscription'
import Footer from '../components/widgets/Footer'

const LandingPage = () => {
    return (
        <div className=''>
            <Navbar />
            <Hero />
            <Individuals />
            <How />
            <Download />
            <Subscription />
            <Footer />
        </div>
    )
}

export default LandingPage