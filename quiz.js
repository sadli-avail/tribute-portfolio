
const quizData = [
    {
      question: "When apji abdul kalam born?",
      a: "1966",
      b: "1899",
      c: "1931",
      d: " 2002",
      correct: "c",
    },
    {
      question: "What is the special name of apj abdul kalam?",
      a: "Andromeda",
      b: "Triangulum",
      c: "missile man",
      d: "Sombrero Galaxy",
      correct: "c",
    },
    {
      question: "He was a--?",
      a: "scientist",
      b: "Black eye",
      c: "Comet",
      d: "Sunflower",
      correct: "a",
    },
    {
      question: "Who is the first inventor of Apple?",
      a: "Ahnaf",
      b: "apj abdul kalam",
      c: "Steve Jobs",
      d: "Bill gates",
      correct: "c",
    },
    {
      question: "When was steve jobs born?",
      a: "1989",
      b: "1898",
      c: "1971",
      d: "2000",
      correct: "c",
    },


  ];

  const quiz = document.getElementById('quiz')
  const answerEl = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('question')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  const c_text = document.getElementById('c_text')
  const d_text = document.getElementById('d_text')
  const submitBtn = document.getElementById('submit')


  let currentQuiz = 0
  let score = 0

  loadQuiz()

  function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
  }

  function deselectAnswers() {
    answerEl.forEach(answerEl => answerEl.checked = false)
  }

  function getSelected() {
    let answer
    answerEl.forEach(answerEl => {
      if (answerEl.checked) {
        answer = answerEl.id
      }
    })
    return answer
  }

  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++
      }

      currentQuiz++

      if (currentQuiz < quizData.length) {
        loadQuiz()
      } else {
        quiz.innerHTML = `
             <h2>You answered ${score}/${quizData.length} questions correctly</h2>
  
             <button onClick="location.href=location.href">RELOAD</button>
             `
      }
    }
  })


