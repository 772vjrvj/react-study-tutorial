import React, { Component } from "react";
import { SketchPicker } from "react-color";

class ReactColor extends React.Component {
  state = {
    displayColorPicker: false,
    color: '#ffff'
  };

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };
  handleColorChange = color => {
    this.setState({
      color: color.hex,
      //rgb를 사용하면 아래 드래그 됨
      opa: color.rgb.a
    });
  };
  render() {
    console.log("color", this.state.color);
    console.log("opa", this.state.opa);
    const popover = {
      position: "absolute",
      zIndex: "2"
    };
    const cover = {
      position: "fixed",
      top: "0px",
      right: "0px",
      bottom: "0px",
      left: "0px"
    };
    return (
      <div>
        <button onClick={this.handleClick} style={{ backgroundColor: this.state.color }}>{this.state.color}</button>
        {this.state.displayColorPicker ? (
          <div style={popover}>
            <div style={cover} onClick={this.handleClose} />
            <SketchPicker
              color={this.state.color}
              onChange={this.handleColorChange}
              onSwatchHover={(color, e) => {
                console.log("color", color);
              }}
            />
            <div>{this.state.color}</div>
          </div>
        ) : null}
        <div style={{ color: this.state.color }}>{this.state.color}</div>
      </div>
    );
  }
}

export default ReactColor;