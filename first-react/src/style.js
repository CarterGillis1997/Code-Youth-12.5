import React from "react";
import "./style.css";

class Boxes extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            backgroundColor:"transparent",
            myBox:{
                backgroundColor:"green",
                width:"100px",
                height:"100px"
            },
            property:"",
            value:""
        }
    }

    handleClick = (event) => {
        console.log(event.target.innerText)
        this.setState({
            backgroundColor: event.target.innerText
        })
    }

    changeProperty = (event) => {
        this.setState({
            property:event.target.value
        })
    }

    changeValue = (event) => {
        this.setState({
            value:event.target.value
        })
    }

    handleSubmit = () => {
        this.setState({
            myBox: {
                ...this.state.myBox,
                [this.state.property]:this.state.value
            }
        })
    }

    render(){
        return(
            <div>
                {/* <div style={{backgroundColor:"red", border: "5px solid"}} className="box"></div> */}
                <div style={{backgroundColor:this.state.backgroundColor}} className="box"></div>
                <button onClick={this.handleClick}>Green</button>
                <button onClick={this.handleClick}>Red</button>
                <div style={this.state.myBox}></div>
                <input onChange={this.changeProperty} value={this.state.property} type="text" id="property" />
                <input onChange={this.changeValue} value={this.state.value} type="text" id="value" />
                <button onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

let defaultObject = {
    name:"carter",
    age:"26",
    food:["hamburger","pizza"]
}

let newObject = {
    name:"jurimo",
    age:29
}

let mergedObject = {
    ...defaultObject,
    ...newObject
}

console.log(mergedObject)
export default Boxes;