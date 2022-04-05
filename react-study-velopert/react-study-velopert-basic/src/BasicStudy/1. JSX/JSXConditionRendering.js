import React, { Component } from "react";

class JSXConditionRendering extends Component {
  
  render() {
    const name = 'velopert!';
    const value = 1;
    return  (
      <div>
        <div>
          {
            1 + 1 === 2 
            ? '맞다' 
            : '틀리다'
          }
        </div>
        <div>
          {
            name === 'velopert!' && <div>벨로퍼트다!</div>
          }
        </div>
        <div>
          {
            (function(){
              if (value === 1) return <div>1이다!</div>
              if (value === 2) return <div>2이다!</div>
              if (value === 3) return <div>3이다!</div>
              return <div>없다</div>
            })()
          }
        </div>
        <div>
          {
            (() =>{
              if (value === 1) return <div>1이다!</div>
              if (value === 2) return <div>2이다!</div>
              if (value === 3) return <div>3이다!</div>
              return <div>없다</div>
            })()
          }
        </div>
      </div>
    );
    
  }
}

export default JSXConditionRendering;
