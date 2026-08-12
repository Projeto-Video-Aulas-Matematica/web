import { useState } from 'react';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import logoUnioeste from '../../public/logo_unioeste.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Navbar className="site-header" expand="md" expanded={isMenuOpen}>
      <Container className="nav-content">
        <Navbar.Brand as={Link} to="/" className="brand" onClick={closeMenu}>
          <div className="brand-mark">
            <img src={logoUnioeste} alt="Logo da Unioeste" />
          </div>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="main-navigation"
          aria-label="Abrir menu"
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        />

        <Navbar.Offcanvas
          id="main-navigation"
          placement="end"
          onHide={closeMenu}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menu</Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="main-nav">
              <Nav.Link as={NavLink} to="/curso" onClick={closeMenu}>
                Curso
              </Nav.Link>
              <Nav.Link as={NavLink} to="/sobre" onClick={closeMenu}>
                Sobre
              </Nav.Link>
              <Nav.Link href="#contato" onClick={closeMenu}>
                Contato
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}