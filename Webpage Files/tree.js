	// Declaring variables
	var tree; 
	
	// Initializing values
	tree = document.getElementById("tree"); 
	node1 = createNode("Hello", "http://www.google.com");
	node2 = createNode("There", "http://www.facebook.com");
	node3 = createNode("Top", "http://www.hotmail.com");
	node4 = createNode("hi", "http://www.gmail.com")
	level1 = createLevel();
	level2 = createLevel();
	addToLevel(1, node3);
	addToLevel(2, node1);
	addToLevel(2, node2);


	function createLevel(){
		var newLevel = document.createElement("div");
		newLevel.id = "Level" + tree.childNodes.length; 
		newLevel.setAttribute("class", "level"); 
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
		return newNode; 
	}

	function addToLevel(level, node){
		var toAdd = document.getElementById("Level" + level);
		node.id = "nodeFloatsLeft";
		var levelNodes = toAdd.childNodes.length; 
		toAdd.appendChild(node); 
	}
