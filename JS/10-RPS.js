let score = JSON.parse(localStorage.getItem('score'))  || {
  wins: 0,
  Losses: 0,
  ties: 0
};

updateScoreElem();
/*
if (!score){
  score = {
    wins: 0,
    Losses: 0,
    ties: 0
  };
}*/

function playGame(playerMove){
  const compMove = pickCompMove();
  
  let result = '';
  
  if(playerMove === 'Scissors'){
      if (compMove === 'Scissors'){
      result = 'Tie!';
    } else if ( compMove === 'Rock'){
      result = 'You lose!';
    } else if ( compMove === 'Paper'){
      result = 'You win!';
    }

  }else if (playerMove === 'Paper'){
    if (compMove === 'Paper'){
      result = 'Tie!';
      } else if ( compMove === 'Scissors'){
      result = 'You lose!';
      } else if ( compMove === 'Rock'){
      result = 'You win!';
    }

  }else if(playerMove === 'Rock'){
    if (compMove === 'Rock'){
      result = 'Tie!';
      } else if ( compMove === 'Paper'){
      result = 'You lose!';
      } else if ( compMove === 'Scissors'){
      result = 'You win!';
    }
  }

  if (result === 'You win!'){
    score.wins += 1;
  }else if (result === 'You lose!'){
    score.Losses += 1;
  }else if (result === 'Tie!'){
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElem ();
  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You <img src="Images-RPS/${playerMove}-emoji.png" class="move-icon" alt=""> - <img src="Images-RPS/${compMove}-emoji.png" class="move-icon" alt=""> Computer`;

 /* alert(`You picked ${playerMove}. Computer picked ${compMove}. ${result}
Wins: ${score.wins}, Losses: ${score.Losses}, Ties: ${score.ties}`)*/
  
}

function updateScoreElem(){
  document.querySelector('.js-score')
    .innerHTML =  `Wins: ${score.wins}, Losses: ${score.Losses}, Ties: ${score.ties}`;

}

function pickCompMove(){
  const randomNumber = Math.random();
  let compMove = '';
  

  if (randomNumber >= 0 && randomNumber < 1 / 3){
    compMove = 'Rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2/3) {
    compMove = 'Paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1 ) {
    compMove = 'Scissors';
  }

  return compMove;
}