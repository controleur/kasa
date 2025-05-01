import Header from "../components/Header";
import Footer from "../components/Footer";
import Slideshow from "../components/Slideshow";
import '../styles/Logement.sass'
function Logement() {
    return (
      <>
      <Header />
      <main className="logement">
        <Slideshow />
      </main>
      <Footer />
      </>
      
    );
  }
  export default Logement;