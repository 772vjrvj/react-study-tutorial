import React, { Component } from "react";
import { HexColorPicker, HslaColorPicker, HslaStringColorPicker, 
  HsvaStringColorPicker, HsvStringColorPicker, RgbColorPicker, HexColorInput, RgbaColorPicker} from "react-colorful";


class ReactColorful extends React.Component {
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
    console.log('color :', color);
  };


  render() {
    console.log("color", this.state.color);
  
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
        <button onClick={this.handleClick} style={{ backgroundColor: this.state.color }}>Pick Color</button>
        {this.state.displayColorPicker ? (
          <div style={popover}>
            <div style={cover} onClick={this.handleClose} />
            <RgbaColorPicker
              color={this.state.color}
              onChange={this.handleColorChange}
            />
            <div>{this.state.color}</div>
          </div>
        ) : null}
        <div style={{ color: this.state.color }}>name</div>
      </div>
    );
  }
}

export default ReactColorful;