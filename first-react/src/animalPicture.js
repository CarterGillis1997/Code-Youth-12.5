import React from "react"

class Animals extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            src:""
        }
    }

    componentDidMount = () => {
        if(this.props.type == "dog"){
            fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(resp =>{
                this.setState({
                    src: resp.message
                })
            });
        }else if(this.props.type == "cat"){
            fetch("https://api.thecatapi.com/v1/images/search")
            .then(response => response.json())
            .then(resp =>{
                this.setState({
                    src: resp[0].url
                })
            }); 
        }
    }

    render(){
        return(
            <img src={this.state.src} />
        )
    }
}

export default Animals;