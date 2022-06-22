import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="nav">
    <ul className="nav-list">
      <li>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}> Rockets </NavLink>
      </li>
      <li>
        <NavLink to="/mission" className={({ isActive }) => (isActive ? 'active' : '')}> Missions </NavLink>
      </li>
      <li>
        <NavLink to="/profile" className={({ isActive }) => (isActive ? 'active' : '')}> My Profile </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
