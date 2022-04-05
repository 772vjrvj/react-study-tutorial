import React from 'react';
import '../../css/7. Conditional Rendering/Conditional Rendering.css';

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }
  
  function ConditionalRendering(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  

export default ConditionalRendering;
// <ConditionalRendering isLoggedIn={false} /> 으로 사용 해야함



// function UserGreeting(props) {
//     return <h1>Welcome back!</h1>;
//   }
  
//   function GuestGreeting(props) {
//     return <h1>Please sign up.</h1>;
//   }
  
//   function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//       return <UserGreeting />;
//     }
//     return <GuestGreeting />;
//   }
  
//   ReactDOM.render(
//     // Try changing to isLoggedIn={true}:
//     <Greeting isLoggedIn={false} />,
//     document.getElementById('root')
//   );