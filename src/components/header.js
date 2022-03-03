import './header.css';
import { NavLink } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import planet from '../images/planet.png';

const Header = () => {
  const getClass = ({ isActive }) => (isActive ? 'active' : '');

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink className={getClass} to="/">
          <Navbar.Brand className="logo" href="">
            <img src={planet} alt="A planet representing the company's logo" />
            Space Travelers Hub
          </Navbar.Brand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="links">
            <NavLink className={getClass} to="/">
              Rockets
            </NavLink>
            <NavLink className={getClass} to="/missions">
              Missions
            </NavLink>
            <NavLink className={getClass} to="/profile">
              My Profile
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
