import React from 'react'
 

function IdCard(props) {
    return (
        <div>
           <p>First name: {props.firstName}</p> 
           <p>Last Name: {props.lastName}</p>  
           <p>Gender: {props.gender}</p>
           <p>Height: {props.height/100}</p>
           <p>DOB: {props.birth.toLocaleDateString()}</p> 
           <img src={props.picture}/>

        </div>
    )
}

export default IdCard