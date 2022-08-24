var startButton = document.getElementsByClassName('startb');
var enterButton = document.getElementsByClassName('enterb');

var questionEl = document.getElementById("question");
var op1 = document.getElementById('op1');
var op2 = document.getElementById("op2");
var op3 = document.getElementById('op3');
var op4 = document.getElementById("op4"); 
//var optionsEl = document.getElementsByClassName("option");
var timer = document.getElementById('timer-count');
var result = document.getElementById('result');
var score = 0;

var Questions = [{ 
    id: 0,
    q: "0",
    a: ["a. ", "b.", "c. ", "d. "],
    answers: "a. "
        
},{ id: 1,
    q: "1",
    a: ["a. ", "b.", "c. ", "d. "],
    answers: "a. "

},{ id: 2,
    q: "2",
    a: ["a. ", "b.", "c. ", "d. "],
    answers: "a. "    

},{ id: 3,
    q: "3",
    a: ["a. ", "b.", "c. ", "d. "],
    answers: "a. "    

},{ id: 4,
    q: "4",
    a: ["a. ", "b.", "c. ", "d. "],
    answers: "a. "

},{ id: 5,
    q: "5",
    a: ["a. ", "b.", "c. ", "d. "],
    answers: "a."

},{ id: 6,
    q: "6",
    a: ["a. ", "b.", "c. ", "d. "],
    answers: "a. "

},{ id: 7,
    q: "7",
    a: ["a. ", "b.", "c. ", "d. "],
    answers: "a."

},{ id: 8,
    q: "8",
    a: ["a. ", "b.", "c. ", "d. "],
    answers: "a. "    
}   
]
function checker(event) {
    event.preventDefault();

        result.style.display = "block" ;
        setTimeout(function() {
            result.style.display = "none";
        }, 1000)

    if (Questions[questionNumber].answers == event.target.value) {
        result.textContent = 'Correct!';
        score = score++;
        console.log(score)
    } else {
        seconds = seconds - 5;
        result.textContent = "Nope, That is incorect" + Questions[questionNumber].answers + ",";
        console.log(score)
    }

    if (questionNumber < Questions.length -1 ) {

        showQuestion(questionNumber++);
    }else {
        gameOver();
    }
}

function gameOver() {
    questionEl.style.display = "none";
    scoreBoard.style.display = "block";
    console.log(scoreBoard);
    console.log(score)
    
    score.textContent = "your Final score is: " + score;

    timer.style.display = 'none';
}

function startGame() {
    questionNumber = 0
    downer();
    showQuestion(questionNumber);
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


function showQuestion(id) {
    
    questionEl.innerText = Questions[id].q;
   
    op1.textContent = Questions[id].a[0];
    op2.textContent = Questions[id].a[1];
    op3.textContent = Questions[id].a[2];
    op4.textContent = Questions[id].a[3];

    op1.addEventListener('click', () => {
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
        
    })


}

startButton.addEventListener("click", startGame);

enterButton[0].addEventListener('click', checker)