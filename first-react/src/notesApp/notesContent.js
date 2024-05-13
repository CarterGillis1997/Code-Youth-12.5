import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function NoteContent(){
    let params = useParams();
    let [noteContent, setContent] = useState("")
    console.log(params)
    useEffect(()=>{
        fetch("/notes.json")
        .then(response => response.json())
        .then(resp =>{
            const thisNote = resp.find(element=>element.title==params.noteTitle);
            setContent(thisNote.content);
        });
    })

    return(
        <div>
            <h2>{params.noteTitle}</h2>
            <p>{noteContent}</p>  
        </div>
    )
}

export default NoteContent;