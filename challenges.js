var score, currentPlayer, tmpScore, winner, gameOn;

init();
//button listnsers
document.querySelector('.btn-roll').addEventListener('click', rollBtnEventListner);
document.querySelector('.btn-hold').addEventListener('click', holdBtnEventListner);
document.querySelector('.btn-new').addEventListener('click', init);

function holdBtnEventListner(){
    if(gameOn === true){
        score[currentPlayer] = parseInt(document.querySelector('#current-' + currentPlayer).textContent);
        tmpScore[currentPlayer] = 0;
        document.getElementById('score-' + currentPlayer).textContent = score[currentPlayer];
        checkWinner();
        switchPlayer();
    }
}

function rollBtnEventListner(){
    
    if(gameOn === true){
        //To get Random Number
        
        var number = Math.floor((Math.random()*6) + 1);
            
        //To change dice DOM
        var diceDOM = document.querySelector('.dice');
        diceDOM.src = 'dice-' + number + '.png';
        console.log('dice-' + number + '.png');

        //To update the score of current Player
        var currentPlayerDOM = document.querySelector('#current-' + currentPlayer)
        if(number != 1){
            tmpScore[currentPlayer] = tmpScore[currentPlayer] + number;
            currentPlayerDOM.textContent = score[currentPlayer] + tmpScore[currentPlayer];        
        }
        else{
            tmpScore[currentPlayer] = score[currentPlayer] = 0;
            currentPlayerDOM.textContent = score[currentPlayer] + tmpScore[currentPlayer];
            document.getElementById('score-' + currentPlayer).textContent = 0;
            switchPlayer(); 
        }                
}}

function checkWinner(){
    //To check for the winner
    var input = document.querySelector('.final-score').value;
    if(!input){
        input = 100;
    }
        
    if(score[currentPlayer] >= input){
        winner = currentPlayer;
        gameOn = false;
        document.querySelector('#name-' + currentPlayer).textContent = 'WINNER!!'
        document.querySelector('.player-'+currentPlayer+'-panel').classList.add('winner');
    }
}

function switchPlayer(){
    document.querySelector('.player-'+currentPlayer+'-panel').classList.remove('active');
    currentPlayer = currentPlayer === 0 ? 1 : 0;
    document.querySelector('.player-'+currentPlayer+'-panel').classList.add('active');
}

function init(){
    score = [0,0];
    currentPlayer = 0;
    tmpScore = [0,0];
    winner = 0;
    gameOn = true;
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('#name-0').textContent = 'PLAYER 1';
    document.querySelector('#name-1').textContent = 'PLAYER 2';   
}