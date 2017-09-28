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

 List unsolved problems which would be fixed in future iterations.
- I didn't really have any unsolved problems due to how I defined project scope.
- I would like to focus on how to do the bonus items in a future iteration, and make further UI improvments

## Link to wireframes and user stories.
https://git.generalassemb.ly/TacosTacosTacos/game-project-scope-study/blob/response/study.md

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
