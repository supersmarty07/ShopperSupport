import React, { Component } from "react";
import "./ImageComponent.css";
class ImageComponent extends Component {
  render() {
    return (
      <div id="image">
        <img src={this.props.url} alt="" />
      </div>
    );
  }
}

export default ImageComponent;
