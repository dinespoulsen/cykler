import React from 'react';

export default class ImgCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      image: "./public/img/cake.jpg",
      images: [
        "./img/cake2.jpg",
        "./img/ocean2.jpg",
        "./img/food2.jpg"
      ]
    }

    this.getImage = this.getImage.bind(this);
    this.leftButtonClickHandler = this.leftButtonClickHandler.bind(this);
    this.rigthButtonClickHandler = this.rigthButtonClickHandler.bind(this);
    this.onCircleClick = this.onCircleClick.bind(this);
    this.getCircleClass = this.getCircleClass.bind(this);
  }

  getImage() {
    return this.state.images[this.state.index];
  }

  leftButtonClickHandler() {
    clearInterval(this.state.intervalId);
    if(this.state.index === 0){
      this.setState({
        index: 2,
        image: this.state.images[2]
      })
    }
    else {
      this.setState({
        index: this.state.index - 1,
        image: this.state.images[this.state.index -1]
      })
    }
    this.startTimer();
  }

  rigthButtonClickHandler() {
    clearInterval(this.state.intervalId);
    if(this.state.index === 2){
      this.setState({
        index: 0,
        image: this.state.images[0]
      })
    }
    else {
      this.setState({
        index: this.state.index + 1,
        image: this.state.images[this.state.index + 1]
      })
    }
    this.startTimer();
  }

  onCircleClick(event) {
    clearInterval(this.state.intervalId);
    let index = event.target.getAttribute('class').split(" ")[1].split("-")[1];
    this.setState({
      index: parseInt(index)
    })
    this.startTimer();
  }

  getCircleClass(index) {
    let className = `carousel-circle circle-${index}`;
    if(this.state.index === index){
      className += " active";
    }
    return className;
  }

  componentDidMount() {
    this.startTimer()
  }

  startTimer() {
    let intervalId = setInterval(this.rigthButtonClickHandler, 7000);
    this.setState({intervalId: intervalId});
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return (
      <div className="carousel-container">
        <h2>SYKKELFERIE I SELVA</h2>
        <p className="carousel-text">Den ultimatime sykkelferie i Mallorca's Tramuntanabjerge</p>
        <button className="carousel-button">BOOK MIN SYKKELFERIE</button>
        <i className="carousel-left-button" onClick={this.leftButtonClickHandler}>&#x34;</i>
        <i className="carousel-right-button" onClick={this.rigthButtonClickHandler}>&#x35;</i>
        {<img src={this.getImage()}/>}
        <ul className="carousel-circles">
          <li className={this.getCircleClass(0)} onClick={this.onCircleClick}></li>
          <li className={this.getCircleClass(1)} onClick={this.onCircleClick}></li>
          <li className={this.getCircleClass(2)} onClick={this.onCircleClick}></li>
        </ul>
      </div>
    );
  }
}
