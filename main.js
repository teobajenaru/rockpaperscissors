function computerPlay(){
    var choice = ['rock','paper','scissors'];
    var x = parseInt(Math.random()*10%3);
    
    return choice;
}
function playRound(playerSelection, computerSelections){
    var winner;
    if(playerSelection=='rock' && computerSelections=='paper')
        winner = 'computer';
        else if(playerSelection=='paper' && computerSelections=='rock')
            winner = 'player';
            else if(playerSelection=='rock' && computerSelections=='scissors')
                winner = 'player';
                    else if(playerSelection=='scissors' && computerSelections=='rock')
                        winner = 'computer';
                        else if(playerSelection=='paper' && computerSelections=='scissors')
                            winner = 'computer';
                                else if(playerSelection=='scissors' && computerSelections=='paper')
                                    winner = 'player';
                                    else winner = 'draw';
    return winner;
}
function playerPlay(){
    var choice = prompt('enter rock paper or scissors');
    choice = choice.toLowerCase();
    return choice;
}

function game(){
    var k=0;
    var playerScore=0;
    var computerScore=0;
    var win;
    while(k<5){
        k++;
        win=playRound(playerPlay(),computerPlay());
        console.log(win);
        if(win =='player')
        {
            console.log(win)
            playerScore++;
        } else computerScore++;
        console.log(k);
        console.log(playerScore);
        console.log(computerScore);
    
    }
    
}
game();

