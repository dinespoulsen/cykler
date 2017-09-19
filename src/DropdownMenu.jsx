import React from 'react';
import DropdownList from "./DropdownList.jsx";

export default class DropdownMenu extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="dropdown-menu">
        <DropdownList title={"HOTELLER"} links={
            [
              {title: "HOTELS", links: [{href: "test", text: "Hotel1"}, {href: "test", text: "Hotel2"}]},
              {title: "VILLAS", links: [{href: "test", text: "Hotel1"}, {href: "test", text: "Hotel2"}]}
            ]
          }>
        </DropdownList>
        <DropdownList title={"CYKLER"} links={
            [
              {title: "ROAD BIKES", links: [{href: "test", text: "Hotel1"}, {href: "test", text: "Hotel2"}]},
              {title: "MOUNTAIN BIKES", links: [{href: "test", text: "Hotel1"}, {href: "test", text: "Hotel2"}]}
            ]
          }>
        </DropdownList>
        <DropdownList title={"BOOK"}>
        </DropdownList>
        <DropdownList title={"OM OS"}>
        </DropdownList>
      </div>
    );
  }
}
