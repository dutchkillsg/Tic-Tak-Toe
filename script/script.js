/*//use doc.ready to wrap functions after page loads
$(document).ready(function(){
	//create a player 1 to test
	var player = 1;

	//make a click event for the class sqaures
	$('.square').on("click", function(event){
		
		//store the square class into $(this)
		var squareSelected = $(this);
		//make an if else statenent that adds the class "x" || "o" to your html to show it has been already selected
		if(squareSelected.hasClass("fa fa-times fa-4x") || squareSelected.hasClass("fa fa-circle-o fa-4x")){
			alert("you have clicked here already!")
		} else {
			//when square has been selected by player 1 set the player to 2;vice versa
			if(player===1){
				squareSelected.addClass("fa fa-times fa-4x");
				if (checkWin("fa fa-times fa-4x")){
					alert("Congrats! Player " + player + " has WON!")
				} else {
				player = 2;
				}
			} else {
				squareSelected.addClass("fa fa-circle-o fa-4x");
				if (checkWin("fa fa-circle-o fa-4x")){
					alert("Congrats! Player " + player + " has WON!")
				} else {
				player = 1;
			
			 	} 
			}
			//added a reset button that reloads the page 
			$("#reset").on("click",function(){
				location.reload();
            });
		}
	});


	//check if player won
	//if player has 3 across,3 up/down, or 3 diagnal they win
	function checkWin(symbol){
		if($(".sq1").hasClass(symbol) && $(".sq2").hasClass(symbol) && $(".sq3").hasClass(symbol)){
			return true
		} else if($(".sq4").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq6").hasClass(symbol)){
			return true
		} else if($(".sq7").hasClass(symbol) && $(".sq8").hasClass(symbol) && $(".sq9").hasClass(symbol)){
			return true
		} else if($(".sq1").hasClass(symbol) && $(".sq4").hasClass(symbol) && $(".sq7").hasClass(symbol)){
			return true
		} else if($(".sq2").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq8").hasClass(symbol)){
			return true
		} else if($(".sq3").hasClass(symbol) && $(".sq6").hasClass(symbol) && $(".sq9").hasClass(symbol)){
			return true
		} else if($(".sq1").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq9").hasClass(symbol)){
			return true
		} else if($(".sq3").hasClass(symbol) && $(".sq5").hasClass(symbol) && $(".sq7").hasClass(symbol)){
			return true
		} else {
         	return false

		}
	}

});*/





	
$(document).ready(function(){
    var player = 1;
    // Define the classes that are used for the two symbols
    var symbols = ['fa-times', 'fa-circle-o'];
    // Get collection of the 9 squares
    var $squares = $(".square");
    // Set the filter to be used to identify occupied square(s)
    var occupied = "." + symbols.join(", .");

    $('.square').on("click", function(event){
        // Add a test to avoid play continues after game already ended
        if (!player) {
            alert("Game is already over. Click reset to start a new game.")
            return;
        }
        var squareSelected = $(this);
        // Use .is() for shorter syntax, only testing two classes
        if(squareSelected.is(occupied)){
            alert("you have clicked here already!");
            return; // Exit, to make rest of code more flat
        }
        // Get name of class to use:
        var symbol = symbols[player-1];
        squareSelected.addClass(symbol);
        if (checkWin(symbol)){
            alert("Congrats! Player " + player + " has WON!");
            player = 0; // Avoid that play continues in this state.
            return; // Exit, to make rest of code more flat
        }
        // Test for a tie
        if ($squares.filter(occupied).length == 9) {
            alert("Game over. It is a tie.");
            player = 0; // Avoid that play continues in this state.
            return;
        }
        // Toggle player between 1 and 2:
        player = 3 - player;
    });

    function checkWin(symbol){
        // Use more generic & functional code to test for 3-in-a-row 
        var lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6]
        ];
        // Return whether some of the lines have the symbol in every cell 
        return lines.some(function (line) {
            return line.every(function (i) {
                return $squares.eq(i).hasClass(symbol);
            });
        });
    }
    
    $('#reset').click(function reset() {
        player = 1;
        // Remove all symbols
        $(".square").removeClass(symbols.join(" "));
    });
});					