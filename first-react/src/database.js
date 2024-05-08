import React from "react";

const employees = [{
    "name": "Alice",
    "position": "Software Engineer",
    "salary": 85000
    },
    
    {
    "name": "Bob",
    "position": "Data Analyst",
    "salary": 72000
    },
    {
    "name": "Bobby",
    "position": "Data Analyst",
    "salary": 72000
    },
    
    {
    "name": "Charlie",
    "position": "Marketing Manager",
    "salary": 68000
    },
    
    {
    "name": "David",
    "position": "Product Designer",
    "salary": 80000
    },
    
    {
    "name": "Emma",
    "position": "Financial Analyst",
    "salary": 75000
    },
    
    {
    "name": "Fiona",
    "position": "Human Resources Coordinator",
    "salary": 60000
    },
    
    {
    "name": "George",
    "position": "Sales Representative",
    "salary": 67000
    },
    
    {
    "name": "Hannah",
    "position": "Operations Manager",
    "salary": 90000
    },
    
    {
    "name": "Ian",
    "position": "Customer Support Specialist",
    "salary": 55000
    },
    
    {
    "name": "Jessica",
    "position": "Accountant",
    "salary": 78000
    },
    {
        "name":"Emily",
        "position":"Accountant",
        "salary": 78000
    }]

    class Database extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                filter:""
            }
        }

        search = (query) =>{
            this.setState({
                filter:query
            })
        }

        render(){
            let elements = []
            if(this.state.filter == ""){
                elements = employees.map((element, i)=>{
                    return(
                        <div key={i} className="empContainer">
                            <div style={{borderBottom:"1px solid"}}>
                                {element.name} | {element.position}
                            </div>
                            <div>
                                ${element.salary}
                            </div>
                        </div>
                    )
                })
                console.log(elements)
            } else {
                let filter = employees.filter((element) => {
                    if (element[this.state.filter.type] == this.state.filter.input) {
                        return element;
                    }
                })
                elements = filter.map((element, i) => {
                    return (
                        <div key={i} className="empContainer">
                            <div style={{ borderBottom: "1px solid" }}>
                                {element.name} | {element.position}
                            </div>
                            <div>
                                ${element.salary}
                            </div>
                        </div>
                    )
                })
                console.log(elements)
            }
            return(
                <div>
                    <DatabaseSearch search={this.search} />
                    <h2>Database</h2>
                    <div className="employeeList">
                        {elements}
                    </div>
                </div>
            )
        }
    }

    class DatabaseSearch extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                type:"name",
                input:""
            }
        }

        handleSelect = (event) => {
            this.setState({
                type:event.target.value
            })
        }

        handleInput = (event) => {
            this.setState({
                input:event.target.value
            })
        }

        handleSubmit = () =>{
            this.props.search({
                type:this.state.type,
                input:this.state.input
            })
        }

        handleReset = () => {
            this.props.search("")
            this.setState({
                input:""
            })
        }

        render(){
            return(
                <div>
                    <select value={this.state.type} onChange={this.handleSelect}>
                        <option value={"name"}>Name</option>
                        <option value={"position"}>Position</option>
                    </select>
                    <input value={this.state.input} onChange={this.handleInput} type="text" />
                    <button onClick={this.handleSubmit}>Submit</button>
                    <button onClick={this.handleReset}>Reset</button>
                </div>
            )
        }
    }

    export default Database;