import '../styles/Banner.sass'
import motto from '../assets/visuels/motto1.jpg'
function Banner() {
    return (
      <div className='banner'>
        <img src={motto} alt="" />
        <h1>Chez vous, partout et ailleurs</h1>
      </div>
    );
  }
  export default Banner;