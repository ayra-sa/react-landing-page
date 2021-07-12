import React from 'react'
import { Container } from '../../globalStyles'
import { HomePageSection, HomeContent, HomeImg, Img, HomeText, Label, Desc } from './Homepage'

const Homepage = ({id, img, alt, label, desc}) => {
    return (
        <>
            <HomePageSection id={id}>
                <Container>
                    <HomeContent>
                        <HomeImg>
                            <Img src={img} alt={alt} />
                        </HomeImg>
                        <HomeText>
                            <Label>{label}</Label>
                            <Desc>{desc}</Desc>
                        </HomeText>
                    </HomeContent>
                    
                </Container>
            </HomePageSection>
        </>
    )
}

export default Homepage
