var op1 = 0
var op2 = 0
var div = 0
var activeoperand = 0
var divenable = false;
var enable = false;

function operand(a) {
    switch (a) {
        case 10:
            op1 = op1 / op2;
            op2 = 0;
            break;
        case 11:
            op1 = op1 + op2;
            op2 = 0;
            break;
        case 12:
            op1 = op1 - op2;
            op2 = 0;
            break;
        case 13:
            op1 = op1 * op2;
            op2 = 0;
            break;
        case 14:
            divenable = true;
            break;
        case 15:
            enable = true
            if (activeoperand) {
                operand(activeoperand);
            }

    }
}

function del(a) {
    if (a == -1) {
        enable = false;
        divenable = false;
        activeoperand = 0;
        op1 = 0;
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
        enable = true;
        if (a < 14) {
            operand(15);
            activeoperand = a;
            op1 = op2;
            op2 = 0;
        } else {
            operand(a);
            if (a == 15) {
                activeoperand = 0;
                op2 = op1;
                op1 = 0;
                enable = false;
            }
        }
    }
    updateScreen();
}

function updateScreen() {
    if (enable)
        document.getElementsByClassName("small-screen")[0].innerHTML = op1;
    else
        document.getElementsByClassName("small-screen")[0].innerHTML = "";
    document.getElementsByClassName("big-screen")[0].innerHTML = op2;
}