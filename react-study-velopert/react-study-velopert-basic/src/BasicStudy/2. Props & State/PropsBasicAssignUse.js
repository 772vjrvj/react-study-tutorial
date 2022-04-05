import React from "react";

//비구조 할당 이런 느낌
//const object = {a:1, b:2};
//const {a, b} = object

function sayHello({name, age}) {
  console.log(name+'의 나이는'+age);
}

sayHello({name: 'react', age: '몰라'});


// const PropsBasicAssignUse = (defaultProps) => {
//   return <div>안녕하세요 제 이름은 {defaultProps.name} 입니다.</div>
// }; 아래가 비구조 할당 속성 한번에 받기

const PropsBasicAssignUse = ({name}) => {
  return <div>안녕하세요 제 이름은 {name} 입니다.</div>
};


PropsBasicAssignUse.defaultProps={
  name: 'velopert'
}


export default PropsBasicAssignUse;

//<PropsBasicAssignUse name='고승현 772' /> 이런식으로 name줘서 활용 없으면 default로 가겠지

