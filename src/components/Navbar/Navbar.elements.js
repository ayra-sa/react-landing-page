import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { Container } from '../../globalStyles'

export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    z-index: 10;
`

export const NavContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${Container}
`
export const NavLogo = styled(Link)`
    display: flex;
    cursor: pointer;
    font-weight: bold;
    font-size: 2em;
    text-decoration: none;
    color: #fff;
`
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        cursor: pointer;
        color: #fff;
        font-size: 2em;
        transform: translate(-100%, 60%);
    }
`
export const NavMenu = styled.ul`
    display: flex;
    gap: 2em;
    list-style: none;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
export const NavItem = styled.li`
    border-bottom: 1px solid transparent;
    transition: .4s;
    margin-bottom: 5px;
    &:hover {
        border-bottom: 1px solid #fff;
    }
`
export const NavLink = styled(Link)`
    display: flex;
    color: #fff;
    text-decoration: none;
`
export const NavBtn = styled.li`
    display: flex;
`
export const NavLinkBtn = styled(Link)`
    text-decoration: none;
`