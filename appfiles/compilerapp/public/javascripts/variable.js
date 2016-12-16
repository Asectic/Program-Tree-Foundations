	var nextButton = document.getElementById("goNext");
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
	
	function checkAnswer1(){
		var answer = document.getElementById("answer1").value;
		answer = answer.search(/^int\s+\w/i);
		
		var reply = "";
		if(answer == 0){
			reply = "\nThat is correct!"; 
		} else { 
			reply = "\nThat is incorrect! Look at the declarations above and try again";
		}
		document.getElementById("result1").innerHTML = reply; 
	}

	function checkAnswer2(){
		var answer = document.getElementById("answer2").value;
		answer = answer.search(/^float\s+\w/i);
		
		var reply = "";
		if(answer == 0){
			reply = "\nThat is correct!"; 
		} else { 
			reply = "\nThat is incorrect! Look at the declarations above and try again";
		}
		document.getElementById("result2").innerHTML = reply; 
	}

	function checkAnswer3(){
		var answer = document.getElementById("answer3").value;
		answer = answer.search(/^char\s+\w/i);
		
		var reply = "";
		if(answer == 0){
			reply = "\nThat is correct!"; 
		} else { 
			reply = "\nThat is incorrect! Look at the declarations above and try again";
		}
		document.getElementById("result3").innerHTML = reply; 
	}

