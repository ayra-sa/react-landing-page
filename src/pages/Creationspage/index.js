import React from 'react'
import { Container } from '../../globalStyles'
import {CreationsSection, Top, TopLabel, TopBtn, ListWrap, ListImg, Img} from './Creationspage'

const CreationsPage = ({
    id, toplabel, btnlabel, img1, img2, img3, img4, img5, img6, img7, img8, alt1, alt2, alt3, alt4, alt5, alt6, alt7, alt8
    }) => {
    return (
        <>
            <CreationsSection id={id}>
                <Container>
                    <Top>
                        <TopLabel>{toplabel}</TopLabel>
                        <TopBtn>{btnlabel}</TopBtn>
                    </Top>
                    <ListWrap>
                        <ListImg><Img src={img1} alt={alt1} /></ListImg>
                        <ListImg><Img src={img2} alt={alt2} /></ListImg>
                        <ListImg><Img src={img3} alt={alt3} /></ListImg>
                        <ListImg><Img src={img4} alt={alt4} /></ListImg>
                        <ListImg><Img src={img5} alt={alt5} /></ListImg>
                        <ListImg><Img src={img6} alt={alt6} /></ListImg>
                        <ListImg><Img src={img7} alt={alt7} /></ListImg>
                        <ListImg><Img src={img8} alt={alt8} /></ListImg>
                    </ListWrap>
                </Container>
            </CreationsSection>
        </>
    )
}

export default CreationsPage
