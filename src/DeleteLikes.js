import { Component } from "react";

export class DeleteLikes extends Component{
    constructor(){
        super();

        this.state = {
            likes: 20
        }
    }
    deleteLikes(){
        this.setState({likes: this.state.likes - 1})
    }
    render(){
        return(
            <div>
                <h1>{this.state.likes}Likes</h1>
                <button onClick={()=> this.deleteLikes()}>Delete Like</button>
            </div>
        )
    }

}