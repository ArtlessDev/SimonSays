var gamePattern = [];
var userPattern = [];
var level = 0; 

var arrColors = [
    'red',
    'blue',
    'green',
    'yellow'
]

$(document).keydown(function (e) {
    $('h1').text('Level ' + level);    

    nextSequence()    
});



function nextSequence(){
    var rnd = Math.floor(Math.random()*4)
    
    $('h1').text('Level ' + level); 
    
    var chosenColor = arrColors[rnd];
    userPattern = [];
    gamePattern.push(chosenColor);
    console.log(chosenColor);


    $('.' + chosenColor).fadeOut().fadeIn();
    level++;
}

$('.btn').click(function (e) { 
    //console.log(e.target.id);
    colour =  '.' + e.target.id
    var colorSound = new Audio('/sounds/' + e.target.id + '.mp3')

    userPattern.push(e.target.id)
    
    colorSound.play();
    $(colour).fadeOut().fadeIn();
    checkAnswer(userPattern.length-1);
});



function checkAnswer(currlvl) {
    if(gamePattern[currlvl] === userPattern[currlvl]){
        //console.log('correct')
        if(gamePattern.length === userPattern.length){
            setTimeout(function(){
                nextSequence()
            }, 1000)
        }
    }
    else{
        console.log('incorrect!');
        gameOver()
    }
}


function gameOver(){
    $(document).css('background-color','red');
    setTimeout($(document).css('background-color','#011F3F'),1000);
    $('h1').text('Game over, press any key to restart')

    gamePattern = []
    userPattern = []
    level = 0
}