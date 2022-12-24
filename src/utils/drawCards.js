export const drawCards=(cardsArray,playersNumber)=>{
  let playingCards = []
  let totalCards = playersNumber*3

  while(playingCards.length<totalCards){
    let cardSelected = cardsArray[Math.floor((Math.random()*cardsArray.length))]
    let exists = playingCards.includes(cardSelected)
    if (!exists) {
      playingCards.push(cardSelected)
    }
  }
  
  return playingCards
}
