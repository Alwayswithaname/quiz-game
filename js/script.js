var startButton = document.getElementsByClassName('startb');
var enterButton = document.getElementsByClassName('enterb');
var shuffledQuestions , currentQestion; 
var questionEl = document.getElementById("question")
var answerButtonsEl = document.getElementsByClassName("option")


var Questions = [{ id: 0,
    q: "0",
    a: [{ text: "1: ", isCorrect: true},
        { text: "2: ", isCorrect: true},
        { text: "3: ", isCorrect: true},
        { text: "4: ", isCorrect: true}
]
},{ id: 1,
    q: "1",
    a: [{ text: "wrpmg", isCorrect: true},
        { text: "awnser", isCorrect: false},
        { text: "wrong", isCorrect: false},
        { text: "wrong", isCorrect: false}
]
},{ id: 2,
    q: "2",
    a: [{ text: "wrong", isCorrect: true},
        { text: "wrong", isCorrect: false},
        { text: "wrong", isCorrect: false},
        { text: "answer", isCorrect: false}
]
},{ id: 3,
    q: "3",
    a: [{ text: "wrong", isCorrect: true},
        { text: "answer", isCorrect: false},
        { text: "wrong", isCorrect: false},
        { text: "wrong", isCorrect: false}
]
},{ id: 4,
    q: "4",
    a: [{ text: "answer", isCorrect: true },
        { text: "wrong", isCorrect: false },
        { text: "wrong", isCorrect: false },
        { text: "wrong", isCorrect: false }
]
},{ id: 5,
    q: "5",
    a: [{ text: "answer", isCorrect: true},
        { text: "wrong", isCorrect: false},
        { text: "wrong", isCorrect: false},
        { text: "wrong", isCorrect: false}
]
},{ id: 6,
    q: "6",
    a: [{ text: "answer", isCorrect: true},
        { text: "wrong", isCorrect: false},
        { text: "wrong", isCorrect: false},
        { text: "wrong", isCorrect: false}
]
},{ id: 7,
    q: "7",
    a: [{ text: "answer", isCorrect: true},
        { text: "wrong", isCorrect: false},
        { text: "wrong", isCorrect: false},
        { text: "wrong", isCorrect: false}
]
},{ id: 8,
    q: "8",
    a: [{ text: "answer", isCorrect: true},
        { text: "wrong", isCorrect: false},
        { text: "wrong", isCorrect: false},
        { text: "wrong", isCorrect: false}
]
}   
]



startButton[0].addEventListener("click", function startGame() {
    console.log('click')
    startButton?.[0]?.classList?.add('hide')
    shuffledQuestions = Questions.sort(() => Math.random() - .5)
    currentQestion = 0
    questionEl.classList.remove("hide")
    nextQuestion()
})
 
enterButton[0].addEventListener("click", function enterA() {
 console.log('click')
})

function nextQuestion() {
    showQuestion(shuffledQuestions[currentQestion]);
}

function showQuestion(q){
questionEl.innerText = q.q
q.a.forEach(a => {
    var button = document.createElement('button')
    button.innerText = a.text
    button.classList.add("option")
    if (a.correct) {
        button.dataset.correct = a.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsEl.appendChild(button)
});
}

function selectAnswer(iterate){

}

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElemern.textContent = timerCount;
        if (timerCount >= 0) {
            if (iswin && timerCount > 0) {
                clearInterval(timer);
                winGame();
            }
        }
        if (timer === 0) {
            clearInterval(timer)
            loseGame()
        }
    }, 1000)
}


function iterate(id) {

    var result = document.getElementsByClassName('result');
    result[0].innerText = '';

    const question = document.getElementById('question')

    question.innerText = Questions[id].q;

    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');

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
 
    
     


}
