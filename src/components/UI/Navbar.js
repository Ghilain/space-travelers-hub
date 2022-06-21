import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav">
    <ul className="nav-list">
      <li>
        <NavLink to="/"> Rockets </NavLink>
      </li>
      <li>
        <NavLink to="/"> Missions </NavLink>
      </li>
      <li>
        <NavLink to="/"> My Profile </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
