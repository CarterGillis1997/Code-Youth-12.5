import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Goodbye from './classes';
// import Buttons from "./symbols"
import TodoList from './array';
import Database from './database';
import Counter from './counter';
import ControlledInput from './controlledInput';
// import Boxes from './style';
// import Multiple from './multiple';
import Initial from './functionalComponents';
import Tip from './expenses';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <Header />
    <Addition num1={5} num2={10} />
    <Addition num1={52} num2={34} />
    <Greeting user="Carter" />
    <Greeting user="Jurimo" /> */}
    {/* <Goodbye name="Carter" /> */}
    {/* <Buttons /> */}
    {/* <TodoList /> */}
    {/* <Database /> */}
    {/* <Counter /> */}
    {/* <ControlledInput /> */}
    {/* <Boxes /> */}
    {/* <Multiple /> */}
    {/* <Initial /> */}
    <Tip />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

function Header(){
  return(
    <div>
      <h2>Title</h2>
      <a href=''>Home</a>
      <a href=''>Store</a>
      <a href=''>Contact Us</a>
    </div>
  )
}

function Addition(props){
  console.log(props)
  let title = "Math"
  return(
    <div>
      <h3>{title}</h3>
      <p>{props.num1} + {props.num2} = {props.num1 + props.num2}</p>
    </div>
  )
}

function Greeting(props){
  return(
    <div>
      <p>Welcome: {props.user}!</p>
    </div>
  )
}