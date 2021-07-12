import styled from 'styled-components'

export const HomePageSection = styled.section`
    margin-top: 1rem;
    position: relative;
    padding: 1.2rem 0;
`
export const HomeContent = styled.div`
    padding: 1rem 0;
    display: flex;
    position: relative;

    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`
export const HomeImg = styled.figure`
    /* display: block; */
    max-width: 100%;
    height: 100%;
`
export const Img = styled.img`
    width: 100%;
`
export const HomeText = styled.div`
    position: absolute;
    background: #fff;
    padding: 3.3rem 0 1rem 4rem;
    width: 500px;
    left: 40%;
    bottom: 0;

    @media screen and (max-width: 768px) {
        position: relative;
        display: block;
        left: 0;
        text-align: center;
        padding: 1rem;
        max-width: 100%;
    }
`
export const Label = styled.p`
    font-size: 2.25em;
    margin-bottom: 1rem;
    text-transform: uppercase;
`
export const Desc = styled.p`
    font-size: .9em;
`