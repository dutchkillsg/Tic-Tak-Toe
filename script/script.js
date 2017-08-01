$(document).ready(function(){
	var player = 1;
	$('.square').on("click", function(event){
		

		var sqaureSelected = $(this);
		if(sqaureSelected.hasclass("ex") || sqaureSelected.hasclass("oh")){
			alert("you have clicked here already!")
		} else {
			if(player===1){
				sqaureSelected.addClass("ex");
			} else {
				sqaureSelected.addClass("oh");
			}
			//add the rest of our logic 
		}
	})

});

	