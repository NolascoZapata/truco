import React from 'react'
import './../assets/styles/Card.css'

function Card(props) {
  const {card,name} = props
  return (
    
    <button className='card'>
      {(name ==='CPU') ?
      <img src={card.card_reverse} alt={`card-${card.img_src}`}/>
      :
      <img src={card.img_src} alt={`card-${card.img_src}`}/>
      }
    </button>
  
  )
}

export default Card