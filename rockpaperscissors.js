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
Console.log(toUserChoice(‘rock’);
Or
Console.log(toUserChoice(‘paper’);
or
Console.log(toUserChoice(‘scissors’);
or
console.log(‘knife’) // 

