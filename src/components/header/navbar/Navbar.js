import { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  Offcanvas,
} from "react-bootstrap";
import logo from '../../../assets/icon/logo.png'

const NavbarTop = () => {
  const [colorChange, setColorchange] = useState(false);

  const changeNavbarColor = () =>{
    if(window.scrollY >= 50){
      setColorchange(true);
    }
    else{
      setColorchange(false);
    }
  };

  window.addEventListener('scroll', changeNavbarColor);

  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} expand={expand} fixed="top" className={colorChange ? 'bg-light pt-3 pb-3 trans-02' : 'bg-transparent trans-02'}>
          <Container>
            <Navbar.Brand href="/">
              <img src={logo} alt=""/>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls={`expand-${expand}`} />
            <Navbar.Offcanvas
              className="offCanvas"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`expand-${expand}`}
              placement="end">
                
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`expand-${expand}`}>
                  BCR
                </Offcanvas.Title>
              </Offcanvas.Header>
              
              <Offcanvas.Body className="navbar-list justify-content-end">
                <Nav className="navbar-list">
                  <Nav.Link className="list-a" href=" ">Our Service</Nav.Link>
                  <Nav.Link className="list-a" href=" ">Why Us</Nav.Link>
                  <Nav.Link className="list-a" href=" ">Testimonial</Nav.Link>
                  <Nav.Link className="list-a" href=" ">FAQ</Nav.Link>
                  <Nav.Link className="list-a" href=" "></Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarTop;
