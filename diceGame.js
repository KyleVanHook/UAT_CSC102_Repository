        function playGame() {
        //declare two random numbers between 1-6 for the player and the computer
        let playerRoll1 = Math.floor(Math.random() * 6) + 1; 
        let playerRoll2 = Math.floor(Math.random() * 6) + 1;

        let computerRoll1 = Math.floor(Math.random() * 6) + 1;
        let computerRoll2 = Math.floor(Math.random() * 6) + 1; 
        //calculate the total        
        let playerTotal = playerRoll1 + playerRoll2;
        let computerTotal = computerRoll1 + computerRoll2;
        //Build a result message
        let message = "<strong> You rolled: </strong>" + playerRoll1 + " and " + playerRoll2 
        + " (Total: " + playerTotal + ") <br>";
        message += "<strong> Computer rolled: </strong> " + computerRoll1 + " and " + computerRoll2
        + " (Total: " + computerTotal + ") <br>";
        // Determine the winner
        if(playerTotal > computerTotal) {
            message += "<h2> You win!!!</h2>";
        }
        else if(playerTotal < computerTotal){
            message += "<h2> The Computer wins!</h2>";
        }
        else{
            message += "<h2> It's a Tie...</h2>";
        }
        //Output result to the page
        document.getElementById("output").innerHTML = message;
        }