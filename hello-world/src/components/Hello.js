import React from 'react'

const Hello = () => {
    // return (
    //     <div className='dummyClass'>
    //         <h1>Hello this is from hello js</h1> 
    //     </div>
    // )
    return React.createElement(
    'div',
    {id:'hello', className: 'tesuto' }, // this is for the id or something
    // class is a reserved word for javascript hence use classname
     React.createElement('h1', null, 'Hello from the hello js'))
}

export default Hello
