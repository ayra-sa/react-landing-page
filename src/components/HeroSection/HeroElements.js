import styled from 'styled-components'

export const HeroContainer = styled.div`
    /* background-color: red; */
    display: flex;
    justify-content: center;
    height: 570px;
    z-index: 1;
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    max-width: 100%;
    height: 100%;
    overflow: hidden;
`
export const ImgBg = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    max-width: 100%;
    background: #888;
`
export const HeroText = styled.div`
    /* display: flex; */
    width: 40%;
    padding: 1.4rem;
    border: 2px solid #fff;
    position: absolute;
    top: 40%;
    /* left: 0; */

    @media screen and (max-width: 768px) {
        width: 100%;
        margin: 0 10px;
    }
`
export const HeroTitle = styled.p`
    text-transform: uppercase;
    color: #fff;
    /* word-spacing: 2px; */
    font-size: 2.75em;
    font-weight: 400;
`