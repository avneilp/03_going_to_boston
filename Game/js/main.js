let rounds = 0;
let round = 1;
let turn = 0;
let player1_rounds_won = 0;
let player2_rounds_won = 0;
let player1_score = 0;
let player2_score = 0;

let roll = function () {
    document.querySelector(".round").textContent = `Round: ${round} / ${rounds}`;
    document.querySelector(".turn").textContent = `Turn: Player ${turn}`;
    document.querySelector(".player1_rounds_won").textContent = `Player 1 rounds won: ${player1_rounds_won}`;
    document.querySelector(".player2_rounds_won").textContent = `Player 2 rounds won: ${player2_rounds_won}`;
    document.querySelector(".player1_score").textContent = `Player 1 score: ${player1_score}`;
    document.querySelector(".player2_score").textContent = `Player 2 score: ${player2_score}`;
    return Math.ceil(Math.random() * 6);
}

document.querySelector(".submit").addEventListener("click", function () {
    if(document.querySelector(".rounds").value % 2 == 1){
        rounds = document.querySelector(".rounds").value;
        document.querySelector(".rounds").disabled = true;
        document.querySelector(".error").textContent = ``;
        document.querySelector(".round").textContent = `Round: ${round} / ${rounds}`;
    }
    else{
        document.querySelector(".error").textContent = `Number of rounds must be an even number!`;
    }
})

document.querySelector(".first").addEventListener("click", function () {
    let player1 = roll();
    let player2 = roll();
    if (player1 > player2) {
        turn = 1;
    }
    else if (player2 > player1) {
        turn = 2;
    }
    else {
        turn = Math.ceil(Math.random() * 2);
    }
    roll();
    document.querySelector(".first_info").textContent = `Player ${turn} will go first`;
    document.querySelector(".first").disabled = true;
})
document.querySelector(".roll").addEventListener("click", function () {

    if(turn == 1) {
        turn = 2;
    }
    else if(turn == 2){
        turn = 1;
    }
    roll();
})

document.querySelector(".reset").addEventListener("click", function () {
    rounds = 0;
    round = 1;
    turn = 0;
    player1_rounds_won = 0;
    player2_rounds_won = 0;
    player1_score = 0;
    player2_score = 0;
    document.querySelector(".first").disabled = false;
    document.querySelector(".rounds").disabled = false;
    roll();
    document.querySelector(".round").textContent = `Round: `;
    document.querySelector(".turn").textContent = `Turn: `;
})

