import React from "react";

class Counter extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            value:0
        }

        this.increase = this.increase.bind(this)
        this.decrease = this.decrease.bind(this)
        this.reset = this.reset.bind(this)
    }

    render(){
        return(
            <div>
                <button onClick={this.increase}>Increase</button>
                <button onClick={this.decrease}>Decrease</button>
                <button onClick={this.reset}>Reset</button>

                <p>Current Count: {this.state.value}</p>
            </div>
        )
    }

    increase(){
        this.setState(state=>({
            value: state.value + 1
        }))
    }
    decrease(){
        this.setState(state=>({
            value: state.value - 1
        }))
    }
    reset(){
        this.setState({
            value:0
        })
    }
}

export default Counter;