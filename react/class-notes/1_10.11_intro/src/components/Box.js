import React from "react";

class Box extends React.Component {
  render() {
    return <div className="box-wrapper">{this.props.name || "BOX"}</div>;
  }
}
export default Box;