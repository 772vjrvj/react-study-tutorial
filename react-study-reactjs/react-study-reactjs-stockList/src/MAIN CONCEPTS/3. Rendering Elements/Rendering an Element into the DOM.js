import React from 'react';

const element = <h1>Hello, world</h1>;

function RenderingAnElementIntoTheDOM() {
  return (
    element
  );
}

export default RenderingAnElementIntoTheDOM;


// 단순 Hello, world지만 const 로 

// const element = <h1>Hello, world</h1>;
// ReactDOM.render(element, document.getElementById('root'));
