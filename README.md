# Tic-Tac-Toe

Simple Tic-Tac-Toe gaming built using HTML,CSS, and Javascript.

## Technologies

Technologies Used: HTML, CSS, and Javascript
 
## User-Stores

As a user, I should be able to start a new tic tac toe game

As a user, I should be able to click on a square to add X first and then O, and so on

As a user, I should be shown a message after each turn for if I win, lose, tie or who's turn it is next

As a user, I should not be able to click the same square twice

As a user, I should be shown a message when I win, lose or tie

As a user, I should not be able to continue playing once I win, lose, or tie

As a user, I should be able to play the game again without refreshing the page

## Planning

Initially, I wrote down what a tic-tac-toe game entails and what each step is required to playing it. 
I then commented out steps into VSCode for each step to code it. After, coding out parts that I knew how 
to do on top of my head, I would then research methods on how to implement features that I had trouble with.
For example, the every(), and some() methods came in handy multiple times when creating this game. 

## Extra Features

Scoreboard

Audio 

## Unresolved

Mobile Friendly



## How I solve for the winner

I used the some() array method which would check the combinations of winning arrays. The some() method checks if atleast one array matches a combination a player could have. 
I then used the every() array method to check each box element for each player and used classList.contains to see if that player has a matching combination.
I really didn't want to use if/else statements because I felt it wasn't the best way to check a winner, so I researched for a long time on other ways I could implement this.
