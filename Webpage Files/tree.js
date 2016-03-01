	// Declaring variables
	var tree; 
	
	// Initializing values
	tree = document.getElementById("tree"); 
	node1 = createNode("Hello", "http://www.google.com");
	node2 = createNode("There", "http://www.facebook.com");
	node3 = createNode("Top", "http://www.hotmail.com");
	node4 = createNode("hi", "http://www.gmail.com");
	//node5 = createNode("hi", "http://www.google.com"); 
	//node6 = createNode("hi", "http://www.google.com"); 
	//node7 = createNode("hi", "http://www.google.com"); 
	level1 = createLevel();
	level2 = createLevel();
	//level3 = createLevel(); 
	createSubsection(1, 1); 
	createSubsection(2, 2); 

	addToLevel(1, 1, node1);
	addToLevel(2, 1, node2);
	addToLevel(2, 2, node3); 
	addToLevel(2, 1, node4);
	//addToLevel(3, node5); 
	//addToLevel(3, node4); 
	//addToLevel(3, node1); 
	//addToLevel(3, node6);
	//addToLevel(2, node4); 
	//addToLevel(3, node7); 


	function createLevel(){
		// Create Level
		var newLevel = document.createElement("div");
		
		// Set Attributes of that level
		newLevel.id = "Level" + tree.childNodes.length; 
		newLevel.setAttribute("class", "level"); 
		
		// Append it to the tree and return
		tree.appendChild(newLevel);
		return newLevel;
	}
	
	function createSubsection(level, howMany) {
		for (i = 0; i < howMany; i++){
			var newSubsection = document.createElement("div"); 
			newSubsection.setAttribute("class", "level"); 
			var toAdd = tree.childNodes; 
			var levelNode = toAdd[level]; 
			var added = levelNode.appendChild(newSubsection); 	
			added.style.width = "" + 100/level + "%";
		}
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

	function addToLevel(level, subsection, node){
		var levelNode = document.getElementById("Level" + level); 
		var toAdd = levelNode.firstChild; 
		for(i=1; i < subsection; i++){ 
			toAdd = toAdd.nextSibling;
		}
		toAdd.appendChild(node); 
	}
