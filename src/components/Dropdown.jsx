import { useState } from 'react';
import '../styles/Dropdown.sass'
import arrow from '../assets/visuels/arrow.svg'
function Dropdown({title, content}) {
    const [isActive, setIsActive] = useState(false);
    const toggleDropdown = () => {
        setIsActive(!isActive);
      };
    return (
      <div className='dropdown'>
        <div className='title'>{title}<img src={arrow} className={isActive ? "active" : ""} alt="Afficher/Masquer le contenu" onClick={toggleDropdown} /></div>
        <div className={`content ${isActive ? "active" : ""}`}>
            <p>{content}</p>
        </div>
      </div>
    );
  }
  export default Dropdown;