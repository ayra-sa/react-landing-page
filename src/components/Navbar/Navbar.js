import React from 'react'
import {FaBars} from 'react-icons/fa'
import { NavLogo, MobileIcon, Nav, NavContainer, NavMenu, NavItem, NavLink } from './Navbar.elements'

const Navbar = ({toggle}) => {

    // const [click, setClick] = useState(false)

    // const handleClick = () => {
    //     setClick(!click)
    // }
    

    return (
        <>
           <Nav>
               <NavContainer>
                   <NavLogo to='/'>
                       loopstudios
                   </NavLogo>
                   <MobileIcon onClick={toggle} >
                       <FaBars />
                   </MobileIcon>
                   <NavMenu>
                       <NavItem>
                           <NavLink to='/'>About</NavLink>
                       </NavItem>
                       <NavItem>
                           <NavLink to='/'>Careers</NavLink>
                       </NavItem>
                       <NavItem>
                           <NavLink to='/'>Events</NavLink>
                       </NavItem>
                       <NavItem>
                           <NavLink to='/'>Products</NavLink>
                       </NavItem>
                       <NavItem>
                           <NavLink to='/'>Supports</NavLink>
                       </NavItem>
                       {/* <NavBtn>
                           <NavLinkBtn>
                               
                           </NavLinkBtn>
                       </NavBtn> */}
                   </NavMenu>
                   
               </NavContainer>
           </Nav>
        </>
    )
}

export default Navbar