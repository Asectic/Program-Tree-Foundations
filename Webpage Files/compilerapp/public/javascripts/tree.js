	// Declaring variables
	var tree; 
	
	// Initializing values
	tree = document.getElementById("tree"); 
	node1 = createNode("Chapter 1: Memory Allocation", "/basic"); 
	node2 = createNode("Chapter 2: Pointers", "/pointers");
	node3 = createNode("C Compiler", '/compile');
	level1 = createLevel();
	level2 = createLevel();
	level3 = createLevel();
	addToLevel(1, node1);
	addToLevel(2, node2);
	addToLevel(3, node3);


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
