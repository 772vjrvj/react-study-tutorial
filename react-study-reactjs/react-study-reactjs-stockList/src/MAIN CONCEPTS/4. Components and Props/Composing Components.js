import React from 'react';

function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
  }
  
  function ComposingComponents() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edite" />
      </div>
    );
  }

export default ComposingComponents;




// JSX 함수 호출 해서 여러개 넘기기
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
//   }
  
//   function App() {
//     return (
//       <div>
//         <Welcome name="Sara" />
//         <Welcome name="Cahal" />
//         <Welcome name="Edite" />
//       </div>
//     );
//   }
  
//   ReactDOM.render(<App />, document.getElementById('root'));
  