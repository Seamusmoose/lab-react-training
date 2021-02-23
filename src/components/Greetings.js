import React from 'react'

export default function Greetings(props) {
    let greet
    switch (props.lang) {
    case 'de':
        greet = 'Hallo'
        break
    case 'en':
        greet = 'Hello'
        break
    case 'es':
        greet = 'Hola'
        break
    case 'fr':
        greet ='Bonjurrrr'
        break  
    default: 
        greet="greetings"

    }
    return (
        <div>
        <h2>
            {greet}&nbsp;{props.children}
        </h2>
            
        </div>
    )
}

