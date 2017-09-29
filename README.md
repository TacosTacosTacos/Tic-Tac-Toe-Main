Tic-Tac-Toe README

## Description
This is my first modern website project with semi-complex javascript coding.  It's not the best looking page, but it is very functional.

## Game url
https://tacostacostacos.github.io/Tic-Tac-Toe-Main/

## Technologies Used
HTML 5, CSS3, Bootstap 3, SASS

## Development process and problem-solving strategy
My development process focused on minimum viable product.  Since there was a specific deadline for the project, I didn't want to spend much time on anything that wouldn't meet requirements.  This meant that the quality of the UI design was going to treated as secondary until all requirements have been met.

Before the project started, I focused on how to determine if we had a winner.  My first throught was that if I gave each cell a unique enough number, then maybe I could add together the numbers for the cells that the player picked and compare it to the total for each win condition.  After about an hour of trying to work through it, I threw in the towel and worked towards a different solution.  I knew that I needed to store the win conditions in a multi-dimensional array, and the players moves in there own array.  I compared the values selected using array functions in order to determine a winner.  My solution worked, but was based on two arrays of player moves.  After we were given the API documentation for storing moves, I decided to modify my solution to work with a single array holding X's, O's, and ''.

Once the project started, I decided to focus first on Nav and user based API.  This helped me figure out the how to convert my storyboards into code.  After that, most of the coding was easy. When I got the page to a working state, I focused on code cleanup and improving the UI.

## List unsolved problems which would be fixed in future iterations.
- I didn't really have any unsolved problems due to how I defined project scope.
- I would like to focus on how to do the bonus items in a future iteration, and make further UI improvments

	•	Ending a game early during a obvious no win situation.
I think the earliest a no win situation can occur is 5 moves into a game.  At that point you would need to see if there are any win conditions that each user meets 2 out of three spaces. and the third space isn't already taken.  If there are none left for both users, then the game should end as a tie.

	•	If allowing players to compete from separate devices, display a "Waiting..." message while users are waiting to be matched.
This can’t be done in a nice way due to the way the API is built.  To get it to work, you would need to have user1 create a game.  Due to how the create game API works, they would by default be given piece X.  You can work around this to have user piece using the patch action.  If they select X, then can make there first move, and then there click events are removed from there board.  Once this is done, you would have user1’s system start a loop which does a waiting animation and does API calls on a timer (set timeout maybe?) to look for any updates the game status itself (based on comparing the cells field) using the get game by id call.  There would be a overall timeout set which will be set for the game to be updated by user2.  User 2 will need to join the game by the specific game id.  The game ID would need to be provided by user1 to user2 outside of the website.  You can call it creating a private game.  When user 2 enters their ID, there board is updated, and they are given click  events to carry out there move using there piece.  Once they make there move, user2 click events are disabled, and there loop starts to wait for the other users actions to be completed.  This back and forth continues until a user reaches a win condition or tie condition and the game board on the server is updated to say the game is completed.  Once the game is completed, the UI is updated with the appropriate message on both screens.

The stats screen would need to be reworked to specifically compare the logged in user id with the part of the api defining X and O.

	•	Keep track of multiple game rounds with a win counter.
I’m not sure how this is different from the stats UI requirement.  I assume this is considered to be local games during that session.  This is simple since you just need to store the wins/losses in a separate local variable while the user is logged in.

	•	Allow players to customize their tokens (X, O, name, picture, etc).
There is nothing special here.  You just need an ability to store the users profile piece.  This can be saved to local storage and pulled back as needed since there isn’t an api for this.  The big thing is that you would need to reinterpret what X and O represents in the API.  Instead of treating them as literals, you would need to assume that X is always player 1 and O is always player 2.  What is represented on the board would just interpret that.

	•	Get inventive with your styling, e.g. use hover effects or animations to spiff things up.
This I technically did.  It’s up to interpretation as to what is considered stylish.

	•	Add tableside chat to your game.
This is the only bonus I’m not sure how to do.  There doesn’t seem to be a place in the API for storing this information.

	•	Use localStorage to persist data locally, allowing games to continue after page refresh or loss of internet connectivity.
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
https://www.safaribooksonline.com/blog/2013/10/10/how-to-use-html5-local-storage/
https://www.smashingmagazine.com/2010/10/local-storage-and-how-to-use-it/

After each API call, save the information also to local storage.  Use stringily when passing the objects.
When a user refreshes there page, pull the data from local storage to get the current state.  Update the UI/game as needed.  Make sure that the users browser supports local storage.  The only complication to this is

## Link to wireframes and user stories.
https://git.generalassemb.ly/TacosTacosTacos/game-project-scope-study/blob/response/study.md

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
