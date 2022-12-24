import React, { useState,useEffect } from 'react'
import { calcularEnvido } from '../utils/calcularEnvido'
import Card from './Card'

function PlayerCardContainer(props) {
  const {cards,name} = props
  const [envido,setEnvido]=useState(0)
  useEffect(() => {
    setEnvido(calcularEnvido(cards))
  }, [cards])
  


  return (
    <div>
      <h3>{name} cards</h3>
        {
        cards.map(card =>
            <Card card={card} key={card.id} name ={name}/>
          )
        }
        <p>Envido: {envido}</p>
        {(cards[0].palo_suit === cards[1].palo_suit && cards[1].palo_suit === cards[2].palo_suit)? <span>FLOR</span> : null} 
    </div>
  )
}

export default PlayerCardContainer