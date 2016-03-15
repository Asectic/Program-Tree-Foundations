	var nextButton = document.getElementById("frontNext");
	var backButton = document.getElementById("goBack"); 

	window.onload = function() {
		 document.getElementById("lessonPortion").style.display = 'block';
		document.getElementById("exercises").style.display = 'none'; 
	};

	$(nextButton).click(function () {
    	    document.getElementById("lessonPortion").style.display = 'none';
			document.getElementById("exercises").style.display = 'block'; 
	});

	$(backButton).click(function (){
			document.getElementById("lessonPortion").style.display = 'block'; 
			document.getElementById("exercises").style.display = 'none'
	}); 
