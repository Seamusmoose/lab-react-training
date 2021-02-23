import React from 'react'



export default function Random(props) {
    return (
        <div>
            <h3>Random value between {props.min} and {props.max} => {Math.floor(Math.random() * (props.max - props.min + props.min) + props.min)}</h3>
            
        </div>
    )
}
