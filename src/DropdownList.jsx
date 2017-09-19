import React from 'react';

export default class DropdownList extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const links1 = this.props.links ? this.props.links[0].links.map((link, index) => <a key={index} href={link.href}>{link.text}</a>) : "";
    const links2 = this.props.links ? this.props.links[1].links.map((link, index) => <a key={index} href={link.href}>{link.text}</a>) : "";
    return (
      <div className="dropdown">
        <button className="dropbtn">
          {this.props.title}
        </button>
        { this.props.links ? (
          <div className="dropdown-content">
            <div className="row">
              <h2>{this.props.links[0].title}</h2>
              {links1}
            </div>
            <div className="row">
              <h2>{this.props.links[1].title}</h2>
              {links2}
            </div>
          </div>)
          :
          ""
        }

      </div>
    );
  }
}
