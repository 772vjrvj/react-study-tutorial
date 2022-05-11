import React from 'react';

//https://www.w3schools.com/howto/howto_js_rangeslider.asp


let shotcutKey = [];
let numTimeout = null;


class ShiftAltNumber extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      itemNum: 1001,
    };
  }

  
  componentDidMount(){

    window.addEventListener('keyup',function(e){
      if(e.altKey){
        if(e.keyCode >= 48 && e.keyCode <= 57){
          
          if(numTimeout !== null){
            clearTimeout(numTimeout);
          }
          
          shotcutKey = [...shotcutKey, Number(e.key)];
          
          console.log('shotcutKey keyup: ', shotcutKey);

          numTimeout = setTimeout(() => {
            shotcutKey = [];
          }, 1500);
        }
      }

      if(!e.altKey){
        if(e.keyCode >= 48 && e.keyCode <= 57){

          console.log('e : ', e);
          console.log('shotcutKey : ', shotcutKey);
          
          const shotcutKeyLen = shotcutKey.length;
          let resultNum = 0;

          if(shotcutKeyLen > 0){
            for (let index = 0; index < shotcutKeyLen; index++) {
              resultNum = resultNum + shotcutKey[index] * Math.pow(10, shotcutKeyLen - index);
            }
            resultNum = resultNum + Number(e.key);

            let reulstSpan = document.querySelector('#span_' + resultNum);
            if(reulstSpan){
              reulstSpan.style.backgroundColor = 'green';
            }

            clearTimeout(numTimeout);

          }else{
            let reulstSpan = document.querySelector('#span_' + Number(e.key));
            if(reulstSpan){
              reulstSpan.style.backgroundColor = 'green';
            }
          }
          shotcutKey = [];
        }
      }

    })
  }

  render() {

    const {itemNum} = this.state;

    const numArray = Array.from(new Array(itemNum), (x, i) => i + 1);

    const result = numArray.map(element => 
      <span 
        key = {element}
        id = {'span_'+element}
        style={{
          backgroundColor: 'white',
          border: '1px solid black',
          padding: '2px',
          margin: '2px',
          display: 'inline-block'
        }}
      >
        {element}
      </span>);

    console.log('result', result);


    return (
			<div style={{
        width: '300px'
      }}>
        {
          result
        }
			</div>
    );
  }
}

export default ShiftAltNumber;