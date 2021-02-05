var Play = [0,0,0,0,0,0,0,0,0]
var play = false;
var y;
var playedX = [0,0,0,0,0,0,0,0,0]
var playedY = [0,0,0,0,0,0,0,0,0]
var EndGame = false;

document.getElementById('table').style.backgroundColor  = 'red';
document.getElementById('table').style.color  = 'red';


function choose(x) {
    y = x;
    if(play == true){
        displayX();
        verify(playedX);
    }
    else{
        displayY();
        verify(playedY);
    }
}

console.log(playedX);

function displayX() {
    document.getElementById(y).style.background = 'white';
    play = !(play);
    playedX[y]=1;
}

function displayY() {
    document.getElementById(y).style.background = 'black';
    play = !(play);
    playedY[y]=1;
}

function verify(arrayP) {
    if(arrayP[0]==1){
        if(arrayP[1]==1 & arrayP[2]==1){
            confirm('play again');
            document.getElementById('table').style.background = 'aqua';
            var EndGame = true;
        }if(arrayP[3]==1 & arrayP[6]==1){
            confirm('play again');
            document.getElementById('table').style.background = 'aqua';
            var EndGame = true;
        }if(arrayP[4]==1 & arrayP[8]==1){
            confirm('play again');
            document.getElementById('table').style.background = 'aqua';
            var EndGame = true;
        }
    }
}

