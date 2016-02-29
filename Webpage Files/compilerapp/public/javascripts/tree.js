	// Declaring variables
	var tree; 
	
	// Initializing values
	tree = document.getElementById("tree"); 
	node1 = createNode("Hello", "/compilerapp/views/contentCh1.ejs"); 
	node2 = createNode("There", "http://www.facebook.com");
	level1 = createLevel();
	level2 = createLevel();
	addToLevel(2, node1);
	addToLevel(2, node2);


	function createLevel(){
		var newLevel = document.createElement("div");
		newLevel.id = "Level" + tree.childNodes.length; 
		tree.appendChild(newLevel);
		return newLevel;
	}

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
		
		// Add them to the DOM - which creates the node with text (blue)
		newNode.appendChild(text); 
		//tree.appendChild(newNode);
		return newNode; 
	}

	function addToLevel(level, node){
		var toAdd = document.getElementById("Level" + level);
		toAdd.appendChild(node); 
	}
