import React from 'react'
import { Container } from '../../globalStyles'
import Image from '../../image/image-hero.jpg'
import {HeroContainer, HeroBg, ImgBg, HeroText, HeroTitle} from './HeroElements'

const HeroSec = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <ImgBg src={Image} type='image/jpg' />
            </HeroBg>
            <Container>
                <HeroText>
                    <HeroTitle>immersive</HeroTitle>
                    <HeroTitle>experiences</HeroTitle>
                    <HeroTitle>that deliver</HeroTitle>
                </HeroText>
            </Container>
        </HeroContainer>
    )
}

export default HeroSec
