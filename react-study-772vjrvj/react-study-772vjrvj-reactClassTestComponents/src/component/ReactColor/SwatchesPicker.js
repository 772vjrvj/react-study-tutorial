import React, { Component } from "react";
import { HexColorPicker } from "react-colorful";


class SwatchesPicker extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      displayColorPicker: false,
      inputColor: '#ffff',
      color: '#ffff',
      presetColors: ["#cd9323", "#1a53d8", "#9a2151", "#0d6416", "#8d2808", "#cd9323", "#1a53d8", "#9a2151", "#0d6416", "#8d2808"]
    };
  }

  handleClick = () => {
    this.setState({ displayColorPicker: !this.state.displayColorPicker });
  };

  handleClose = () => {
    this.setState({ displayColorPicker: false });
  };

  handleColorChange = color => {
    console.log('color : ', color);
    this.setState({ 
      color: color
    })
  };

  inputColor = e => {
    this.setState({
      color: e.target.value
    })
  }

  colorSelect = () => {
    this.setState({
      displayColorPicker: false
    })
  }

  colorCancel = () => {
    this.setState({
      color: '#ffff',
      displayColorPicker: false
    })
  }


  render() {
    return (
      <div>
        <button onClick={this.handleClick} style={{ backgroundColor: this.state.color }}>{this.state.color}</button>
        {this.state.displayColorPicker ? (
          
          <div className="picker">
            <HexColorPicker 
              color={this.state.color} 
              onChange={(e) => this.handleColorChange(e)} 
            />
            <div className="picker__swatches_box">
              <button class="select" onClick={this.colorSelect}>select</button><button class="cancel" onClick={this.colorCancel}>cancel</button>
              <div><input class="colorInput" onChange={this.inputColor} value={this.state.color}/></div>
            </div>
            <div className="picker__swatches">
              {this.state.presetColors.map((presetColor, idx) => (
                <button
                  key={idx}
                  className="picker__swatch"
                  style={{ background: presetColor }}
                  onClick={(e) => this.handleColorChange(presetColor)}
                />
              ))}
            </div>
          </div>
        ) : null}
        <div style={{ color: this.state.color }}>name</div>
      </div>
    );
  }
}

export default SwatchesPicker;