import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';
import Goodbye from './classes';
import Buttons from "./symbols"
import TodoList from './array';
import Database from './database';
import Counter from './counter';
import ControlledInput from './controlledInput';
import Boxes from './style';
import Multiple from './multiple';
import Tip from './expenses';
import FunctionalCounter from './functionalCounter';
import Animals from './animalPicture';
import AnimalUi from './animals';
import "./notes.css"
import NotesUi from './notesApp/controller';
import NoteContent from './notesApp/notesContent';
const router = createBrowserRouter([
  {
    path:"/",
    element:<div>Hello</div>
  },
  {
    path:"/buttons",
    element:<Buttons />
  },
  {
    path:"/todo",
    element:<TodoList />
  },
  {
    path:"/database",
    element:<Database />
  },
  {
    path:"/tip/calculator",
    element:<Tip />
  },
  {
    path:"/animals",
    element: <AnimalUi />,
    children:[
      {
        path:"/animals/dog",
        element:<Animals type="dog" />
      },
      {
        path:"/animals/cat",
        element:<Animals type="cat" />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <>
    {/* <Buttons /> */}
    {/* <TodoList /> */}
    {/* <Database /> */}
    {/* <Counter /> */}
    {/* <ControlledInput /> */}
    {/* <Boxes /> */}
    {/* <Multiple /> */}
    {/* <Tip /> */}
//   </>
// );

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
