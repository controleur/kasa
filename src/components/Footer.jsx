import '../styles/Footer.sass'
import logoWhite from '../assets/logo/kasa_white.svg'
function Footer() {
    return (
      <footer>
        <img src={logoWhite} alt="" />
        <p>© 2020 Kasa. All rights reserved</p>
      </footer>
    );
  }
  export default Footer;