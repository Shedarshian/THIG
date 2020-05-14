var reimu = {
    money: 0,
    reputation: 0
}

function giveMoneyByHand() {
    reimu.money = reimu.money + 1;
    updateMoney();
}

function updateMoney() {
    var element = document.getElementById("moneyAmount");
    element.textContent = reimu.money.toString();
}