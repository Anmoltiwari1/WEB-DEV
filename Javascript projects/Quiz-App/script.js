document.addEventListener("DOMContentLoaded",()=>{

    const questions=[
      {
        question:"What is the capital of france?",
        choices:["Paris","London","Berlin","Madrid"],
        answer:"Paris"
      },
      {
        question:"Which planet is know as the Red",
        choices:["Mars","Venus","Berlin","Madrid"],
        answer:"Paris"
      },
      {
        question:"Who wrote 'Hmalet'?",
        choices:["Charles Dickens","Jane Austen","William Sheakespear","Mark Twin"],
        answer:"William Sheakespear"
      },
      {
        question:"Which captain won 2011 world cup for india?",
        choices:["Rohit sharma","Sachin tendulakar","M.S. Dhoni","Rahul Dravid"],
        answer:"M.S. Dhoni"
      }
    ]



    let quiz_container=document.getElementById("quiz-container");
    let question_text=document.getElementById("question-text");
    let choices_list=document.getElementById("choices-list");
    let next_btn=document.getElementById("next-btn");
    let result_container=document.getElementById("result-container");
    let scoreDisplay=document.getElementById("score");
    let restart_btn=document.getElementById("restart-btn");
    let start_btn=document.getElementById("start-btn");
    let hidden=document.getElementsByClassName("hidden");

    let currentQuestinIndex=0;
    let score=0;
    
    start_btn.addEventListener('click',startQuiz);

    next_btn.addEventListener("click", () => {
      currentQuestinIndex++;
      if (currentQuestinIndex < questions.length) {
        showquestion();
      } else {
        showResult();
      }
    });

    restart_btn.addEventListener("click", () => {
      currentQuestinIndex = 0;
      score = 0;
      result_container.classList.add("hidden");
      startQuiz();
    });


    function startQuiz(){
      start_btn.classList.add('hidden');
      result_container.classList.add('hidden');
      quiz_container.classList.remove('hidden');
      document.getElementById("question-container").classList.remove("hidden");
      showquestion()
    }


    function showquestion(){
        next_btn.classList.add('hidden');
        question_text.textContent=questions[currentQuestinIndex].question;
        choices_list.innerHTML="" //clear previos choices
        questions[currentQuestinIndex].choices.forEach(choice=>{
          const li=document.createElement('li');
          li.textContent=choice;
          li.addEventListener('click',()=>selectAnswer(choice)) //We are using call-back because if we pass the function immediatly it will execute without eventlistner
          choices_list.appendChild(li);
        })
    }

    function selectAnswer(choice){
        const correctAnswer=questions[currentQuestinIndex].answer
        if(choice==correctAnswer){
          score++;
        }
        next_btn.classList.remove("hidden");
    }

    function showResult(){
      document.getElementById("question-container").classList.add("hidden");
      result_container.classList.remove("hidden");

      scoreDisplay.textContent=`${score} out of ${questions.length}`;
    }
})
