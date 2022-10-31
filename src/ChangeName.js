import { Component } from "react";

export class ChangeName extends Component{
    constructor(){
        super()

        this.state = {
            personName: "Jack",
            age: 30
        }
    }
    changeName(){
        this.setState({personName: "Maria"})
        this.setState({age: 28})
    }
    render(){
        return(
            <div>
                <h1>Hello {this.state.personName}, {this.state.age}</h1>
                <button onClick={()=> this.changeName()}>Click to change name</button>
            </div>
        )
    }
}