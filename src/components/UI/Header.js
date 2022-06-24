import logo from '../../logo.png';
import Navbar from './Navbar';
import './Header.css';

const Header = () => (
  <header className="header">
    <a href="/" className="brand">
      <img src={logo} alt="Space Travelers logo" className="logo" />
      <h1 className="brand-name">Space Travelers Hub</h1>
    </a>
    <Navbar />
  </header>
);

export default Header;
