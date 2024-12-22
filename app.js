let gamePattern = [];
let userClickPattern = [];
let level = 0;
let started = false;
const btnColors = ['purple', 'orange', 'lemon', 'pink'];

startGame();
function startGame() {
    document.addEventListener('keypress',function(){
        if (!started){
            started = true;
            level = 0;
            gamePattern=[];
            nextSequence();
        }
    });
}

function nextSequence() {
    userClickPattern = [];
    level++;
    document.querySelector('h2').innerText = `level ${level}`;

    let randomNumber = Math.floor(Math.random() *btnColors.length);
    let randomColor = btnColors[randomNumber];
    gamePattern.push(randomColor);

    flash(randomColor);
}

document.querySelectorAll('.btn').forEach(button =>
{
    button.addEventListener('click',function(){
        const userChoosenColor = this.id;
        userClickPattern.push(userChoosenColor);
        flash(userChoosenColor);

        checkAnswer(userClickPattern.length - 1);
    })
}
)


function flash(color) {
    let btn = document.getElementById(color);
    btn.classList.add('flash');
    setTimeout(() => {
        btn.classList.remove('flash');
    }, 300);
}

function checkAnswer(currentLevel) {
    if(gamePattern[currentLevel]===userClickPattern[currentLevel]){
        if(gamePattern.length === userClickPattern.length) {
            setTimeout(nextSequence, 1000);
        }
    } else {
        gameOver();
    }
}

function gameOver(){
    document.querySelector('h2').innerText = `Game Over! You scored ${level-1}! Press Any Key to Restart`;
    started = false;
    level =0;
}