var welcome = document.querySelector("#introduction");
var introPage = document.querySelector("#intro-page");

var startButton = document.querySelector('.startb');
var enterButton = document.querySelector('#enterb');

var questionEl = document.querySelector("#question");
var a = document.querySelectorAll(".option")
var op1 = document.querySelector('#op1');
var op2 = document.querySelector("#op2");
var op3 = document.querySelector('#op3');
var op4 = document.querySelector("#op4"); 

var scoreBoard = document.querySelector("#submit_page")
var timer = document.querySelector('3timer-count');
var result = document.querySelector('#result');
var fianlScore = document.querySelector("#final-score");
var userTag = document.querySelector("#tag");

var subbtnEl = document.querySelector("#sub_btn");
var highScorePgEl = document.querySelector('#high-ScorePg');
var recordEl = document.querySelector("#record");
var scoreCheck = document.querySelector("#score_check");
var finish = document.querySelector("#finish");

var backBtnEl = document.querySelector("#back-btn");
var clearBtnEl = document.querySelector("#clear_btn");


var score = 0;
var questoinCount = 0;


var Questions = [{ 
    
    q: "0",
    a: ["a. ", "b.", "c. ", "d. "],
    answers: "a"
        
},{ 
    q: "1",
    a: ["a.or am i ", "b.", "c. ", "d. "],
    answers: "b"

},{ 
    q: "2",
    a: ["a. ", "b.", "c. ", "d. "],
    answers: "c"    

},{ 
    q: "3",
    a: ["a. ", "b.", "c. ", "d. "],
    answers: "d"    

},{ 
    q: "4",
    a: ["a. ", "b.", "c. ", "d. "],
    answers: "a"

},{ 
    q: "5",
    a: ["a. ", "b.", "c. ", "d. "],
    answers: "a"

},{ 
    q: "6",
    a: ["a. ", "b.", "c. ", "d. "],
    answers: "a"

},{ 
    q: "7",
    a: ["a. ", "b.", "c. ", "d. "],
    answers: "a"

},{ 
    q: "8",
    a: ["a. ", "b.", "c. ", "d. "],
    answers: "a"    
}   
]

function startGame() {
    startButton.style.display = 'none';
        
    questionNumber = 0
    downer();
    showQuestion(questionNumber);
}

function showQuestion(x) {
    
    questionEl.textContent = Questions[x].q;
   
    op1.textContent = Questions[x].a[0];
    op2.textContent = Questions[x].a[1];
    op3.textContent = Questions[x].a[2];
    op4.textContent = Questions[x].a[3];
    questionNumber = x;
}

function checker(event) {
    event.preventDefault();

        result.style.display = "block" ;
        setTimeout(function () {
            result.style.display = "none";
        }, 1000)

    if (Questions[questionNumber].answers == event.target.value) {
        
        result.textContent = 'Correct!';
        score = score+ 1;
        console.log(score)
    } else {
        seconds = seconds - 5;
        result.textContent = "Nope, That is incorect" + Questions[questionNumber].answers + ",";
        console.log(score)
    }

    if (questionNumber < Questions.length - 1 ) {

        showQuestion(questionNumber + 1 );
    }else {
        gameOver();
}
questoinCount++;
}

function gameOver() {
    questionEl.style.display = "none";
    scoreBoard.style.display = "block";
    console.log(scoreBoard);
    console.log(score)
    
    score.textContent = "your Final score is: " + score;

    timer.style.display = 'none';
}



var seconds = 60;

function downer() {
    var timerInterval = setInterval(function(){
        seconds--;
        timer.textContent = 'Time ' + seconds + " going down";

            if (seconds <= 0){
                clearInterval(timerInterval);
                timer.textContent = "time is up";

            }
    }, 1000)
}





    /* op1.addEventListener('click', () => {
        op1.style.color = 'green';
        op2.style.color = 'red';
        op3.style.color = 'red';
        op4.style.color = 'red';
       
    })
    op2.addEventListener('click', () => {
        op1.style.color = 'red';
        op2.style.color = 'green';
        op3.style.color= 'red';
        op4.style.color = 'red';
        
    })
    op3.addEventListener('click', () => {
        op1.style.color = 'red';
        op2.style.color = 'red';
        op3.style.color = 'green';
        op4.style.color = 'red';
        
    })
    op4.addEventListener('click', () => {
        op1.style.color = 'red';
        op2.style.color= 'red';
        op3.style.color = 'red';
        op4.style.color = 'green';
        
    }) */




startButton.addEventListener("click", startGame)
 

a.forEach(function(click){
    
    click.addEventListener("click", checker);
});
    
