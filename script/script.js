//scrapped the previous code becaause the CheckWin if else statement did not let the "tie" alert appear
//directly put the "fa fa" icon classes into html so they dont need to be inserted with "add class"
//stored player into a variable 
//
$(document).ready(function(){
	var i = 0
    var names = []
    var player = 1
    // Define the classes that are used for the two symbols
    var symbols = ['fa-times', 'fa-circle-o'];
    // Get collection of the 9 squares
    var $squares = $(".square");
    // Set the filter to be used to identify occupied square(s)
    var occupied = "." + symbols.join(", .");
	//pull form for names then push to names array 
    $("#namesForm").submit(function(){
	   names.push($("#player1").val())
       names.push($("#player2").val())
        return false
	}); 
    
    

    $('.square').on("click", function(event){
        // Add a test to avoid play continues after game already ended
        if (!player) {
            alert("Game is already over. Click reset to start a new game.")
            return;
        }
        var squareSelected = $(this);
        // testing two classes
        if(squareSelected.is(occupied)){
            alert("you have clicked here already!");
            return; 
        }
        // Get name of class to use:
        var symbol = symbols[player-1];
        squareSelected.addClass(symbol);
        if (checkWin(symbol)){ //
            alert("Congrats! Player " + names[player-1] + " has WON!");
            player = 0; // Avoid that play continues in this state.
            return; 
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
        // made a multidimensional array that tests for 3 in a row
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

