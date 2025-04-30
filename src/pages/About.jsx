import Footer from "../components/Footer";
import Header from "../components/Header";
import mottoImg from '../assets/visuels/motto2.jpg'
import Banner from "../components/Banner";
function About() {
    return (
      <>
      <Header />
      <main>
        <Banner imgSrc={mottoImg}/>
        <h1>A Propos</h1>
      </main>
      <Footer />
      </>
    );
  }
  export default About;