	var navigationLinks = document.getElementById("nav"); 

	createNavigationLink("Home", "https://www.google.com");
	createNavigationLink("Lessons", "https://www.twitter.com"); 
	
	function createNavigationLink(name, redirect){
		var newLink = document.createElement("div"); 
	var text = document.createTextNode(name); 
		
		newLink.setAttribute("class", "navLink");
		$(newLink).click(function () {
    			window.location = redirect;
		});

		newLink.appendChild(text); 
		navigationLinks.appendChild(newLink); 
	}
