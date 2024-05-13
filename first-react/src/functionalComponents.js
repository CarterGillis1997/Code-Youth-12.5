import React, {useEffect, useState} from "react";
import "./functionalComponents.css"
function Initial(props) {

    return (
        <div id="content">
            <header>
                <h1>Videos</h1>
            </header>
            <Videos />
        </div>
    )
}

function Videos(props){
    const [query, setQuery] = useState("");
    const [videos, setVideos] = useState([])
    useEffect(()=>{
        // Do something after the state has been updated
        async function fetchVideos(){
            const videoData = await getVideos(query);
            setVideos(videoData)
        }

        fetchVideos();
    }, [query])
    let videoElements = videos.map((element, i)=>{
        return(
            <div key={i} className="videoElement">
                <div className="thumbnail"></div>
                <p>{element.title}</p>
            </div>
        )
    })
    return(
        <div className="videos">
            <div id="searchBar">
                <input onChange={(event)=>{
                    setQuery(event.target.value)
                }} value={query} type="text" />
            </div>
            <div className="videoList">
                {videoElements}
            </div>
        </div>
    )
}

async function getVideos(query){
    return new Promise((resolve)=>{
        fetch('/videos.json')
        .then(response => response.json())
        .then(resp =>{
            if(query == ""){
                resolve(resp)
            }else{
                let filtered = resp.filter(element=>element.title.includes(query))
                resolve(filtered)
            }
        });
    })
}

export default Initial;