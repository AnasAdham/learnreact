import React, {Component} from 'react'

// this is a notes for chapter 10 state
class Message extends Component{

    constructor(){
        super()
        this.state = {
            message: 'Welcome visitor'
        }
    }
    changeMessage(){
        this.setState({
            message: 'Thanks for clicking'

        })
    }

    render(){
        return (
            // put div cause react only want one tag
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Click me!</button>
            </div>
        ) 
    }
}
 export default Message 