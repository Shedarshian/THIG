"use strict";

var reimu = {
    money: new Decimal(0),
    reputation: new Decimal(0),
    haveMoneyClicked: false
};

function giveMoneyByHand() {
    reimu.money = reimu.money.add(1);
    reimu.haveMoneyClicked = true;
}

function updateMoney() {
    var element = document.getElementById("moneyAmount");
    element.textContent = reimu.money.floor().toString();
    var element = document.getElementById("reputationAmount");
    element.textContent = reimu.reputation.floor().toString();
}

function gameLoop(diff) {
    diff = diff / 1000;
    if (reimu.haveMoneyClicked) {
        reimu.money = reimu.money.add(Decimal.pow(1.05, reimu.reputation).times(diff));
    }
    updateMoney();
}

setInterval(function() { gameLoop(50); }, 50)