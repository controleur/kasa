import { Link } from "react-router";
import '../styles/Header.sass'
import logo from '../assets/logo/kasa.svg'
function Header() {
    return (
      <header>
        <img src={logo} alt="" />
        <nav>
          <Link to="/">Accueil</Link>
          <Link to="/about">A Propos</Link>
        </nav>
      </header>
    );
  }
  export default Header;