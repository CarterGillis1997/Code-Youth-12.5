import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import Goodbye from './classes';
import Buttons from "./symbols"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Header />
    <Addition num1={5} num2={10} />
    <Addition num1={52} num2={34} />
    <Greeting user="Carter" />
    <Greeting user="Jurimo" /> */}
    {/* <Goodbye name="Carter" /> */}
    <Buttons />
  </React.StrictMode>
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