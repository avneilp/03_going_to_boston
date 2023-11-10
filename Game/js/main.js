let roll = function () {
    return Math.ceil(Math.random() * 6);
}

let rounds = 0;

document.querySelector(".submit").addEventListener("click", function () {
   rounds = document.querySelector(".rounds")
   document.querySelector(".rounds").disabled = true;
})

let player = 0;

document.querySelector(".first").addEventListener("click", function () {
    let player1 = roll();
    let player2 = roll();
    if (player1 > player2) {
        player = 1;
    }
    else if (player2 > player1) {
        player = 2;
    }
    else {
        player = Math.ceil(Math.random() * 2)
    }
    document.querySelector(".first_info").textContent = `Player ${player} will go first`;
})


