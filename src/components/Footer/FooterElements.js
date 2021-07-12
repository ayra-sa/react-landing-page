import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const FooterSec = styled.footer`
    background: #000;
    color: #fff;
    padding: 2rem 0;
`
export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`
export const TopFooter = styled.div`
    flex: 0 0 50%;
    max-width: 50%;
    margin-bottom: 1.5rem;
    align-items: center;
`
export const Logo = styled(Link)`
    color: #fff;
    font-size: 1.2em;
    font-weight: bold;
    text-decoration: none;
    
`
export const Linkto = styled(Link)`
    color: #fff;
    font-size: .85em;
    text-decoration: none;

    &:hover {
        color: #ddd;
    }
`
export const Social = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    align-items: center;
    margin-bottom: 1.5rem;
`
export const BottomFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    flex: 0 0 50%;
    max-width: 50%;
    align-items: center;
`
export const NavItem = styled.ul`
    display: flex;
    gap: 2rem;
    margin-top: 1.5rem;
`
export const Copyright = styled.p`
    color: #ddd;
    font-size: .8em;
    display: flex;
    gap: 5px;
    align-items: center;
`