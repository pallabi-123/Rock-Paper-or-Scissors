/*1.	The user should be able to choose ‘rock’, ‘paper’ or ‘scissors’ when the game starts.
Using const and arrow function syntax, create a function named getUserChoice that takes a single parameter userInput.*/
Const  getUserChoice = userInput => {
 
/* 2) Since user can pass a parameter, such as ‘Rock’ or ‘rock’ with different capitalization, begin by utilizing Javascript’s tolowerCase() function to make the JavaScript’s tolowerCase() function to make the userInput all lowercase.
You can use code like this:
userInput = userInput. tolowerCase();*/
 userInput. tolowerCase();
 
 /* 3) 3. When getting the user’s choice, you should also check to make sure that he user typed a valid choice: ‘rock’, ‘paper’, or ‘scissors’.
Inside getUserChoice(), write an if/else statement that makes sure the userInput is either ‘rock’, ‘paper’, or ‘scissors’. 
If it does, then return the userInput. If not, use console.log to print an error message to the console.
*/
 If(userInput === ‘rock’ ||  userInput === ‘paper’ || userInput === ‘scissors’) {
   return userInput;
} else {
   Console.log(‘You should pick between the rock, paper or scissors’);
}
};

/* 4) Test the function by calling it with valid and invalid input, and printing the results to the console.
You can delete this when you know your functions works.
*/
Console.log(getUserChoice(‘rock’);
Or
Console.log(getUserChoice(‘paper’);
or
Console.log(getUserChoice(‘scissors’);
or
getUserChoice(‘scissors’);
or
getUserChoice(‘knife’);

/* 5) Now we need to have the computer make a choice.
Create a new function named getComputerChoice with no parameters. Inside its block, utilize Math.random() and Math.floor() to get a whole number between 0 and 2. 
Then depending on the number, return either ‘rock’, ‘paper’ or ‘scissors’.
 */

Const getComputerChoice = () => {
  Const randomNumber = Math.floor(Math.random() *3);
 
  Switch (randomNumber) {
Case 0:
   Return ‘rock’;
Case 1:
   Return ‘paper’;
Case 2:
   Return ‘scissors’;
 }
}

/*6) Test the function by calling it multiple times and printing the results to the console. You can delete this when you know your function works.*/

Console.log(getComputerChoice()); 

/* 7) Now it’s ime to determine a winner. Create a function named determineWinner that takes two parameters named userChoice and computerChoice. 
This function will compare the two choices played and then return if the human player won, lost, or tied. Let’s deal with the tie condition first. 
Within the determineWinner() function, write an if statement that checks if the userChoice parameter equals the computerChoice parameter. 
If so, return a string that the game was a tie. */

const  determineWinner = (userChoice , computerChoice) => {
    if(userChoice === computerChoice) {
         return console.log(‘The game is tie!’);
     }
};











