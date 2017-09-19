import React from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <footer>
        <div className="col-1">
          <h2>EN UNIK CYKELOPLVELSE</h2>
          <p>Our surf camps are world famous for providing great accommodation and amazing surf experiences, but more than anything; endless amounts of Lapoint's trademark #Goodtimes. In fact, Lapoint staff around the world have one major goal in common; to enthusiastically share our love and knowledge about surfing and thereby provide all our guests with the best surf </p>
        </div>
        <div className="col-1">
          <h2>SIDSTE NYT</h2>
          <p>Life at the surf camp in Sri Lanka</p>
          <p>15 % off on Sri Lanka, Bali & Costa Rica</p>
        </div>
        <div className="col-1">
          <h2>HOLD KONTAKTEN</h2>
          <p>Telefon: +45 26 83 48 10</p>
          <p>Telefontid: CET 11.00-15.00</p>
          <p>Email: selva@cykler.dk</p>
          <button className="faq-button">FAQ</button>
          <div className="social-icons">
            <i>&#xe093;</i>
            <i>&#xe09a;</i>
            <i>&#xe0a8;</i>
            <i>&#xe094;</i>
          </div>
          <p>Hold dig opdateret! Meld dig til vores nyhedsbrev!</p>
          <div className="newsletter">
            <input type="text"/>
            <button className="newsletter-button">GO</button>
          </div>
          <p>Plaça Major 1, 07313 Selva, Mallorca, Spanien</p>
          <p>&copy; cykler.com 2017</p>
        </div>
      </footer>
    );
  }
}
