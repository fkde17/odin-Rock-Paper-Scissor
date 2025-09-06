// SET a function called getUserChoice
// let randomNumber = (Math.floor(Math.random() * 3)+1);

let computerScore = 0;  // SET a variable that keep track the computer score
let userScore=0;    // SET a variable that will keep track the user score
let clickCount = 0
function playGame(){

document.addEventListener("DOMContentLoaded",function (){
    body = document.querySelector('body')
    const winnerTeller = document.createElement('div')  
    
    // const container = document.querySelector('div')
    const rockButton = document.createElement('button')
    rockButton.textContent = 'Rock'
    const paperButton = document.createElement('button')
    paperButton.textContent = 'Paper'
    const scissorButton = document.createElement('button')
    scissorButton.textContent = 'Scissor'
    // document.addEventListener('DOMContentLoaded', 90)
    body.appendChild(rockButton)
    body.appendChild(paperButton)
    body.appendChild(scissorButton)
    container = document.createElement('div')
    body.appendChild(container)
    body.appendChild(winnerTeller) 



    document.addEventListener('click', function(e){
        console.log(computerChoice,userChoice)
        clickCount++
        winnerTeller.textContent = ''
        if (e.target === rockButton){
            userChoice = 'rock'
        }else if(e.target === paperButton){
            userChoice = 'paper'
        }else{
            userChoice = 'scissor'
        }
        let computerchoice = getComputerChoice();
        playRound(userChoice,computerchoice);
        console.log(e.detail)
        container.textContent = `user-score:${userScore} \n computer-score: ${computerScore}`

        if (clickCount===5){

        if (computerScore>userScore){  //IF computer score greate than user score
        
            winnerTeller.textContent = 'You Lose'
        }else if(userScore>computerScore){ // ELSE 
            winnerTeller.textContent = 'You Win'
        }else{
            winnerTeller.textContent ='Draw'
        }
            userScore = 0
            computerScore=0
            clickCount = 0
        }
    })

})



// CALL getUserInput and SET the user input variable
// let userChoice = getUserChoice();
// CALL getChoiceInput and SET the return value into a variable


// function getUserChoice(){
    
// // READ the user input
// userChoiceReturn = prompt("Choice between rock paper scissor");
// // RETURN the user input
// return userChoiceReturn.toLowerCase();
// }

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

// PRINT the winner 
// console.log(computerScore, userScore)
}


}



// }

playGame()
   
