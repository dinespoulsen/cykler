import React from 'react';
import DropdownMenu from "./DropdownMenu.jsx"

export default class Header extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <header>
        <DropdownMenu></DropdownMenu>
      </header>
    );
  }
}
