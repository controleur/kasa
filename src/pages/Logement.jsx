import { useParams, Navigate } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slideshow from "../components/Slideshow";
import logementsData from "../data/data.json";
import '../styles/Logement.sass'
function Logement() {
  const { id } = useParams();
  const logement = logementsData.find((logement) => logement.id === id);
  if (!logement) {
    return <Navigate to="/notfound" />;
  }
    return (
      <>
      <Header />
      <main className="logement">
        <Slideshow pictures={logement.pictures} />
        <h1>{logement.title}</h1>
      </main>
      <Footer />
      </>
      
    );
  }
  export default Logement;