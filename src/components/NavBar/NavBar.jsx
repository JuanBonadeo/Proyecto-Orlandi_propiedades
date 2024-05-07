import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../Logo/Logo';
import '../NavBar/navbar.css';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';




function Header() {
  const [expanded, setExpanded] = useState(false);
  const closeNavbar = () => setExpanded(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      <div className="navDesktop">
        <Navbar expand="xl" className="navBar dark navDesktop" data-bs-theme="light" expanded={expanded}>
          <Container className='mobileContainerNav'>

            <Nav className="me-auto navLinks" >
              <div className='dropdownContainer'>
                <NavDropdown className='Dropdown' show={dropdownOpen} onClick={toggleDropdown}>
                  <Link to='/comprar/urbana'><span>Propiedades Urbanas</span></Link>
                  <Link to="/comprar/rurales"><span>Propiedades Rurales</span></Link>
                </NavDropdown>
                <Link  className="primary desktop" onClick={toggleDropdown}>COMPRAR</Link>
              </div>
              <Link to="/vender" className="primary" onClick={closeNavbar}>VENDER</Link><Logo className='logo desktop' />
              <Link to="/nosotros" className="primary" onClick={closeNavbar}>NOSOTROS</Link>
              <Link to="/contacto" className="primary" onClick={closeNavbar}>CONTATCO</Link>
            </Nav>
          </Container>
        </Navbar>
      </div>

      {/* ----------------------------------MOBILE NAVBAR----------------------------------------------------------------------------------- */}
      <div className="navMobile">
        <Navbar expand="xl" className="navBarMobile" data-bs-theme="light" expanded={expanded}>
          <Container className='mobileContainerNav'>
            <Logo className='logo mobile' />
            <div className="mobileContainerNavRight">
              <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
            </div>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto navLinks" onSelect={closeNavbar}>
                <CloseOutlinedIcon  style={{ fontSize: 50 }}className="cross"aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
                <div className="collapseCont">
                  <Link to="/" className="primary" onClick={closeNavbar}>HOME</Link>
                  <Link to="/comprar/urbanos" className="primary" onClick={closeNavbar}>COMPRAR URBANOS</Link>
                  <Link to="/comprar/rurales" className="primary" onClick={closeNavbar}>COMPRAR RURALES</Link>
                  <Link to="/vender" className="primary" onClick={closeNavbar}>VENDER</Link>
                  <Link to="/nosotros" className="primary" onClick={closeNavbar}>NOSOTROS</Link>
                  <Link to="/contacto" className="primary" onClick={closeNavbar}>CONTATCO</Link>
                </div>

              </Nav>
            </Navbar.Collapse>

          </Container>
        </Navbar>
      </div>



    </>
  );
}

export default Header;
