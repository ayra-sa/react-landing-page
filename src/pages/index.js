import React, {useState} from 'react'
import HeroSec from '../components/HeroSection'
import Navbar from '../components/Navbar/Navbar'
import GlobalStyle from '../globalStyles'
import CreationsPage from './Creationspage'
import Footer from '../components/Footer'
import { creationsData } from './Creationspage/Data'
import Homepage from './Homepage'
import { homeData } from './Homepage/Data'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <GlobalStyle />
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSec />
            <Homepage {...homeData}/>
            <CreationsPage {...creationsData} />
            <Footer />
        </>
    )
}

export default Home
