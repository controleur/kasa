import { useState } from 'react';
import '../styles/Slideshow.sass'
import previous from '../assets/visuels/arrow_back.svg'
import next from '../assets/visuels/arrow_forward.svg'
function Slideshow({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
      };
    
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
    };
    const controls = (<>
    <div className='controls'>
        <img src={previous} alt="Précédent" onClick={handlePrevious} />
        <img src={next} alt="Suivant" onClick={handleNext} />     
    </div>
    <div className='indicator'>{currentIndex + 1}/{pictures.length}</div>
    </>)
    return (
      <div className='slideShow'>
        <img className='slide' src={pictures[currentIndex]} alt={`Image ${currentIndex + 1}`} />
        {pictures.length>1 ? controls : ""}
    </div>
    );
  }
  export default Slideshow;