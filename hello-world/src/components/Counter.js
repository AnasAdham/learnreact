import React, { Component } from 'react'

// small tips if got no elements all wooudl not work or display 
class Counter extends Component {
    constructor(props){
        super(props)
            this.state = {
                count: 0               

            }
    }

    increment(){
        
        // this.setState(prevState => ({
        //     count: prevState.count +1

        // }),
        // () => {console.log('Callback value' , this.state.count)})
        this.setState((prevState) => ({
            count: prevState + 1
        }))
        console.log(this.state.count)


    }
    oldIncrement(){

        // this.state.count = this.state.count + 1
        console.log(this.state.count)
        // call are ASYNCHRONOUS
        // when log 1 display 2 || the log is called before the state is actually set
        this.setState({
            count: this.state.count + 1
            // if like this accept object?????
        }
        , () => {console.log('Callback value' , this.state.count)} // log update value

        )        // console log increment but the display does not increment
        // cause ui is not rerendering everytime the state is changing
        
        
        // NEVER MODIFY THE STATE DIRECTLY 
        // USE setState USE SET STATE INSTEAD 

    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button>
                {/* for example if this is empty */}
            </div>
        )
    }
}

export default Counter
