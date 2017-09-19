import React from 'react';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import ImgCarousel from "./ImgCarousel.jsx";


export default class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <Header></Header>
        <ImgCarousel>
        </ImgCarousel>
        <div className="intro">
          <h2>SELVA SYKKELFERIE</h2>
          <div className="intro-text-container">
            <p>Rejs til fantastiske Selva og bo i en traditionel og autentisk bjerglandsby for foden af Tramuntanabjergene. Ideel belligenhed for sommerens cykeloplvelser.</p>
          </div>
        </div>

        <div className="front-image">
          <div className="front-image-text-container">
            <h2>PERSONLIGE SYKKELREJSER</h2>
            <div className="intro-text-container">
              <p>Our surf camps are world famous for providing great accommodation and amazing surf experiences, but more than anything; endless amounts of Lapoint's trademark #Goodtimes.</p>
            </div>
            <div className="front-image-button-container">
              <button>VIL DU VIDE MERE?</button>
            </div>
          </div>
          <img src="./img/mountains.jpg"/>
        </div>

        <Footer></Footer>
      </div>
    );
  }
}
