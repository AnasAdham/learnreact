import React, {Component} from 'react'

class Welcome extends Component{
    // render(){
    //     return <h1>Welcome {this.props.name} also known as {this.props.heroName} </h1>
    // }

    render(){
        const {name, heroName} = this.props
        return(
            <h1>
            Welcome {name} also known as {heroName}
            </h1>
        )
    }
}
 export default Welcome