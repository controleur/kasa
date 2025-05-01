import '../styles/Slideshow.sass'
import previous from '../assets/visuels/arrow_back.svg'
import next from '../assets/visuels/arrow_forward.svg'
function Slideshow() {
    return (
      <div className='slideShow'>
        <img className='slide' src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg" alt="" />
        <div className='controls'>
            <img src={previous} alt="" />
            <img src={next} alt="" />     
        </div>
        <div className='indicator'>1/4</div>
      </div>
    );
  }
  export default Slideshow;