import React from 'react'
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/' onClick={toggle}>About</SidebarLink>
                
                    <SidebarLink to='/' onClick={toggle}>Careers</SidebarLink>
                
                    <SidebarLink to='/' onClick={toggle}>Events</SidebarLink>
                
                    <SidebarLink to='/' onClick={toggle}>Products</SidebarLink>
                
                    <SidebarLink to='/' onClick={toggle}>Support</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
