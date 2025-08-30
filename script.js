// CALL getUserInput and SET the user input variable
let userChoice = getUserChoice();
// CALL getChoiceInput and SET the return value into a variable
let computerchoice = getComputerChoice();
// SET a function called getUserChoice
// let randomNumber = (Math.floor(Math.random() * 3)+1);
function getUserChoice(){
    
// READ the user input
userChoiceReturn = prompt("Choice between rock paper scissor");
// RETURN the user input
return userChoiceReturn.toLowerCase();
}

// SET a function called getComputerChoice
function getComputerChoice(){
// OBTAIN a random number from 1-3
    let randomNumber = (Math.floor(Math.random() * 3)+1);
// IF genrated number = 1
    if (randomNumber === 1){
        return 'rock';
    }else if (randomNumber === 2){
        return 'paper';
    }else{
        return 'scissor';
    }
    //return rock
// ELSE IF generated number = 2

    // return paper
// ELSE 
    //  retunr scissor
// ENDIF
}
// SET a function that will recieve both the user choice and the computer choice
function playRound(userChoice , computerChoice){

    let computerScore = 0;  // SET a variable that keep track the computer score
    let userScore=0;    // SET a variable that will keep track the user score
// FOR repetition reaches 5
if( userChoice === computerChoice){ // IF userchoice === computerchoice
    userScore += 0;
}else if (userChoice === 'rock' && computerChoice === 'paper'){// ELSEIF userchoce === 'rock' && computerchoice === "paper"
        computerScore +=1;// INCREAMENT computer score by one

}else if (userChoice === 'scissor' && computerChoice === 'rock'){ // ELSEIF userchoice === 'scissor' && computer === 'rock'
    computerScore +=1; // INCREAMENT computer choice by one

}else if (userChoice === 'paper' && computerChoice === 'scissor'){// ELSEIF usechoice === 'scissor' && computer === 'rock'
    computerScore+=1;// INCREAMENT computer choice by one
}else{ // ELSE
  
    userScore += 1  // INCREAMENT user score by one
}
// ENDFOR
// COMPUTE the the score 
console.log(computerScore)
console.log(userScore)
// PRINT the winner 
}

playRound(userChoice,computerchoice)
// // SET a variable that keep track the computer score

