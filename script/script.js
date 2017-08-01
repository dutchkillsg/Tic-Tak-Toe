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
				player = 2;
			} else {
				squareSelected.addClass("oh");
				player =1
			}
			//add the rest of our logic 
		}
	});
	function checkWin(){
		
	}

});

	