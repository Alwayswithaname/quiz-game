var welcome = document.querySelector("#introduction");
var introPage = document.querySelector("#intro-page");
var startButton = document.querySelector('#startb');


var questionPgEl = document.querySelector("#questionPg")
var questionEl = document.querySelector("#question");

var a = document.querySelectorAll(".option")
var op1 = document.querySelector('#op1');
var op2 = document.querySelector("#op2");
var op3 = document.querySelector('#op3');
var op4 = document.querySelector("#op4"); 

var scoreBoard = document.querySelector("#submit_page")
var timer = document.querySelector('#timer-count');
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

var seconds = 60;
var questoinCount = 0;
var totalScore = 0;
//define questions and answers
var Questions = [{ 
    
    q: "I picked two beautiful kidneys! I feel freakin' amazing!",
    a: ["Dr. T. S. Venture ", "Dean Venture", "Hank Venture", "Brock Samson"],
    answers: "a"
        
},{ 
    q: "Hear me out, Deano. You're a smart kid and all, but you're not a wartime consigliere!",
    a: ["The Monarch ", "Dr. T. S. Rusty Venture ", "Hank Venture", "Dr. Girlfriend"],
    answers: "d"

},{ 
    q: " Now, Hank, touch your throat. That tube you feel is your trachea. Think of it as your handle. That thing your thumb is on is your carotid artery. Think of it as your button. I want you to grab the handle, push the button. Can you repeat that, Hank?",
    a: ["Brock Samson ", "Dr. T. S. Rusty Venture", "Dean Venture", "Dr. Girlfriend "],
    answers: "a"    

},{ 
    q: " What is wrong with you!? You're changing into an extra-bad person! Do you even know how many baby angels you just killed by saying that?",
    a: ["Dean Venture ", "The Monarch", "Hank Venture ", "Dr. Girlfriend"],
    answers: "a"    

},{ 
    q: "Yes, I belong in here, I just have a deep voice.",
    a: ["Triana Orpheus", "Pete White", "Sally Impossible ", "Dr. Girlfriend "],
    answers: "d"

},{ 
    q: " Do not be too hasty in entering that room. I had Taco Bell for lunch!",
    a: ["Brock Samson ", "Baron Werner Underbheit", "The Monarch", "Dr. Byron Orpheus"],
    answers: "d"

},{ 
    q: " Make way for the Homo Superior!",
    a: ["Phantom Limb", "Dr. Jonas Venture, Jr.", "David Bowie", "Dr. T. S. Rusty Venture"],
    answers: "a"

},{ 
    q: "As usual, your detective skills are impeccable, Samson. You have succeeded in exposing my sinister plan to lock myself in a dungeon, chained to an albino",
    a: ["The Monarch ", "Baron Werner Underbheit", "Triana Orpheus ", "Master Billy Quizboy "],
    answers: "b"

},{ 
    q: "I am not prepared to rule out the parasite hypothesis",
    a: ["The Monarch ", "Dr. Jonas Venture, Jr", "Master Billy Quizboy ", "Dean Venture"],
    answers: "c"    
}   
]
//function that starts the game and timer
function startGame() {
    introPage.style.display = 'none';
    questionPgEl.style.display = "block";
    questionNumber = 0
    downer();
    showQuestion(questionNumber);
}
//function that conects questions, answer buttons and question number
function showQuestion(x) {
    
    questionEl.textContent = Questions[x].q;
   
    op1.textContent = Questions[x].a[0];
    op2.textContent = Questions[x].a[1];
    op3.textContent = Questions[x].a[2];
    op4.textContent = Questions[x].a[3];
    questionNumber = x;
}
// function that checks wether the selected answer is correct or incorrect
function checker(event) {
    event.preventDefault();

        result.style.display = "block" ;
        setTimeout(function () {
            result.style.display = "none";
        }, 1000)

    if (Questions[questionNumber].answers == event.target.value) {
        
        result.textContent = 'Correct!';
        totalScore = totalScore + 1;
        
    } else {
        seconds = seconds - 10;
        result.textContent = "Nope, That is incorect" + Questions[questionNumber].answers + ",";
        
    }

    if (questionNumber < Questions.length - 1 ) {

        showQuestion(questionNumber + 1 );
    }else {
        gameOver();
    }
questoinCount++;
};

function gameOver() {
    questionPgEl.style.display = "none";
    scoreBoard.style.display = "block";
    
    fianlScore.textContent = "your Final score is: " + totalScore;
    
    timer.style.display = 'none';
};
//function that 
function getScore() {
    var currentList = localStorage.getItem("scoreList");
    if (currentList !== null) {
        latestList = JSON.parse(currentList);
        return latestList;
    } else {
        latestList = [];
    }
    return latestList;
};
// function that links scores to a the score board, currently not working as intened
function renderScore () {
    recordEl.innerHTML = "";
    recordEl.style.display = "block";
    var highScores = sort();

    var topfive = highScores.slice(0,5);
    for (var i = 0; i < topfive.length; i++) {
        var item = topfive[i];

    var li = document.createElement("li");
    li.textContent = item.user + " - " + item.score;
    li.setAttribute("data-index", i);
    recordEl.appendChild(li);
    
    }
};
// function that sorts scors by value
function sort() {
    var unsortedList = getScore();
    if (getScore == null) {
        return;
    } else {
        unsortedList.sort(function(z,y) {
            return y.score - z.score;
        })
        return unsortedList;
    }
};
//function that saves score to local
function addItem(x) {
    var addedList = getScore();
    addedList.push(x)
    localStorage.setItem("scoreList", JSON.stringify(addedList));
};
// function that states holds and seperated a user input and score
function saveScore() {
    var scoreItem = {
        user: userTag.value,
        score: totalScore
    }
    addItem(scoreItem);
    renderScore();
};



function downer() {
    var timerInterval = setInterval(function(){
        seconds--;
        timer.textContent = 'Time ' + seconds + " going down";

            if (seconds <= 0){
                clearInterval(timerInterval);
                timer.textContent = "time is up";

                finish.textContent = "Time is up";
                gameOver();
            } else if(questoinCount >= questionEl.length +1) {

            clearInterval(timerInterval);
            gameOver();
            }
    }, 1000);
};



startButton.addEventListener("click", startGame)
 

a.forEach(function(click){
    
    click.addEventListener("click", checker);
});
    

subbtnEl.addEventListener("click", function(event){
    event.preventDefault();
    scoreBoard.style.display = 'none';
    introPage.style.display = "none";
    highScorePgEl.style.display = 'block';
    questionPgEl.style.display = "none";
    saveScore();
});


scoreCheck.addEventListener("click", function(event){
    event.preventDefault();
    scoreBoard.style.display = 'none';
    introPage.style.display = "none";
    highScorePgEl.style.display = 'block';
    questionPgEl.style.display = "none";
    renderScore();
});

backBtnEl.addEventListener("click", function(event){
    event.preventDefault();
    scoreBoard.style.display = 'none';
    introPage.style.display = "block";
    highScorePgEl.style.display = 'none';
    questionPgEl.style.display = "none";
    location.reload();
});

clearBtnEl.addEventListener("click", function(event){
    event.preventDefault();
    localStorage.clear();
    renderScore();
});