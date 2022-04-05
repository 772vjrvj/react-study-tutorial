import React from 'react';
import '../../css/7. Conditional Rendering/Inline If with Logical && Operator.css';


function InlineIfWithLogicalAndOperator(props) {
  const unreadMessages = props.unreadMessages;
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 &&
        <h2>
          You have {unreadMessages.length} unread messages.
        </h2>
      }
    </div>
  );
}



export default InlineIfWithLogicalAndOperator;
// <Mailbox unreadMessages={messages} />
// const messages = ['React', 'Re: React', 'Re:Re: React'];  2개 넣어서 호출해주세요


// function Mailbox(props) {
//   const unreadMessages = props.unreadMessages;
//   return (
//     <div>
//       <h1>Hello!</h1>
//       {unreadMessages.length > 0 &&
//         <h2>
//           You have {unreadMessages.length} unread messages.
//         </h2>
//       }
//     </div>
//   );
// }

// const messages = ['React', 'Re: React', 'Re:Re: React'];
// ReactDOM.render(
//   <Mailbox unreadMessages={messages} />,
//   document.getElementById('root')
// );

