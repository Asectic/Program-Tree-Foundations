
CSC301 Winter 2016 - Project Team #8:
--------------------------------------------
“Programming” Tree Education System
--------------------------------------------

About this Project:
--------------------

Our project revolves around implementing a “programming trees” system, which will be used to incrementally teach students different disciplines of programming. For this project our primary language we will be using to teach is C. This project will be aimed towards helping students who are either learning the language for the first time, or will be wishing to review and have more practise in grasping certain aspects of the language.

- <b>Platform</b>: website
- <b>Language(s)</b>: HTML & CSS, JavaScript

Rationale
-----------

The main focus of our website is to supplement the user’s knowledge on C programming, to help better their understanding of the language. Where with our interactive system of being able to track the user’s learning progress through the programming tree and through the exercises and tests, users will be able to understand the concepts more efficiently as supposed to learning through a lecture environment at school. With the visual interface and interactive system we will implement, a combination of spatial and kinesethic learning is incorporated.

Repo Directory:
----------------------------------

The server file is named "app.js" and it is inside appfiles/compilerapp

--

Logistics of the Programming Tree
----------------------------------

Structure:
----------

1.	There will be a main tree of nodes, which will include the names of the main topics our website is going to teach to the users

2.	Then for each node of the main tree, there will be a subtree branching off which will focus more on the smaller topics pertaining to the topic of the main node. For example if the topic of a main node is “Pointers”, the topics of some of the nodes in the subtree would be “Dereferencing”, “Similarities to Array Notations”, etc.

- Each subtree node will contain exercises for the student to complete, to test the knowledge of the concept they just learned. At the end of each subtree, there will be a final test which will be counted for marks on our website system – where in order to proceed to the next main node of the programming tree, the user must be able to acquire a certain % rate on the test.

Hierarchy:
----------

Every node in the programming tree will consist of problem sets with varying levels of difficulty, where the first few nodes on the main tree will start off with easier concepts of C programming and then progressively delving onto the more difficult concepts as the user goes through the programming tree.

Components of the Website
--------------------------

<b>Homepage</b>:

When the user logs into the homepage, this page will present with the information on what our website is about (teaching C) and how our teaching system will work (progression through programming tree).

<b>User Account System</b>: 

Each student will be required to create an account and login into it whenever they enter the site, for the purposes of progress tracking and analysis.

<b>Programming Tree & Lessons Structure</b>:

After the user logins with their account, the entire lesson page will be brought up. Where on the left side of the webpage will present a diagram of the programming tree that is initially grey or uncolored. When the user clicks on a main node of the tree, a subtree will appear on the screen where the user will then be able to click on the first subtree node.

When a subtree lesson node is selected, the concepts of the lesson and its relevant code examples will be shown in the middle of the page. After scrolling down to the end of the concepts section the user will be presented with the exercises to complete for that lesson.

The right hand side of the page will be reserved for any comments which will provide the user with the background information of how certain concepts or bits in code work “behind” the scenes. This will provide the student with more comprehensive information in order to better their understanding of the concept at hand.

If the current lesson is the last node of the subtree, after the student completes the exercise for that lesson they will be directed to the “final test” page, where this test will incorporate everything they have learned from the current subtree.
