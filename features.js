buttonColors=["red","yellow","green","blue"];
gamePattern=[];
userClickedPattern=[];
var level=0;
function newSequence()
{
    userClickedPattern=[];
level=level+1;
$("h2").html("Level "+level);
var rand=Math.floor(Math.random()*4);
var randomButtonColor=buttonColors[rand];
gamePattern.push(randomButtonColor);
$("#"+gamePattern[level-1]).fadeOut(100).fadeIn(100);

}
$("button").click(function(){
    var userChosenColor=this.id;
    userClickedPattern.push(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(level){
    if(userClickedPattern[level]==gamePattern[level])
    {
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
              newSequence();
            }, 1000);
    
          }
    }
    else
    thankYou();


}

$(document).keypress(function(){
    if(level==0)
    newSequence();
});

function thankYou(){
    level=0;
    gamePattern=[];
    $("h2").html("Game Over!! Click on any key to restart!");
}


