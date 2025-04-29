import '../styles/Footer.sass'
import logoWhite from '../assets/logo/kasa_white.svg'
function Footer() {
    return (
      <footer>
        <img src={logoWhite} alt="" />
        <div>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
      </footer>
    );
  }
  export default Footer;