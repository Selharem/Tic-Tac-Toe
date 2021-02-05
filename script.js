var playedXY = [0,0,0,0,0,0,0,0,0]
var play = false;
var y;
var playedX = [0,0,0,0,0,0,0,0,0]
var playedY = [0,0,0,0,0,0,0,0,0]
var EndGame = false;

document.getElementsByTagName('table').style.color = 'red';


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
    if(playedY[y]==0){
        document.getElementById(y).style.background = 'white';
        play = !(play);
        playedX[y]=1;
        playedXY[y]=1;
    }
}

function displayY() {
    if(playedX[y]==0){
        document.getElementById(y).style.background = 'black';
        play = !(play);
        playedY[y]=1;
        playedXY[y]=1;
    }
}

function verify(arrayP) {
    if(arrayP[0]==1){
        if(arrayP[1]==1 & arrayP[2]==1){
            confirm('play again');
            //location.reload();
            //document.getElementById('table').style.background = 'aqua';
            resetColor();
            var EndGame = true;
        }if(arrayP[3]==1 & arrayP[6]==1){
            confirm('play again');
            //location.reload();
            //document.getElementById('table').style.background = 'aqua';
            resetColor();
            var EndGame = true;
        }if(arrayP[4]==1 & arrayP[8]==1){
            confirm('play again');
            resetColor();
            //document.getElementById('table').style.background = 'aqua';
            //location.reload();
            var EndGame = true;
        }
    }
}

function resetColor() {
    playedXY = [0,0,0,0,0,0,0,0,0]
    play = false;
    y = null;
    playedX = [0,0,0,0,0,0,0,0,0]
    playedY = [0,0,0,0,0,0,0,0,0]
    EndGame = false;
    for(var i=0;i<9;i++){
        displayX[i] = 0; 
        displayY[i] = 0; 
        document.getElementById(i).style.background = 'aqua';
    }
}

