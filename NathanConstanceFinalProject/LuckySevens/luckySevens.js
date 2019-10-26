function clearErrors() {
    for (var loopCounter = 0;
        loopCounter < document.forms["numberFun"].elements.length;
        loopCounter++) {
        if (document.forms["numberFun"].elements[loopCounter]
           .parentElement.className.indexOf("has-") != -1) {

            document.forms["numberFun"].elements[loopCounter]
               .parentElement.className = "form-group";
        }
    }
}

/*
function resetForm() {
    clearErrors();
    document.forms["numberFun"]["num1"].value = "";
    document.getElementById("results").style.display = "none";
    document.getElementById("submitButton").innerText = "Submit";
    document.forms["numberFun"]["num1"].focus();
}
*/

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}


function validateItems() {
    clearErrors();
    var num1 = document.forms["numberFun"]["num1"].value;
    if (num1 == "" || isNaN(num1)) {
        alert("Num1 must be filled in with a number.");
        document.forms["numberFun"]["num1"]
           .parentElement.className = "form-group has-error";
        document.forms["numberFun"]["num1"].focus();
        return false;
    }

    if (!(num1>0) || isNaN(num1)) {
        alert("Num1 must be greater than 0");
        document.forms["numberFun"]["num1"]
           .parentElement.className = "form-group has-error";
        document.forms["numberFun"]["num1"].focus();
        return false;
    }

    var startingBet=num1;
    var money = num1;
    var maxMoneyHad = num1;
    var rollNumber = 0;
    var rollNumberMaxMoney = 0;

    while (money>0){
      rollNumber = rollNumber+1;
      var die1=rollDice();
      var die2=rollDice();
      var dieSum=die1+die2;
      if (dieSum==7){
        money=money+4;
      }
      else {
        money=money-1;
      }

      if (money>maxMoneyHad){
        maxMoneyHad=money;
        rollNumberMaxMoney=rollNumber;
      }
    }





   document.getElementById("results").style.display = "block";
   document.getElementById("submitButton").innerText = "Play Again";
   document.getElementById("startingBet").innerText = "$" + startingBet + ".00";
   document.getElementById("highestAmountWon").innerText = "$" + maxMoneyHad + ".00";
   document.getElementById("totalRollsBeforeGoingBroke").innerText = rollNumber;
   document.getElementById("rollCountatHightestAmountWon").innerText = rollNumberMaxMoney;
   // We are returning false so that the form doesn't submit
   // and so that we can see the results
   return false;
}
