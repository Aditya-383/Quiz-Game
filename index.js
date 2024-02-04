const quizDB=[
    {
        question:"Q1: What is the full form of HTML?",
        a: "Hello To my Land",
        b: "Hey Text Markup Language",
        c:"Hyper Text mark Language",
        d:"Hyper Text markup Language",
        ans:"ans4"
    },
    {
        question:"Q2: What is the full form of JS?",
        a: "Java Singh",
        b: "Java Sun",
        c:"Java Script",
        d:"none",
        ans:"ans3"
    },
    {
        question:"Q3: Which of the following is not releated to Object Oriented language?",
        a: "C",
        b: "C++",
        c:"JAVA",
        d:"None",
        ans:"ans1"
    },

    {
        question:"Q4:What is the full form of CSS?",
        a: "Cascade Sheet Style",
        b: "Cascade Style Sheet",
        c:"Cascade Simple Sheet",
        d:"None",
        ans:"ans2"
    }

]

const questions = document.querySelector('.questions');
const option1 = document.querySelector("#options1");
const option2 = document.querySelector("#options2");
const option3 = document.querySelector("#options3");
const option4 = document.querySelector("#options4");
const answer = document.querySelectorAll(".answer");
const btn = document.querySelector("#submit");
const showScore = document.querySelector("#score");

var questionCount=0;
var score=0;
const loadQuestion = () =>{
    let item = quizDB[questionCount];
    questions.innerText = quizDB[questionCount].question;
    option1.innerHTML= item.a;
    option2.innerHTML= item.b;
    option3.innerHTML= item.c;
    option4.innerHTML= item.d;

    

}

loadQuestion();


let checkAnswer = () =>{
    let ans;
    answer.forEach((item)=> {
        if(item.checked){
            ans = item.id;
        }
    });
    return ans;
};

const deselectAll = () => {
    answer.forEach((item) => item.checked = false);
}

 btn.addEventListener('click',() =>{
    
    let answers = checkAnswer();

      if(answers === quizDB[questionCount].ans){
        score++;
      }

      questionCount++;
      if(questionCount != quizDB.length){
          deselectAll();
      }
      if(questionCount < quizDB.length){
        loadQuestion();
      }
      else{
          showScore.innerHTML=`<h3> You Scored ${score}/${quizDB.length} </h3>
          <button class="btn" onclick="location.reload()"> Play Again</button>`;

          showScore.classList.remove("result");
      }
})
