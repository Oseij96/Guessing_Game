let maximum = 0;
    let guess = 0;
    let targetNum = 0;
    let attempts = 1;

    document.querySelector("#submit").addEventListener("click", function() {
      maximum = document.querySelector("#maximum").value;
      while (!maximum) {
        maximum = parseInt(prompt("Enter a valid number!"));
      }
      targetNum = Math.floor(Math.random() * maximum) + 1;
      guess = document.querySelector("#guess").value;
      while (parseInt(guess) !== targetNum) {
        attempts++;
        if (guess > targetNum) {
          guess = parseInt(prompt("Too high! Enter a new guess:"));
        } else {
          guess = parseInt(prompt("Too low! Enter a new guess:"));
        }
      }
      document.querySelector("#result").innerHTML =
        "CONGRATS! YOU WIN!!!<br>YOU GOT IT! It took you " +
        attempts +
        " guesses";
    });

    document.querySelector("#quit").addEventListener("click", function() {
      document.querySelector("#result").innerHTML = "OK, YOU QUIT";
    });