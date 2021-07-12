import styled from 'styled-components'
import {FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const SidebarContainer = styled.aside`
    position: fixed;
    width: 100%;
    height: 100%;
    display: grid;
    background: #0d0d0d;
    transition: .3s ease-in-out;
    z-index: 999;
    left: 0;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`
export const CloseIcon = styled(FaTimes)`
    color: #fff;
    font-size: 2em;
`
export const Icon = styled.div`
    position: absolute;
    background: transparent;
    outline: none;
    top: 1.2rem;
    right: 1.5rem;
    cursor: pointer;
`
export const SidebarWrapper = styled.div`
    color: #fff;
    overflow-y: hidden;
`
export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    margin-top: 10rem;
    
    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`
export const SidebarLink = styled(Link)`
    display: flex;
    justify-content: center;
    text-decoration: none;
    color: #fff;
    transition: .3s;

    &:hover{
        color: #ddd;
        cursor: pointer;
    }
`
