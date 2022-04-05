import React from 'react';


class RenderingMultipleComponents extends React.Component {

  render() {
    const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((numbers) =>
      <li>{numbers}</li>
    );

    return (
      <ul>{listItems}</ul>
    );
  }
}

export default RenderingMultipleComponents;


// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((numbers) =>
//   <li>{numbers}</li>
// );

// ReactDOM.render(
//   <ul>{listItems}</ul>,
//   document.getElementById('root')
// );

