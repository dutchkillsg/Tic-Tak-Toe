//use doc.ready to wrap functions after page loads
$(document).ready(function(){
	//create a player 1 to test
	var player = 1;
	//make a click event for the class sqaures
	$('.square').on("click", function(event){
		
		//store the square class into $(this)
		var squareSelected = $(this);
		//make an if else statenent that adds the class "ex" || "oh" to your html to show it has been selected
		if(squareSelected.hasClass("ex") || squareSelected.hasClass("oh")){
			alert("you have clicked here already!")
		} else {
			//when square has been selected by player 1 set the player to 2;vice versa
			if(player===1){
				squareSelected.addClass("ex");
				if (checkWin("ex")){
					alert("Congrats! Player " + player + " has WON!")
				} else {
				player = 2;
				}
			} else {
				squareSelected.addClass("oh");
				if (checkWin("oh")){
					alert("Congrats! Player " + player + " has WON!")
				} else {
				player = 1;
			 	}
			}
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
			return false;
		}
	}

});

	
					