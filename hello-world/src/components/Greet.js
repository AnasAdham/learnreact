import React from 'react'

// this is another way of doing it
// function Greet(){
//     return <h1>the world is a bad place</h1>
// }

// const Greet = (props) => {
//     console.log(props)
// return ( 
// <div>
//     <h1>Hello my name is {props.name} which is the {props.heroName}</h1>
// {props.children}
// </div>
// )
// }

// THE ABOVE WAY NEED TO USE PROP.


// const Greet = ({name, heroName})=> {
// return ( 
// <div>
//     <h1>Hello my name is {name} which is the {heroName}</h1>
// </div>
// )
// }
// export default Greet
//  THE SECOND WAY
// BOTH ABOVE AND BELOW SHOWS THE PROPERTY EXTRACTED FROM OBJECT


const Greet = props => {
    // extract the name and heroName property from object
    const {name, heroName} = props
return ( 
<div>
    <h1>Hello my name is {name} which is the {heroName}</h1>
</div>
)
}
export default Greet



// export default Greet .... If use this one does not have to specify import on app.js 
// curly braces
// chapter 9 props
