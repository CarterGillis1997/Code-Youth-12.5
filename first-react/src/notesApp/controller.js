import React from "react";
import {Outlet} from "react-router-dom";

class NotesUi extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            notes:[]
        }
    }

    componentDidMount = ()=>{
        fetch("/notes.json")
        .then(response => response.json())
        .then(resp =>{
            let notes = []
            for(let i in resp){
                notes.push(resp[i].title)
            }
            this.setState({
                notes: notes
            })
        });
        
    }

    render(){
        let noteListElements = this.state.notes.map((element, i)=>{
            return(
                <a href={"/notes/" + element} className="notesElement" key={i}>{element}</a>
            )
        })
        return(
            <div id="container">
                <div className="notesList">
                    {/* List notes here */}
                    {noteListElements}
                </div>
                <div className="content">
                     <Outlet />
                </div>
            </div>
        )
    }
}

export default NotesUi;