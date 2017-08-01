$(document).ready(function(){
	var player = 1;
	$('.square').on("click", function(event){
		

		var squareSelected = $(this);
		if(squareSelected.hasClass("ex") || squareSelected.hasClass("oh")){
			alert("you have clicked here already!")
		} else {
			if(player===1){
				squareSelected.addClass("ex");
				player = 2;
			} else {
				squareSelected.addClass("oh");
				player =1
			}
			//add the rest of our logic 
		}
	})

});

	