import React from 'react';
import 'antd/dist/antd.css';

//https://www.w3schools.com/howto/howto_js_rangeslider.asp

class OriginSliderW3Comp extends React.Component {
  state = {
    inputValue: 1,
  };

  onChange = e => {

    // var height = window.getComputedStyle(document.querySelector('.slider'), '::slider-thumb')
    //        .getPropertyValue('height');
    // console.log('height : ', height);

    // var width = window.getComputedStyle(document.querySelector('.slider'), '::slider-thumb')
    // .getPropertyValue('width');
    // console.log('width : ', width );

    // document.querySelector('.slider > ')

    this.setState({
      inputValue: e.target.value
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
			<div>
			<h1>Round Range Slider</h1>
				<div className="slidecontainer">
					<input 
            type="range" 
            min="1" 
            max="100"  
            step="1"
            className="slider" 
            id="myRange" 
            onChange={this.onChange}
            value={inputValue} 
            style={{width: '200px'}}
                  />
					<p>Value: <span id="demo">{inputValue}</span></p>
					<input 
            type="range" 
            min="1" 
            max="100"  
            step="1"
            onChange={this.onChange}
            value={inputValue} 
            style={{width: '300px', height: '5px', backgroundColor: '#d3d3d3', outline: 'none'}}
          />
				</div>
			</div>
    );
  }
}

export default OriginSliderW3Comp;