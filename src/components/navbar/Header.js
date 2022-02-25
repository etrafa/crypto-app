import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../../assets/logo.png";
import { FaExchangeAlt, FaCoins } from "react-icons/fa";
import { BiNews } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";

//styling

const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="ms-auto"
      >
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
            <Nav className="ms-auto p-2">
              <Link className="nav-link" to="/">
                <AiOutlineHome className="mx-2" />
                Home
              </Link>
              <Link className="nav-link " to="/cryptocurrencies">
                <FaCoins className="mx-2" />
                Cryptocurrencies
              </Link>
              <Link className="nav-link" to="/exchanges">
                <FaExchangeAlt className="mx-2" />
                Exchanges
              </Link>
              <Link className="nav-link" to="/news">
                <BiNews className="mx-2" />
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
