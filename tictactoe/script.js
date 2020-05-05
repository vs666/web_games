var ar = [
    [-1, -1, -1],
    [-1, -1, -1],
    [-1, -1, -1]
];
// array to mark a frame as visited
var turn = 0;
var cd = 0;

function reset() {
    for (let a = 0; a < 3; a++) {
        for (let b = 0; b < 3; b++) {
            ar[a][b] = -1;
        }
    }
    turn = 0;
    for (let a = 0; a < 9; a++) {
        document.getElementById(a).innerHTML = '-';
    }
    cd = 0;
}

function checkWin(player) {
    for (let a = 0; a < 3; a++)
        if ((ar[a][0] == player && ar[a][1] == player && ar[a][2] == player) || (ar[0][a] == player && ar[1][a] == player && ar[2][a] == player)) {
            return true;
        }
    if ((ar[0][0] == player && ar[1][1] == player && ar[2][2] == player) || (ar[0][2] == player && ar[1][1] == player && ar[2][0] == player)) {
        return true;
    }
    return false;
}

function clicked(cell) {
    let row = Math.floor(cell / 3);
    let col = cell % 3;
    cd++;
    if (ar[row][col] == -1) {
        ar[row][col] = turn;
        if (turn == 0)
            document.getElementById(cell).innerHTML = 'X';
        else
            document.getElementById(cell).innerHTML = 'O';
    }
    let cond = checkWin(turn);
    console.log(cond);
    if (cond) {
        if (turn == 0)
            alert("Player X wins");
        else
            alert("Player O wins");
        reset();
    } else if (cd == 9) {
        alert("Game Drawn");
        reset();
    }
    turn = 1 - turn;
}