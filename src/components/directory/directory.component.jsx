import React from "react";

import MenuItem from "../menu-item/menu-item.component";
import SECTIONS_DATA from "./directory.data.js";

import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: SECTIONS_DATA
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem subtitle="SHOP NOW" key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
