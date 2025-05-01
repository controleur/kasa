import { useParams, Navigate } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slideshow from "../components/Slideshow";
import Dropdown from "../components/Dropdown"
import logementsData from "../data/data.json";
import starActive from "../assets/visuels/star-active.svg"
import starInactive from "../assets/visuels/star-inactive.svg"
import '../styles/Logement.sass'
function Logement() {
  const { id } = useParams();
  const logement = logementsData.find((logement) => logement.id === id);
  if (!logement) {
    return <Navigate to="/notfound" />;
  }
  const showTags = (tag, index) => (
    <div className="tagElement" key={index}>
      {tag}
    </div>
  );

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <img
          key={i}
          src={i <= rating ? starActive : starInactive}
          alt={i <= rating ? "Étoile active" : "Étoile inactive"}
        />
      );
    }
    return stars;
  };
  const equipmentContent = (equipments) => (    <ul>
      {equipments.map((equipment, index) => (
        <li key={index}>{equipment}</li>
      ))}
    </ul>)
    return (
      <>
      <Header />
      <main className="logement">
        <Slideshow pictures={logement.pictures} />
        <div className="properties">
          <div className="left">
            <h1>{logement.title}</h1>
            {logement.location}
            <div className="tags">
              {logement.tags.map(showTags)}
            </div>
          </div>
          <div className="right">
            <div className="author">
              {logement.host.name}
              <img className="profilePic" src={logement.host.picture} alt={logement.host.name} />
            </div>
            <div className="notation">
              {renderStars(parseInt(logement.rating))}
            </div>
          </div>
        </div>
        <div className="more">
            <Dropdown title="Description" content={logement.description} />
            <Dropdown title="Équipements" content={equipmentContent(logement.equipments)} />
        </div>
      </main>
      <Footer />
      </>
      
    );
  }
  export default Logement;