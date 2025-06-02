 function playGame() {

        //We want to see how many times we have flipped the three coins.
        //Get the current display number and assign it to flipCount.
        var flipCount = document.getElementById("display");
        //convert the flipCount (the display number) into a variable
        var number = flipCount.innerHTML;
        //increase count number
        number++;
        //update the count number
        flipCount.innerHTML = number;
      
        
        //declare random number generators for three coins.
        let FlipCoin1 = Math.floor(Math.random() * 2) + 1; 
        let FlipCoin2 = Math.floor(Math.random() * 2) + 1;
        let FlipCoin3 = Math.floor(Math.random() * 2) + 1;

       
        // Determine if the coin landed on heads or tails. Even will be heads and Odd will be tails.
        //1st coin flip
        if(FlipCoin1%2 == 0) {
            var flipResult1 = "Heads";
        }
        else{
            var flipResult1 = "Tails";
        }

        //2nd coin flip
        if(FlipCoin2%2 == 0) {
            var flipResult2 = "Heads";
        }
        else{
            var flipResult2 = "Tails";
        }
        //3rd coin flip
        if(FlipCoin3%2 == 0) {
            var flipResult3 = "Heads";
        }
        else{
            var flipResult3 = "Tails";
        }
       
        //Build the results message
        let message = "<strong> The coins landed on: </strong>" + flipResult1 + ", " + flipResult2 + ", and " + flipResult3 + ". <br>";

        //Figure out which combination of coins we got.
        if(FlipCoin1%2 == 0 && FlipCoin2%2 == 0 && FlipCoin3%2 == 0) {
            message += "<h2> You Win!!! <h2>";
        }
        else if (FlipCoin1%2 == 0 && FlipCoin2%2 == 0){
            message += "<h2> You Win!!! <h2>";
        }
        else if (FlipCoin1%2 == 0 && FlipCoin3%2 ==0){
            message += "<h2> You Win!!! <h2>";
        }
        else if (FlipCoin2%2 == 0 && FlipCoin3%2 ==0){
            message += "<h2> You Win!!! <h2>";
        }
        else {
            message += "<h2> You Lose... <h2>";
        }

        //Output result to the page
        document.getElementById("output").innerHTML = message;
        }