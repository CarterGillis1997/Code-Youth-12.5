import React from "react";

class Goodbye extends React.Component{
    constructor(props){
        super(props)

        this.checkName()
    }

    render(){
        return(
            <div>
                <p>Goodbye {this.props.name}!</p>
                <MyButton message="Good Job" />
                <MyButton message="Bad Job" />
            </div>
        )
    }

    checkName(){
        console.log(this.props.name)
    }
}

class MyButton extends React.Component{
    constructor(props){
        super(props)

        // this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () => {
        console.log(this.props.message)
    }

    render(){
        return(
            <button onClick={this.handleClick}>{this.props.message}</button>
        )
    }
}

export default Goodbye;