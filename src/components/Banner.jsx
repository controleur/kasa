import "../styles/Banner.sass";

function Banner({ imgSrc, mottoText, lighter }) {
  return (
    <div className={`banner ${lighter ? "lighter" : ""}`}>
      <img src={imgSrc} alt="" />
      {mottoText && <h1>{mottoText}</h1>}
    </div>
  );
}
export default Banner;
