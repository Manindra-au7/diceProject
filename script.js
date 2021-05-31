const player1 = Math.floor((Math.random()*6) + 1)
const player2 = Math.floor((Math.random()*6) + 1)

const player1Value =  document.querySelector('#player1 p')
player1Value.innerHTML = player1
const player2Value =  document.querySelector('#player2 p')
player2Value.innerHTML = player2

if(player1>player2){
    document.querySelector("#winner").innerHTML = '<h1>Player 1 Wins</h1>'
} else if(player1 ==player2){
    document.querySelector("#winner").innerHTML = '<h1>DRAW</h1>'

} else {
    document.querySelector("#winner").innerHTML = '<h1>Player 2 Wins</h1>'

}

