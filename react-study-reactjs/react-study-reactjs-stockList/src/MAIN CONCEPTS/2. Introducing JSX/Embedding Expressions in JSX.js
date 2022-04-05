import React from 'react';

  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Harper',
    lastName: 'Perez',
  };
  
  const element = <h1>Hello, {formatName(user)}!</h1>;

  function EmbeddingExpressionsInJSX() {
    return (
      element
    );
  }

export default EmbeddingExpressionsInJSX;



// {}안에 함수 넣어서 const 표현

// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
//   }
  
//   const user = {
//     firstName: 'Harper',
//     lastName: 'Perez',
//   };
  
//   const element = <h1>Hello, {formatName(user)}!</h1>;
  
//   ReactDOM.render(element, document.getElementById('root'));
  