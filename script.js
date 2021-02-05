var playedX = [0,0,0,0,0,0,0,0,0]; //Player 1
var playedY = [0,0,0,0,0,0,0,0,0]; //Player 1
var switched = false; //for switching turns
var y;
var winner = null;

function choose(x) {
    y = x;
    if(switched == true){
        winner = 'Black';
        displayX();
    }
    else{
        winner = 'White';
        displayY();
        verify(playedY);
    }
}

function displayX() { //change the color when clicking if the other player didn't clicked it  
    if(playedY[y]==0){
        document.getElementById(y).style.background = 'white'; 
        switched = !(switched);
        playedX[y]=1;
    }
}

function displayY() { //change the color when clicking if the other player didn't clicked it 
    if(playedX[y]==0){
        document.getElementById(y).style.background = 'black';
        switched = !(switched);
        playedY[y]=1;
    }
}

function verify(arrayP) { //verify the 8 possibilities of winning the game

    if(arrayP[0]==1){
        if(arrayP[1]==1 & arrayP[2]==1){
            confirm(winner + ' wins.' + ' play again?');
            location.reload();
        }if(arrayP[3]==1 & arrayP[6]==1){
            confirm(winner + ' wins.' + ' play again?');
            location.reload();
        }if(arrayP[4]==1 & arrayP[8]==1){
            confirm(winner + ' wins.' + ' play again?');
            location.reload();
        }
    }
    
    if(arrayP[2]==1){
        if(arrayP[5]==1 & arrayP[8]==1){
            confirm(winner + ' wins.' + ' play again?');
            location.reload();
        }if(arrayP[4]==1 & arrayP[6]==1){
            confirm(winner + ' wins.' + ' play again?');
            location.reload();
        }
    }
    
    if(arrayP[4]==1){
        if(arrayP[1]==1 & arrayP[7]==1){
            confirm(winner + ' wins.' + ' play again?');
            location.reload();
        }if(arrayP[3]==1 & arrayP[5]==1){
            confirm(winner + ' wins.' + ' play again?');
            location.reload();
        }
    }
    
    if(arrayP[6]==1){
        if(arrayP[7]==1 & arrayP[8]==1){
            confirm(winner + ' wins.' + ' play again?');
            location.reload();
        }
    }
}

