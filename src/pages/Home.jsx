import { Link } from "react-router";

function Home() {
  return (
    <div>
      <h1>Accueil</h1>
      <Link to="/logement/c67ab8a7">Voir le logement</Link>
    </div>
  );
}

export default Home;