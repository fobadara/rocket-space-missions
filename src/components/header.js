import './header.css';
import { NavLink } from 'react-router-dom';
import planet from '../images/planet.png';

const Header = () => {
  const getClass = ({ isActive }) => (isActive ? 'active' : '');

  return (
    <nav className="navbar">
      <NavLink to="/">
        <h1 className="logo">
          <img src={planet} alt="A planet representing the company's logo" />
          Space Travelers Hub
        </h1>
      </NavLink>
      <ul className="links">
        <li>
          <NavLink className={getClass} to="/">
            Rockets
          </NavLink>
        </li>
        <li>
          <NavLink className={getClass} to="/missions">
            Missions
          </NavLink>
        </li>
        <li>
          <NavLink className={getClass} to="/profile">
            My Profile
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
