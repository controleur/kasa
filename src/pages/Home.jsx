import { Link } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import mottoImg from '../assets/visuels/motto1.jpg'

function Home() {
  return (
    <>
    <Header />
    <main>
      <Banner imgSrc={mottoImg} mottoText='Chez vous, partout et ailleurs' />
      <h1>Accueil</h1>
      <Link to="/logement/c67ab8a7">Voir le logement</Link>
    </main>
    <Footer />
    </>
  );
}

export default Home;