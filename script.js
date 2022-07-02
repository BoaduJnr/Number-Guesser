let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
//generate random number
function generateTarget(){
    let random = Math.round(Math.random()*9)
    return random
  }
  
  //find the closest guess and return true of user wins, otherwise false
  function compareGuesses(guess1, guess2, guess3){
      let user = guess1 - guess3
      let auto = guess2 - guess3
      if (Math.abs(auto) >= Math.abs(user) ){
          return true
      }
      else{
          return false
      }
      
    
  }

  //check scores
  function updateScore(win){
        if(win === 'human'){
            humanScore ++;
        }
        if(win === 'computer'){
            computerScore ++;
        }
     };
  
  const advanceRound = function (){
   currentRoundNumber++ 
    };