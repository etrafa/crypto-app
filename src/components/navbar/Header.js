import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../../assets/logo.png";

//styling
import "./Header.css";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link className="navbar-brand" to="/">
            <img
              alt=""
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            CryptoCurrency
          </Link>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/cryptocurrencies">
                Cryptocurrencies
              </Link>
              <Link className="nav-link" to="/exchanges">
                Exchanges
              </Link>
              <Link className="nav-link" to="/news">
                News
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
