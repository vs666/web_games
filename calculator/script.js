var ans = 0
var op2 = 0
var div = 0
var activeoperand = 0
var divenable = false;

function operand(a) {
    switch (a) {
        case 10:
            ans = ans / op2;
            op2 = 0;
            break;
        case 11:
            ans = ans + op2;
            op2 = 0;
            break;
        case 12:
            ans = ans - op2;
            op2 = 0;
            break;
        case 13:
            ans = ans * op2;
            op2 = 0;
            break;
        case 14:
            divenable = true;
            break;
        case 15:
            if (activeoperand != 0) {
                operand(activeoperand);
            }

    }
}

function del(a) {
    if (a == -1) {
        divenable = false;
        activeoperand = 0;
        ans = 0;
        op2 = 0;
    } else {
        op2 = 0;
    }
}

function num(a) {
    if (divenable) {
        div++;
        for (let c = 1; c <= div; c++) {
            a /= 10;
        }
    }
    op2 = op2 * 10 + a;
}

function operation(a) {
    if (a <= 9 && a >= 0) {
        num(a);
    } else if (a < 0) {
        del(a);
    } else {
        if (a < 14) {
            if (a == 0) {
                activeoperand = a;
                operand(15);
            } else {
                operand(15);
                activeoperand = a;

            }
        } else {
            operand(a);
            if (a == 15) {
                activeoperand = 0;
            }
        }
    }
    updateScreen();
}

function updateScreen() {
    document.getElementsByClassName("small-screen")[0].innerHTML = ans;
    document.getElementsByClassName("big-screen")[0].innerHTML = op2;
}