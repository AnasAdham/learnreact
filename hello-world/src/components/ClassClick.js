import React, { Component } from 'react'

export default class ClassClick extends Component {
    clickHandler(){
        console.log('Clicked the button')
    }
    render() {
        return (
            <div>
           <button onClick ={this.clickHandler}>Click me object oriented</button>     
            </div>
        )
    }
}
