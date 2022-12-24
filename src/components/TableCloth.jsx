import React, { useEffect, useState } from 'react'
import { drawCards } from '../utils/drawCards'
import Board from './Board'
import PlayerCardContainer from './PlayerCardContainer'
import './../assets/styles/TableCloth.css'
import TrucoBtns from './TrucoBtns'

function TableCloth() {

  const [cards,setCards] = useState([])
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    fetch('cards.json')
    .then(res=>res.json())
    .then(res=>setCards(drawCards(res,2)))
    .catch(error => {throw new Error(`No se data`,error)})
    .finally(()=>setLoading(false))
  }

  , [])
  
  
  return (
    <div className='table-cloth'>
      {loading && <h2>Loading...</h2>}
      {!loading && 
      <>
        <PlayerCardContainer cards={cards.slice(0,3)} name={`CPU`}/>
        <Board/>
        <PlayerCardContainer cards={cards.slice(3,6)} name={`Player`}/>
        <TrucoBtns/>
      </>
      }
    </div>
  )
}

export default TableCloth