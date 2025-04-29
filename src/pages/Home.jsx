import { Link } from "react-router";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
    <div>
      <h1>Accueil</h1>
      <Link to="/logement/c67ab8a7">Voir le logement</Link>
    </div>
    <Footer />
    </>
  );
}

export default Home;