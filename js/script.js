var startButton = document.getElementsByClassName('startb');
var enterButton = document.getElementsByClassName('enterb');
var shuffledQuestions , currentQestion; 
var questionEl = document.getElementById("question");
var aButtonEl1 = document.getElementById('op1');
var aButtonEl2 = document.getElementById("op2");
var aButtonEl3 = document.getElementById('op3');
var aButtonEl4 = document.getElementById("op4");
var optionsEl = document.getElementsByClassName("option")
var timer = document.getElementById('timer-count');
var result = document.getElementsByClassName('result');
var score = 0;

var Questions = [{ 
    id: 0,
    q: "0",
    a: [{ text: "a. ", isCorrect: true},
        { text: "2: ", isCorrect: false},
        { text: "3: ", isCorrect: false},
        { text: "4: ", isCorrect: false}],
        answers: "a"
},{ id: 1,
    q: "1",
    a: [{ text: "a. ", isCorrect: true},
        { text: "awnser", isCorrect: false},
        { text: "wrong", isCorrect: false},
        { text: "wrong", isCorrect: false}],
        answers: "a"
},{ id: 2,
    q: "2",
    a: [{ text: "a. ", isCorrect: true},
        { text: "wrong", isCorrect: false},
        { text: "wrong", isCorrect: false},
        { text: "answer", isCorrect: false}],
        answers: "a"
},{ id: 3,
    q: "3",
    a: [{ text: "a. ", isCorrect: true},
        { text: "answer", isCorrect: false},
        { text: "wrong", isCorrect: false},
        { text: "wrong", isCorrect: false}],
        answers: "a"
},{ id: 4,
    q: "4",
    a: [{ text: "a. ", isCorrect: true },
        { text: "wrong", isCorrect: false },
        { text: "wrong", isCorrect: false },
        { text: "wrong", isCorrect: false }],
        answers: "a"
},{ id: 5,
    q: "5",
    a: [{ text: "a. ", isCorrect: true},
        { text: "wrong", isCorrect: false},
        { text: "wrong", isCorrect: false},
        { text: "wrong", isCorrect: false}],
        answers: "a"
},{ id: 6,
    q: "6",
    a: [{ text: "a. ", isCorrect: true},
        { text: "wrong", isCorrect: false},
        { text: "wrong", isCorrect: false},
        { text: "wrong", isCorrect: false}],
        answers: "a"
},{ id: 7,
    q: "7",
    a: [{ text: "a. ", isCorrect: true},
        { text: "wrong", isCorrect: false},
        { text: "wrong", isCorrect: false},
        { text: "wrong", isCorrect: false}],
        answers: "a"
},{ id: 8,
    q: "8",
    a: [{ text: "a. ", isCorrect: true},
        { text: "wrong", isCorrect: false},
        { text: "wrong", isCorrect: false},
        { text: "wrong", isCorrect: false}],
        answers: "a"
}   
]
function checker(event) {
    event.preventDefault();

    
    var answers;
    answers = Questions[questionNumber].a[0].isCorrect;

    if (Questions[questionNumber].answers !== true) {
        result.textContent = 'Correct!';
        score = score++;
    } else {
        seconds = seconds - 5;
        result.textContent = "Nope, That is incorect" + Questions[questionNumber].answers + ",";
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


startButton[0].addEventListener("click", function startGame() {
    console.log('click')
    startButton?.[0]?.classList?.add('hide')
    questionNumber = 0
    downer();
    showQuestion(questionNumber);
})

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
   
    
    result[0].innerText = '';

    var question = document.getElementById('question')

    question.innerText = Questions[id].q;

    var op1 = document.getElementById('op1');
    var op2 = document.getElementById('op2');
    var op3 = document.getElementById('op3');
    var op4 = document.getElementById('op4');

    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;
    

    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;

    var selected = " ";

    op1.addEventListener('click', () => {
        op1.style.color = 'green';
        op2.style.color = 'red';
        op3.style.color = 'red';
        op4.style.color = 'red';
        selected = op1.value;
    })
    op2.addEventListener('click', () => {
        op1.style.color = 'red';
        op2.style.color = 'green';
        op3.style.color= 'red';
        op4.style.color = 'red';
        selected = op2.value;
    })
    op3.addEventListener('click', () => {
        op1.style.color = 'red';
        op2.style.color = 'red';
        op3.style.color = 'green';
        op4.style.color = 'red';
        selected = op3.value;
    })
    op4.addEventListener('click', () => {
        op1.style.color = 'red';
        op2.style.color= 'red';
        op3.style.color = 'red';
        op4.style.color = 'green';
        selected = op4.value;
    })

    enterButton[0].addEventListener('click', function() {
        if (selected == 'ture') {
            result[0].innerHTML = 'true';
            result[0].style.color = 'green';
        } else {
            result[0].innerHTML = 'false';
            result[0].style.color = 'red';
        }
    })
 }

 enterButton[0].addEventListener("click", checker)

    
