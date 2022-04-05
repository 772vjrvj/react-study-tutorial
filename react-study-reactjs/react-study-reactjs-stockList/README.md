 1. Hello World
 Hello World.js
 단순 Hello, world! 출력 


2. Introducing JSX
 Embedding Expressions in JSX.js
 {}안에 함수 넣어서 const 표현


3. Rendering Elements  
 Updating the Rendered Element.js
 시간(시계) 가저오는 것인데 ReactDOM.render을계속 호출 (사용 X)

 Rendering an Element into the DOM.js
 단순 Hello, world지만 const 로 


 4. Components and Props
 Rendering a Component.js
 JSX로 함수 호출 props넘기고

 Composing Components.js
 JSX 함수 호출 해서 여러개 넘기기

 
 5. State and Lifecycle
 State and Lifecycle1.js
 시간(시계) 가저오는 것인데 ReactDOM.render을계속 호출 
 (사용 X)

 State and Lifecycle2.js
 시간(시계) 가저오는 것인데 ReactDOM.render을계속 호출 
 -컴포넌트화 (사용 X)

 Converting a Function to a Class.js
 시간(시계) 가저오는 것인데 ReactDOM.render을계속 호출 
 -컴포넌트화 클래스화 (사용 X) 

 Adding Local State to a Class.js
 시간(시계) 시간 construct 에서 초기화 클래스형식 시간 정지

 Adding Lifecycle Methods to a Class.js
 시간(시계) 시간 construct 에서 초기화 클래스형식 시간 시작 
 mount update (사용 O)

 The Data Flows Down.js
 시간(시계) 시간 construct 에서 초기화 클래스형식 시간 시작 
 시간 나오는 곳 컴포넌트로
 mount update (사용 O) 

  The Data Flows Down2.js
 시간(시계) 시간 construct 에서 초기화 클래스형식 시간 시작 
 시계 컴포넌트로 시간 나오는 곳 컴포넌트로 
 mount update (사용 O)  시계 최종 버전


 6. Handling Events (css 사용 O)
  Handling Events.js
  함수 this binding Toggle


 7. Conditional Rendering
  Conditional Rendering.js
  조건 랜더링 

  Element Variables.js
  조건 랜더링 버튼 누를 때마다 바뀜

  Inline If with Logical && Operator.js
  && 랜더링 
  
  Preventing Component from Rendering.js
  3항 랜더링 


  8. Lists and Keys
  Rendering Multiple Components.js
  ul li list 기본 props

  Basic List Component.js
  ul li list 외부입력 props key는 li 내부에서 넣음

  Extracting Components with Keys.js
  ul li list 외부입력 props key는 li 외부에서 넣음

  Keys Must Only Be Unique Among Siblings.js 
  key는 같은 태그 안에서 유일해야함

  Embedding map() in JSX.js key 넣기 최종


  9. Forms
  Controlled Components.js
  input textarea 에 state 활용
  
  The select Tag.js
  select사용 

  Handling Multiple Inputs.js
  여러개 사용 input number, checkBOx


  10. Lifting State Up
  Lifting State Up.js
  state값 위로 올리기

  Adding a Second Input.js
  state값 위로 올리기 2개 다른 값도 활용 정적

  LiftingStateUp2
  state값 위로 올리기 2개 다른 값도 활용 동적


  11. Composition vs Inheritance
  Containment.js
  props로 자식과 className넘김

  Containment2.js
  props로 자식들과 className들넘김 많이 넘김1

  Specialization.js
  props로 자식들과 className들넘김 많이 넘김2

  Specialization2.js
  props로 자식들과 className들넘김 많이 넘김3


  12. Thinking In React
  Step 2 Build A Static Version in React.js
  재고 검색 껍데기만

  Step 4 Identify Where Your State Should Live.js
  state 이용
  
  Step 5 Add Inverse Data Flow.js
  stock 예제 최종버전