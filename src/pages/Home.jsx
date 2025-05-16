import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Card from "../components/Card";
import mottoImg from "../assets/visuels/motto1.jpg";
import "../styles/Home.sass";
import { useEffect, useState } from "react";
function Home() {
  const [logementsData, setLogementsData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setLogementsData(data))
      .catch((error) => console.error("Erreur lors du chargement des données :", error));
  }, []);
  return (
    <>
      <Header />
      <main>
        <Banner imgSrc={mottoImg} mottoText="Chez vous, partout et ailleurs" />
        <div className="gallery">
          {logementsData.map((logement) => (
            <Card
              title={logement.title}
              cover={logement.cover}
              id={logement.id}
              key={logement.id}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Home;
