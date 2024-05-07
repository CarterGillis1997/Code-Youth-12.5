import React from "react";

class Multiple extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            fruits:["Apple","Mango","Dragonfruit","Kiwi","Banana","ORANGE"],
            input:"",
            options:["backgroundColor","color","border","width","height"]
        }
    }
    handleInput = (event) => {
        this.setState({
            input:event.target.value
        })
    }

    handleClick = () => {
        this.setState(state=>({
            fruits:[...state.fruits, state.input]
        }))
    }

    render(){
        let elements = this.state.fruits.map((element, i)=>{
            return(
                <li key={i}>{element}</li>
            )
        })

        let optionElements = this.state.options.map((element, i)=>{
            return(
                <option key={i}>{element}</option>
            )
        })

        console.log(elements)
        return(
            <div>
                <h2>Fruit</h2>
                <ul>
                    {elements}
                </ul>
                <input onChange={this.handleInput} value={this.state.input} />
                <button onClick={this.handleClick}>Submit</button>
                <select>
                    {optionElements}
                </select>
            </div>
        )
    }
}

export default Multiple;