import '../styles/Banner.sass'

function Banner({imgSrc, mottoText}) {
    return (
      <div className='banner'>
        <img src={imgSrc} alt="" />
        {mottoText && <h1>{mottoText}</h1>}
      </div>
    );
  }
  export default Banner;