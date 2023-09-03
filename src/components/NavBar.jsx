import { Container, Image, Nav, Navbar, Offcanvas } from "react-bootstrap";
import Logo from "../assets/Logo.svg";
import User from "../assets/User.svg";
import "../styles/NavBar/NavBar.css";

export default function NavBar() {
  return (
    <Navbar fixed="top" expand="lg">
      <Container>
        <Navbar.Brand>
          <Image src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-offcanvas" className="p-1" />
        <Navbar.Offcanvas
          id="navbar-offcanvas"
          placement="end"
          restoreFocus={false}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <Image src={Logo} />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
            <Nav>
              <Nav.Link className="text-center">Features</Nav.Link>
              <Nav.Link className="text-center">Overview</Nav.Link>
              <Nav.Link className="text-center">Store</Nav.Link>
              <Nav.Link className="text-center">Blog</Nav.Link>
              <Nav.Link className="text-center">Contact</Nav.Link>
            </Nav>
            <Container className="offcanvas-body-actions-container d-flex flex-column-reverse flex-lg-row align-items-center justify-content-between px-0 mx-0 mt-2 mt-lg-0">
              <div className="d-flex">
                <p className="switch-theme-text mb-0">Light</p>
                <span className="toggle-switch mx-3"></span>
                <p className="switch-theme-text mb-0">Dark</p>
              </div>
              <button className="sign-in-btn d-flex align-items-center justify-content-center">
                <img className="me-2" src={User} />
                <p className="mb-0">Sign in / up</p>
              </button>
            </Container>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
