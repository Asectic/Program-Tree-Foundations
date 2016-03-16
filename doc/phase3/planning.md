
project-team8 Planning Report: Phase 3
=======================================

The team's goals for this phase:
---------------------------------

For phase 3, the main goals of the "Programming Tree" webpage implementations were the following:

1. Fully implement the tree in Javascript as the following:

	- There is a set of main tree nodes, each on a different "div" element level encompassing each set of content topics
	- <u>EX:</u> "Chapter 1 Basic C Syntax", "Chapter 2: Memory Allocation and Pointers", etc
	- For each main tree node clicked, implement a set of sub tree nodes <b>on a separate page</b> from the main tree nodes
	- <u>EX:</u> In chapter 2 "Pointers", "Memory Model", "Pointers and Arrays", etc
	
	<b>Nodes Implemented:</b>
	- Two main chapter nodes ("Basic Syntax in C" and "Memory Allocation and Pointers")
	- Two sub nodes for each chapter (Chapter 1: Basic Syntax, Variables; Chapter 2: Pointers, Memory Model)

2. To implement the content of the webpage in two page formats

	- For content pages that have a corresponding game, split the page below the navigation bar into two parts ("cotent_pages.css")
	- For content pages with no game, just leave it all under one "main" div element

	<b>Content Pages Implemented:</b>
	- Pointers (Under Chapter 1)
	- Memory Model (Under Chapter 1)
	- Basic Syntax (Under Chapter 2)
	- Variables (Under Chapter 2)

3. Finising the games for the content pages: memory model allocation
4. Complete the login and register forms, enabling the page to redirect upon login or register user success 
5. Change the style of the webpage for the user, and applying it across all pages
6. Implementing the exercises for the content pages and their test cases to check answers

	<b>Exercises Implemented:</b>
	- Pointer Exercises (Under Chapter 2)
	- Variable Exercises (Under Chapter 1)

Goals that weren't met in this phase:
-------------------------------------

In this phase we encountered the following problems in implementing the following goals...

1. Game Implementation
	- FILL IN HERE

2. CSS Layout to all Pages
	- For one of the content pages, it was applied in a complete different style than other pages as "otherStyle.css". We were trying to configure the layout of other content pages as this one, but when it came to wanting it to have this style applied to all pages, for some reason the tree data structure in tree.js would not load properly - and only text with the redirections would appear. So the style of the page was reverted to an older version to make the tree nodes appear.
	- We also encountered some problems in the layout when it came to merging the content with its corresponding game. While the basic css layout was created based on "otherStyle.css" called "content_pages.css", merging the game with the content caused some serious problems in layout.
	
	<b>Suggestions to workaround styling problems</b>:
	- There is no major suggestions when it comes to styling, other than decision matters and keeping the css file references consistent across all content and webpage files.


