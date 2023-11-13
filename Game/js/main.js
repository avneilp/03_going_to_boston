let rounds = 10;
let round = 1;
let turn = 0;
let player1_rounds_won = 0;
let player2_rounds_won = 0;
let player1_score = 0;
let player2_score = 0;
document.querySelector(".calc").disabled = true;
document.querySelector(".first").disabled = true;
document.querySelector(".roll").disabled = true;
let roll = function () {
    document.querySelector(".round").textContent = `Round: ${round} / ${rounds}`;
    document.querySelector(".turn").textContent = `Turn: Player ${turn}`;
    document.querySelector(".player1_rounds_won").textContent = `Player 1 rounds won: ${player1_rounds_won}`;
    document.querySelector(".player2_rounds_won").textContent = `Player 2 rounds won: ${player2_rounds_won}`;
    document.querySelector(".player1_score").textContent = `Player 1 score: ${player1_score}`;
    document.querySelector(".player2_score").textContent = `Player 2 score: ${player2_score}`;
    return Math.ceil(Math.random() * 6);
}
let run_round = function() {
    let rolls = [roll(), roll(), roll()];
    let finalRolls = 0;
    finalRolls += Math.max(...rolls);
    rolls = [roll(), roll()];
    finalRolls += Math.max(...rolls);
    finalRolls += roll();
    return finalRolls;
}
document.querySelector(".submit").addEventListener("click", function () {
    if(document.querySelector(".rounds").value % 2 == 1){
        rounds = document.querySelector(".rounds").value;
        document.querySelector(".rounds").disabled = true;
        document.querySelector(".submit").disabled = true;
        document.querySelector(".first").disabled = false;
        document.querySelector(".error").textContent = ``;
        document.querySelector(".round").textContent = `Round: ${round} / ${rounds}`;
    }
    else{
        document.querySelector(".error").textContent = `Number of rounds must be an odd number!`;
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
    document.querySelector(".roll").disabled = false;
    let hide = document.querySelector(".instruction").classList;
    hide.remove("hidden");
})

document.querySelector(".calc").addEventListener("click", function () {
    if (player1_score != 0 && player2_score != 0) {
        document.querySelector(".calc").textContent = `Click to calculate your score !`
        if(player1_score > player2_score){
            player1_score = 0;
            player2_score = 0;
            player1_rounds_won++;
            round++;
            roll();
            document.querySelector(".calc").disabled = true;
            document.querySelector(".roll").disabled = false;
        }
        else if (player2_score > player1_score) {
            player1_score = 0;
            player2_score = 0;
            player2_rounds_won++;
            round++;
            roll();
            document.querySelector(".calc").disabled = true;
            document.querySelector(".roll").disabled = false;
        }
        else {
            document.querySelector(".winner").textContent = `Round was a tie, try again !`;
            player1_score = 0;
            player2_score = 0;
            roll();
            document.querySelector(".calc").disabled = true;
            document.querySelector(".roll").disabled = false;
        }
        
        if(round > rounds){
            document.querySelector(".calc").textContent = `Click to find out who won the game !`;
            document.querySelector(".round").textContent = `Round: ${rounds} / ${rounds}`;
            document.querySelector(".calc").disabled = false;
            document.querySelector(".roll").disabled = true;
        }
    }
    else if (round > rounds) {
        if(player1_rounds_won > player2_rounds_won) {
            document.querySelector(".winner").textContent = `Player 1 won the game!`;
        }
        else {
            document.querySelector(".winner").textContent = `Player 2 won the game !`;
        }
        document.querySelector(".calc").textContent = `Click to find out who won this round !`
        document.querySelector(".calc").disabled = true;
    }
    else {
        if(turn == 1) {
            player1_score = dice[0] + dice[1] + dice[2];
            turn = 2;
            roll();
            document.querySelector(".dice").innerHTML= ``;
            if (player1_score != 0 && player2_score != 0) {
                document.querySelector(".turn").textContent = ``
                document.querySelector(".calc").textContent = `Click to find out who won this round !`
            }
            else {
                document.querySelector(".calc").disabled = true;
                document.querySelector(".roll").disabled = false;
            }
        }
        else if(turn == 2){
            player2_score = dice[0] + dice[1] + dice[2];
            turn = 1;
            roll();
            document.querySelector(".dice").innerHTML= ``;
            if (player1_score != 0 && player2_score != 0) {
                document.querySelector(".turn").textContent = ``
                document.querySelector(".calc").textContent = `Click to find out who won this round !`
            }
            else {
                document.querySelector(".calc").disabled = true;
                document.querySelector(".roll").disabled = false;
            }
        }
    }
})

let dice = [roll(), roll(), roll()];
let roll_num = 1;

document.querySelector(".roll").addEventListener("click", function() {
    if(roll_num == 1){
        dice = [roll(), roll(), roll()];
        roll_num++;
        document.querySelector(".dice").innerHTML= `Dice: ${dice[0]}, ${dice[1]}, ${dice[2]}`;
    }
    else if(roll_num == 2){
        dice = [Math.max(...dice), roll(), roll()];
        roll_num ++;
        document.querySelector(".dice").innerHTML= `Dice: <b>${dice[0]}</b>, ${dice[1]}, ${dice[2]}`;
    }
    else if(roll_num == 3){
        dice = [dice[0], Math.max(dice[1], dice[2]), roll()]
        roll_num = 1;
        document.querySelector(".dice").innerHTML= `Dice: <b>${dice[0]}, ${dice[1]}</b>, ${dice[2]}`;
        document.querySelector(".calc").disabled = false;
        document.querySelector(".roll").disabled = true;
    }
})

document.querySelector(".reset").addEventListener("click", function () {
    rounds = 0;
    round = 1;
    turn = 0;
    player1_rounds_won = 0;
    player2_rounds_won = 0;
    player1_score = 0;
    player2_score = 0;
    document.querySelector(".rounds").disabled = false;
    document.querySelector(".calc").disabled = true;
    document.querySelector(".submit").disabled = false;
    document.querySelector(".roll").disabled = true;
    roll();
    document.querySelector(".round").textContent = `Round: `;
    document.querySelector(".turn").textContent = `Turn: `;
    document.querySelector(".winner").textContent = ``;
    document.querySelector(".first_info").textContent = ``;
    let hide = document.querySelector(".instruction").classList;
    hide.add("hidden");
    document.querySelector(".rounds").value = null;
})
