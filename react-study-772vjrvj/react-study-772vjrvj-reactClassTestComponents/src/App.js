import React, { Component } from 'react';
import './App.css';
import OriginSliderW3Comp from './component/slider/origin/OriginSliderW3Comp';
import ReactColorMain from './component/ReactColor/ReactColorMain';
import ReactColor from './component/ReactColor/ReactColor';
import ReactColorful from './component/ReactColor/ReactColorful';
import SwatchesPicker from './component/ReactColor/SwatchesPicker';
import ShiftAltNumber from './component/shortcutKeys/ShiftAltNumber';


import './component/css/style.css'
  

class App extends Component {

  render() {

    return (
      <div>
        {/* <OriginSliderW3Comp /> */}
        {/* <ReactColorMain /> */}
        {/* <ReactColor /> */}
        {/* <ReactColorful /> */}
        {/* <SwatchesPicker /> */}
        <ShiftAltNumber />
      </div>
    );
  }
}

export default App;
