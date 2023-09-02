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
        <Navbar.Toggle aria-controls="navbar__offcanvas" />
        <Navbar.Offcanvas id="navbar__offcanvas" placement="end">
          <Offcanvas.Body className="d-flex flex-column flex-lg-row justify-content-between">
            <Nav>
              <Nav.Link>Features</Nav.Link>
              <Nav.Link>Overview</Nav.Link>
              <Nav.Link>Store</Nav.Link>
              <Nav.Link>Blog</Nav.Link>
              <Nav.Link>Contact</Nav.Link>
            </Nav>
            <Container className="offcanvas-body__actions-container d-flex align-items-center px-0 mx-0">
              <div className="d-flex justify-content-between">
                <p className="mb-0">Light</p>
                <span className="toggle-switch mx-3"></span>
                <p className="mb-0">Dark</p>
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
