var $ = function (id) {
    'use strict';
    return document.getElementById(id);
};

var numQaurters;
var numDimes;
var numNickles;
var numPennies;

function getCoinNums(currentCents) {
    'use strict';
    var remainingCents;
    
    if (currentCents === currentCents % 25){
        numQaurters = 0;
    }
    else{
        numQaurters = (currentCents - (currentCents % 25)) / 25;
    }
    
    remainingCents = currentCents % 25;
    
    if (remainingCents === remainingCents % 10){
        numDimes = 0;
    }
    else{
        numDimes = (remainingCents - (remainingCents % 10)) / 10;
    }
    
    remainingCents = remainingCents % 10;
    
    if (remainingCents === remainingCents % 5){
        numNickles = 0;
    }
    else{
        numNickles = (remainingCents - (remainingCents % 5)) / 5;
    }
    
    remainingCents = remainingCents % 5;
    numPennies = remainingCents;
}

$("calculate").onclick = function() {showCoinNumbers($("cents").value)};

function showCoinNumbers(cents) {
    'use strict';
    cents = Number(cents);
    getCoinNums(cents);
    $("quarters").value = numQaurters.toString();
    $("dimes").value = numDimes.toString();
    $("nickels").value = numNickles.toString();
    $("pennies").value = numPennies.toString();
}


