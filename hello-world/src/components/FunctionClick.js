import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('Button clicked')
    }
    return (
        <div>
           <button onClick = {clickHandler}>Click</button> 
           we dont put clickhandler() because we do not want function call
        </div>
    )
}
 
export default FunctionClick