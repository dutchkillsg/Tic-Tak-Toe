//scrapped the previous code becaause the CheckWin if else statement did not let the "tie" alert appear
//directly put the "fa fa" icon classes into html so they dont need to be inserted with "add class"
//stored player into a variable 
//
	
$(document).ready(function(){
	$("#submit").submit(function(){
	    var names = [$("#player1").val(),$("#player2").val()]
	}) // cant get the player names to work with the player variable. 
    
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