import React from 'react';
import '../../css/8. Lists and Keys/Embedding map() in JSX.css';

function ListItem(props) {
    return <li>{props.value}</li>;
  }
  
  function EmbeddingMapInJSX(props) {
    const numbers = props.numbers;
    return (
      <ul>
        {numbers.map((number) =>
          <ListItem key={number.toString()}
                    value={number} />
        )}
      </ul>
    );
  }
  


export default EmbeddingMapInJSX;
// const numbers = [1, 2, 3, 4, 5];
// <NumberList numbers={numbers} />




// function ListItem(props) {
//     return <li>{props.value}</li>;
//   }
  
//   function NumberList(props) {
//     const numbers = props.numbers;
//     return (
//       <ul>
//         {numbers.map((number) =>
//           <ListItem key={number.toString()}
//                     value={number} />
//         )}
//       </ul>
//     );
//   }
  
//   const numbers = [1, 2, 3, 4, 5];
//   ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('root')
//   );