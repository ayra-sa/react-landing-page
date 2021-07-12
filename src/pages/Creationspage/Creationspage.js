import styled from 'styled-components'

export const CreationsSection = styled.section`
    margin-top: 1rem;
    padding: 1rem 0;
`
export const Top = styled.div`
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`
export const TopLabel = styled.p`
    font-size: 1.8em;
    text-transform: uppercase;
`
export const TopBtn = styled.button`
    border: 1px solid #000;
    background: transparent;
    color: #000;
    font-weight: 600;
    text-transform: uppercase;
    padding: .35rem 1.85rem;
    transition: all .3s;

    &:hover{
        background: #000;
        color: #fff;
        cursor: pointer;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const ListWrap = styled.div`
    display: flex;
    justify-content: space-around;
    /* gap: 20px; */
    flex-wrap: wrap;
    margin-top: 2.5rem;
    height: auto;
`
export const ListImg = styled.figure`
    height: auto;
    margin-bottom: 1rem;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        width: 100%;
        max-height: 200px;
        margin: 10px;
    }
`
export const Img = styled.img`
    width: 100%;
    object-fit: cover;
`