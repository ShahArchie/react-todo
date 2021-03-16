import React, {Component} from "react"

class Joke extends Component{
    render(){
        return(
            <div>
                <h3 style={{display: !this.props.joke.question && "none"}}>Question: {this.props.joke.question}</h3>
                <h3 style={{color: !this.props.joke.question && "#888888"}}>Answer: {this.props.joke.punchLine}</h3>
                <hr/>
            </div>
        )
    }
}

export default Joke