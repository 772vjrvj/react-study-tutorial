import React from 'react';


function BasicListComponent(props) {
    const numbers = props.numbers;
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>
        {number}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

  export default BasicListComponent;
//   const numbers = [1, 2, 3, 4, 5];
//   <NumberList numbers={numbers} />  이렇게 사용해주세요





// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) =>
//       <li key={number.toString()}>
//         {number}
//       </li>
//     );
//     return (
//       <ul>{listItems}</ul>
//     );
//   }
  
//   const numbers = [1, 2, 3, 4, 5];
//   ReactDOM.render(
//     <NumberList numbers={numbers} />,
//     document.getElementById('root')
//   );