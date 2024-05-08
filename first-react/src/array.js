import React from "react";

class TodoList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            todos:["Walk dog", "Buy vegetable", "Exercise"]
        }
    }

    addTodo = (newTodo) => {
        this.setState(state=>({
            todos: [...state.todos, newTodo]
        }))
    }

    render(){
        let elements = this.state.todos.map(element=>{
            return <li>{element}</li>
        })
        return(
            <div>
                <ControlledInput addTodo={this.addTodo} />
                <h1 style={{textDecoration:"underline"}}>Todos</h1>
                <ul>
                    {elements}
                </ul>
            </div>
        )
    }
}

class ControlledInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            input:""
        }
    }
    handleChange = (event) =>{
        this.setState({
            input:event.target.value
        })
    }
    
    handleClick = () => {
        this.props.addTodo(this.state.input)
    }

    render(){
        return(
            <div>
                <input value={this.state.input} onChange={this.handleChange}></input>
                <button onClick={this.handleClick}>Add Todo</button>
            </div>
        )
    }

}

export default TodoList;