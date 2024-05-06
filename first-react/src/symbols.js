import React from "react";

class Buttons extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lastClickedOn:"",
            counter:0
        }

        console.log(this.state)
    }

    handleClick = (event) =>{
        console.log(event.target.innerText);
        this.setState({
            lastClickedOn: event.target.innerText
        })
    }

    increase = () => {
        this.setState(state=>({
            counter: state.counter + 1
        }))
    }

    render(){
        return(
            <div id="content">
                <div id="buttons">
                    <button onClick={this.handleClick} className="symbol">☆</button>
                    <button onClick={this.handleClick} className="symbol">♡</button>
                    <button onClick={this.handleClick} className="symbol">⁂</button>
                    <button onClick={this.handleClick} className="symbol">⁇</button>
                </div>
                <h1>You clicked on:{this.state.lastClickedOn}</h1>

                <button onClick={this.increase}>Increase</button>
                <p>{this.state.counter}</p>
            </div>
        )
    }
}

export default Buttons;