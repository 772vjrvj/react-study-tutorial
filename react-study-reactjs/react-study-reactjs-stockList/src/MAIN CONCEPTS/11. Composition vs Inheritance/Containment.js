import React from 'react';
import '../../css/11. Composition vs Inheritance/Containment.css';

function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }
  
  function Containment() {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          Welcome
        </h1>
        <p className="Dialog-message">
          Thank you for visiting our spacecraft!
        </p>
      </FancyBorder>
    );
  }
  

  export default Containment;



// function FancyBorder(props) {
//     return (
//       <div className={'FancyBorder FancyBorder-' + props.color}>
//         {props.children}
//       </div>
//     );
//   }
  
//   function WelcomeDialog() {
//     return (
//       <FancyBorder color="blue">
//         <h1 className="Dialog-title">
//           Welcome
//         </h1>
//         <p className="Dialog-message">
//           Thank you for visiting our spacecraft!
//         </p>
//       </FancyBorder>
//     );
//   }
  
//   ReactDOM.render(
//     <WelcomeDialog />,
//     document.getElementById('root')
//   );
  