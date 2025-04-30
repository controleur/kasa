import '../styles/Card.sass'
import { Link } from "react-router";

function Card({title, cover, id}) {
    return (
      <Link to={`/logement/${id}`} className='card'>    
          <div className='gradient'></div>
          <img src={cover} alt={title} />
          <p>{title}</p>
      </Link>
    );
  }
  export default Card;