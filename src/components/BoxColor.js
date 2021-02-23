import React from 'react'

export default function BoxColor(props) {
    let rgb=`rgb(${props.r},${props.g},${props.b})`
    //let hex= # + f()
    const color={
        backgroundColor:rgb
    }
    ///maybe function to convert into hex 
    return (
        <div>
           <div class='boxColour' style={color}> {rgb} </div>
        </div>
    )
 
}

