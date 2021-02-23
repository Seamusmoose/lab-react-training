import React from 'react'


function CreditCard(props) {
   
   
    return (
        <div class='container'>
        <div className="cardsLayout" style={{backgroundColor: props.bgColor, color: props.color}}>
            <img src={props.type === 'Visa' ? '/img/visa.png' : '/img/master-card.svg'} style={{width: '100px'}} />

           <p>Type: {props.type}</p> 
           <p>Number: {props.number}</p>  
           <p>Gender: {props.expirationMonth}</p>
           <p>Height: {props.expirationYear}</p>
           <p>DOB: {props.bank}</p> 
           <p>Owner: {props.owner}</p>

        </div>
            </div>
    )
}

export default CreditCard