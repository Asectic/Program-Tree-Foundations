	// Declaring variables
	var tree; 
	
	// Initializing values
	tree = document.getElementById("tree"); 
	createNode("Hello", "test.html"); 
	createNode("There", "samplehome.html");

	// Function that creates a new node 
	function createNode(text, redirect){
		// Create new elements needed for node
		var newNode = document.createElement("div");
		var text = document.createTextNode(text); 
		
		// Set id of new node		
		newNode.setAttribute("class", "treeNode"); 
		$(newNode).click(function () {
    			window.location = redirect;
		});
		
		// Add them to the DOM
		newNode.appendChild(text); 
		tree.appendChild(newNode);  // This should probably not be here. 
									// Instead we should return the node. 
	}