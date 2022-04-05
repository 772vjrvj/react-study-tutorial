import React from 'react';
import '../../css/11. Composition vs Inheritance/Specialization.css';

function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }
  
  function Dialog(props) {
    return (
      <FancyBorder color="blue">
        <h1 className="Dialog-title">
          {props.title}
        </h1>
        <p className="Dialog-message">
          {props.message}
        </p>
      </FancyBorder>
    );
  }
  
  function Specialization() {
    return (
      <Dialog
        title="Welcome"
        message="Thank you for visiting our spacecraft!" />
    );
  }
  

  export default Specialization;



// function FancyBorder(props) {
//     return (
//       <div className={'FancyBorder FancyBorder-' + props.color}>
//         {props.children}
//       </div>
//     );
//   }
  
//   function Dialog(props) {
//     return (
//       <FancyBorder color="blue">
//         <h1 className="Dialog-title">
//           {props.title}
//         </h1>
//         <p className="Dialog-message">
//           {props.message}
//         </p>
//       </FancyBorder>
//     );
//   }
  
//   function WelcomeDialog() {
//     return (
//       <Dialog
//         title="Welcome"
//         message="Thank you for visiting our spacecraft!" />
//     );
//   }
  
//   ReactDOM.render(
//     <WelcomeDialog />,
//     document.getElementById('root')
//   );
  