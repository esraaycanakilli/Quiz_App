const quizData = [
    {
      question: 'Türkiyenin nüfusu en çok olan ili hangisidir?',
      a: 'İstanbul',
      b: 'Ankara',
      c: 'İzmir',
      d: 'Bursa',
      e: 'Kayseri',
      correct: 'a',
    },
    {
      question: 'Türkiyenin yüzölçümü en büyük ili hangisidir?',
      a: 'Kayseri',
      b: 'Konya',
      c: 'Sivas',
      d: 'Ankara',
      e: 'İstanbul',
      correct: 'b',
    },
    {
      question: 'Türkiyenin genç nüfus oranı en yüksek olan ili hangisidir?',
      a: 'Muğla',
      b: 'İzmir',
      c: 'Hakkari',
      d: 'İstanbul',
      e: 'Ağrı',
      correct: 'c',
    },
    {
      question: 'Türkiyenin en kuzeyindeki il hangisidir?',
      a: 'Mersin',
      b: 'Edirne',
      c: 'Iğdır',
      d: 'Sinop',
      e: 'Artvin',
      correct: 'd',
    },
    {
      question: 'Türkiyenin en az nüfuslu ili hangisidir ',
      a: 'Gümüşhane',
      b: 'Erzurum',
      c: 'Trabzon',
      d: 'Siirt',
      e: 'Bayburt',
      correct: 'e',
    },
  ]
  
  const quiz = document.getElementById('quiz')
  const answerEls = document.querySelectorAll('.answer')
  const questionEl = document.getElementById('questions')
  const a_text = document.getElementById('a_text')
  const b_text = document.getElementById('b_text')
  const c_text = document.getElementById('c_text')
  const d_text = document.getElementById('d_text')
  const e_text = document.getElementById('e_text')
  const submitBtn = document.getElementById('submit')
  
  let currentQuiz = 0
  let score = 0
  
  loadQuiz()
  
  function loadQuiz() {
    const currentQuizData = quizData[currentQuiz]
  
    deselectedAnswers()
  
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    e_text.innerText = currentQuizData.e
  }
  
  function deselectedAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false))
  }
  
  function getSelected() {
    let answer
  
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id
      }
    })
    return answer
  }
  
  submitBtn.addEventListener('click', () => {
    const answer = getSelected()
  
    //console.log(answer)
  
    if (answer) {
      if (answer === quizData[currentQuiz].correct) {
        score++
      }
      currentQuiz++
  
      if (currentQuiz < quizData.length) {
        loadQuiz()
      } else {
        quiz.innerHTML = `
        <h2> Test tamamlandı, ${score * 20} puan aldınız🥳 </h2>
        <button class="submit" onClick="location.reload()"> Tekrar Dene 🌀  </button>
      `
      }
    }
  })
 