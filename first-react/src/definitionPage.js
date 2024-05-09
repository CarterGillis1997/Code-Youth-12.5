import React from "react";

class Main extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            word:""
        }
    }

    updateParentState = (newValue) =>{
        this.setState({word: newValue})
    }

    render(){
        let definition = ""
        if(this.state.word !== ""){
            definition = <Definition word={this.state.word} />
        }
        return(
            <div id="main">
                <Search updateParentState={this.updateParentState} />
                <div className="content">
                    <h2 id="word">{this.state.word}</h2>
                    {definition}
                </div>
            </div>
        )
    }
}

class Definition extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            phonetics:"",
            meanings:""
        }
    }

    componentDidMount = () => {
        fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + this.props.word)
        .then(response => response.json())
        .then(resp =>{
            let phonetics = ""
            for(let i = 0; i < resp[0].phonetics.length; i++){
                if(resp[0].phonetics[i].text){
                   phonetics = resp[0].phonetics[i].text
                }
            }
            let meanings = resp[0].meanings.map((element, i)=>{
                let example = element.definitions[0].example ? '"' + element.definitions[0].example + '"' : ""
                return(
                <div key={i} className="meaningDiv">
                    <p className="pOS">{element.partOfSpeech}</p>
                    <p>{element.definitions[0].definition}</p>
                    <i>{example}</i>
                </div>
                )
            })

            this.setState({
                phonetics:phonetics,
                meanings:meanings
            })
        });
    }

    render(){
        return(
            <div className="load">
            <p id="phonetics">{this.state.phonetics}</p>
            <div className="meanings">
                {/* Meanings */}
                {this.state.meanings}
            </div>
        </div>
        )
    }
}

class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            searchQuery:""
        }
    }

    submit = () =>{
        this.props.updateParentState(this.state.searchQuery)
    }

    handleChange = (event) =>{
        this.setState({searchQuery:event.target.value})
    }

    render(){
        return(
            <div>
                <input value={this.state.searchQuery} onChange={this.handleChange} type="text"/>
                <button onClick={this.submit}>Submit</button>
            </div>
        )
    }
}

export default Main;