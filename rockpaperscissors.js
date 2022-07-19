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
   return ‘You should pick between the rock, paper or scissors’;
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

return getComputerChoice(); 

/* 7) Now it’s ime to determine a winner. Create a function named determineWinner that takes two parameters named userChoice and computerChoice. 
This function will compare the two choices played and then return if the human player won, lost, or tied. Let’s deal with the tie condition first. 
Within the determineWinner() function, write an if statement that checks if the userChoice parameter equals the computerChoice parameter. 
If so, return a string that the game was a tie. */

const  determineWinner = (userChoice , computerChoice) => {
    if(userChoice === computerChoice) {
        return ‘The game is tie!’;
     }
 
 /*8) If the game is not a tie, you’ll need to determine a winner. Begin by writing an if statement that checks if the userChoice is ‘rock’. 
 Inside the if statement’s block, write another if/else statement. The inner if/else whould check if the computerChoice is ‘paper’. 
 If so return a message that the computer won. If not, return a message that the user won.*/
 
 If(userChoice === ‘rock’) {
   If(computerChoice === ‘paper’) {
      return ‘Computer won!’;
      } else {
       return ‘User won!’;
      }
     }
 
 /* 9) Next, write another if statement for if the userChoice is ‘paper’. Inside this if statement, the computerChoice must be wither ‘scissors’ or ‘rock’. 
       Write logic that will return a winner.*/
 
 If(userChoice === ‘paper’) {
   If(computerChoice === ‘scissors) {
      return ‘Computer won!’;
       } else {
       return ‘User won!’;
       }
      }
 
 /* 10) Next, write yet another if statement for if the userChoice is ‘scissors’. Inside of this if statement, the computerChoice must either be ‘rock’ 
 or ‘paper’. Write logic that will return a winner.*/
 
 If(userChoice === ‘scissors’) {
   If(computerChoice === ‘rock’) {
     return ‘Computer won!’;
       } else {
      return ‘User won!’;
       }
      }
};

/* 11)  Don’t forget to test your function! Check off this task when you’re finished testing.*/

Console.log(determineWinner(‘paper’, ‘rock’);
Console.log(determineWinner(‘paper’, ‘scissors’);
Console.log(determineWinner(‘rock’, ‘scissors’);
            
/* 12) Everything is set up. Now you need to start the game and log the results. Create a function named playGame. Inside the playGame() function, create a variable
named userChoice set equal to the result of calling getUserChoice(). Passing in either ‘rock’ , ‘paper’, or ‘scissors’ as an argument.Create another variable named
computerChoice, and set it equal to the result of    calling getComputerChoice().
Under both of these variables, use console.log to print them to the console. */
            Const playGame = ()=> {
Const userChoice = getUserChoice(‘paper’);
Const computerChoice = getComputerChoice();

Console.log(userChoice);
Console.log(computerChoice)
}

playGame()







