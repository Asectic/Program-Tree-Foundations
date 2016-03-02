Main Idea
===============================================================================================================================================
This is an website platform to teach C language in a interactive environment. 

At the start of this phase, the group met and deliberated on the features we would include in this build. It was decided that we valued the back end functionality over front end content. With this mind set, the implemented features in this phase included a compiler for c code, a login system, node representation for the lessons, and the functional code for a memory allocation game. With these features, it will be much easier to build the lessons for the next phases as the functional requirements to build our MVP are already met.

High Level Design
==============================================================================================================================================
For this phase of the project we aimed to implement the sign-up page, log-in page, lesson page with a hierarchical representation of lessons arranged in a tree structure, and one of the interactive games that will be used to teach one of the specific lessons. Additionally, we aimed to have a C compiler implemented by this phase. This compiler would be capable of interpreting and testing any code written by the user. This will allow us to evaluate the skills that a particular person has learned in C as well as to help identify any areas the user is struggling with. The website will be developed using the expressjs framework for the server side, EJS framework for the client side, and MongoDB for the database to store user information. Expressjs and nodejs is a community-driven website development platform with a lot of support. This allows for a lot of flexibility in building our MVP because if any design decisions change in the near future, the feature can be added to our website with ease. The EJS framework which stands for Embedded JavaScript is one of the.......

C Compiler
==============================================================================================================================================
After some research on online compiling, we have decided to implement the compiler by outputting the user's C code and compile it on the server-side. First we get the input code from the user by using a post request and then write the c code in to a .c file by using the filesystem module of nodejs. Then we used the child_process.exec module of nodejs to spawn a shell and execute required commands, "gcc c file && output_file.exe". The result, either a standard error (failure) or standard output (success) will then be send back to the user.

The main design struggles for the compiler are:

1) child_process.exec or child_process.spawn?  
	There were two choices for spawning a child_process, exec and spawn. The main difference being exec returns a buffer, and spawn return a stream (data, image). Basically spawn are capable of returning large amount of data but due to the nature of our feature (just returning simple outputs from c code) a buffer containing the result String would be sufficient. 

2) Result not displayed after compile and run                                                                                        
	At first the child_process.exec and shell command was written as module and imported as needed. The module works but when the result (standard output or standard error) of the module was sent back to the user by a response.send() the result won't display. Many approaches were made to the code: string (stderr or stdout), using child_process.spawn instead of exec, but all failed. The final solution is to have the JavaScript together with the main code instead of importing it as a module.     

3) Change syntax when OS is different                                                                                                 
	The initial environment for the server-side was windows so all syntaxes were developed for a windows command line. The syntax obviously failed on other Operating System server-side. New codes were added to check the server's Operating System so appropriate syntax could be used. This is done by parsing the system info and check if it is windows. 


Login System
==============================================================================================================================================


Node Lesson Representation
==============================================================================================================================================


Memory Allocation Game
==============================================================================================================================================
As the group decided to focus on the functionality over content for this phase, the people responsible for the front end started to build a web game to assist in the teaching of memory allocation. The game is planned to be a empty (or partially filed) memory stack and a list of addresses, the user will have code presented to them and will have to place the addresses in the correct position within the memory stack. For this phase we had originally planned for one member to focus on the functionality of the game (clicking, placing, points, etc.), while the other focuses on the presentation (memory stack, addresses, presented code etc.) and put it together at the end. Unfortunately one member has not been heard from and therefore only the functionality has been implemented. At the end of this phase, the game features 3 game pieces of different colours(addresses), which the user is able to click and move with the mouse, and a stack of 3 different colours (the memory stack). The user can move the game piece to its corresponding colour which will trigger an increase in points (to signify the correct address in the correct location). In the development of this phase, many problems were encountered due mostly to a lack of experience with JavaScript and html. One of the main problems was making it so that clicking a game piece will have the game piece follow the mouse and clicking again will place the game piece. This was originally attempted by implementing an event listener for mouse down so that when the user clicks and holds a game piece it would move along with the mouse. This however became unfeasible as the game area would not update properly as the mouse was held and dragged. The next attempt was to have the user click the game piece and have it follow the mouse (which is the format used in the presented build). This was achieved by adding a event listener for mouse move after the mouse click but had the problem of not being able to place the piece on click as the removal of the mouse move event listener proved to be difficult. This was fixed by the implementation of a Boolean value which would keep track on when the mouse move event would be active. The moving of a game piece was the most difficult part, the rest of the game was simply duplicating the game piece, the creation of the stack and some Boolean checks to see if the right piece was in the right part of the stack. For the next phase, we would like to fully finish the game and have the game pieces look like and represent addresses and a memory stack.
