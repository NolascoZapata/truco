export const calcularEnvido = (cards) => {
    let suma = 0
    if (cards[0].palo_suit === cards[1].palo_suit && cards[1].palo_suit === cards[2].palo_suit) {
        suma = suma + cards[0].envido_value + cards[1].envido_value + cards[2].envido_value + 20
    } else if (cards[0].palo_suit === cards[1].palo_suit && cards[1].palo_suit !== cards[2].palo_suit) {
        suma = suma + cards[0].envido_value + cards[1].envido_value + 20
    } else if (cards[0].palo_suit === cards[2].palo_suit && cards[2].palo_suit !== cards[1].palo_suit) {
        suma = suma + cards[0].envido_value + cards[2].envido_value + 20
    } else if (cards[0].palo_suit !== cards[1].palo_suit && cards[1].palo_suit === cards[2].palo_suit) {
        suma = suma + cards[1].envido_value + cards[2].envido_value + 20
    } else {
        suma = suma + Math.max(cards[0].envido_value, cards[1].envido_value, cards[2].envido_value)
    }
    return suma
}

