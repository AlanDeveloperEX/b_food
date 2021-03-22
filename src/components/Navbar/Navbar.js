import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks } from './Navbar.elements';

const Navbar = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const [sticky , setSticky] = useState(false);

  const handleStick = () => {
    let scroll = window.scrollY
    if (scroll >= 90) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }

  const ScrollTo = () => {
    window.location = '#search'
  }

  window.addEventListener('scroll', handleStick);

  return (
    <>
      <Nav sticky = { sticky } >
        <NavbarContainer sticky = { sticky }>
          <NavLogo to="/">
            <NavIcon />
          </NavLogo>

          <MobileIcon onClick={handleClick} >
            {click ? <FaTimes/> : <FaBars/> }
          </MobileIcon>

          <NavMenu onClick={handleClick} click={click} >
            <NavItem >
              <NavLinks to='/' >
                Home
              </NavLinks>
            </NavItem>
            
            <NavItem >
              <NavLinks onClick={ScrollTo} to='' >
                Search
              </NavLinks>
            </NavItem>

            <NavItem >
              <NavLinks to='/promo' >
                Promo
              </NavLinks>
            </NavItem>

            <NavItem >
              <NavLinks to='/about' >
                About
              </NavLinks>
            </NavItem>

            <NavItem >
              <NavLinks to='/contact' >
                Contact
              </NavLinks>
            </NavItem>

          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;
