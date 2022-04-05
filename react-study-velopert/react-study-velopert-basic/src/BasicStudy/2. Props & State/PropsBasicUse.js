import React, { Component } from "react";

class PropsBasicUse extends Component {
  
  static defaultProps = {
    name: '신버전 기본이름' 
  }
  // 기본값 설정 최신

  render() {

    return  (
      <div>
        안녕하세요! 제 이름은<b>{this.props.name}</b>
      </div>
    );
    
  }
}




// PropsBasicUse.defaultProps={
//   name: '구버전 기본이름'
// }


export default PropsBasicUse;
