	var navigationLinks = document.getElementById("nav"); 

	createNavigationLink("Home", "/");
	createNavigationLink("Lessons", "/lessons"); 
	
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
