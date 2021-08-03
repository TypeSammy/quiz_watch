const state = {
  logInStatus: true,
  flashcardsdue: [],
  allFlashcards: []
}

function isUserLoggedin() {
	axios.get("/api/sessions")
		// .then(successResponse => {
    //   console.log(successResponse) // TEST
    //   state.logInStatus = true
    //   Nav.header()
    //   login.classList.toggle("hide")
    //   console.log(state.logInStatus)
		// })
    .then(successResponse => {
      axios.get('/api/quiz')
      .then(response => {
        state.flashcardsdue = response.data
      })
    })
    .then(successResponse => {
      axios.get('/api/quiz/all')
      .then(response => {
        state.allFlashcards = response.data
      })
    })

  }

isUserLoggedin()

