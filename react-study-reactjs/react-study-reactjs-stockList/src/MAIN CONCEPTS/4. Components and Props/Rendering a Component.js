import React from 'react';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  const element = <Welcome name="Sara" />;


function RenderingAComponent() {
  return (
    element
  );
}

export default RenderingAComponent;


// JSX로 함수 호출 props넘기고
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
//   }
  
//   const element = <Welcome name="Sara" />;
//   ReactDOM.render(element, document.getElementById('root'));