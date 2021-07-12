import React from 'react'
import { FaCopyright, FaFacebookSquare, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa'
import { Container } from '../../globalStyles'
import {FooterContainer, FooterSec, TopFooter, Social, BottomFooter, Logo, NavItem, Copyright, Linkto} from './FooterElements'

const Footer = () => {
    return (
        <>
            <FooterSec>
                <Container>
                    <FooterContainer>
                        <TopFooter>
                            <Logo to='/'>loopstudios</Logo>
                            <NavItem>
                                <Linkto to='/'>About</Linkto>
                                <Linkto to='/'>Careers</Linkto>
                                <Linkto to='/'>Events</Linkto>
                                <Linkto to='/'>Products</Linkto>
                                <Linkto to='/'>Support</Linkto>
                            </NavItem>
                        </TopFooter>
                        <BottomFooter>                
                            <Social>
                                <Linkto to='/'><FaFacebookSquare /></Linkto>
                                <Linkto to='/'><FaTwitter /></Linkto>
                                <Linkto to='/'><FaPinterest /></Linkto>
                                <Linkto to='/'><FaInstagram /></Linkto>
                            </Social>
                            <Copyright>
                                <FaCopyright /> Loopstdios 2020
                            </Copyright>
                        </BottomFooter>
                    </FooterContainer>
                </Container>
            </FooterSec>
        </>
    )
}

export default Footer
