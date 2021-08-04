// initialize

// const state = {
//   currentUser: null,
  
// }

function getUserId() {
  axios
  // for finding the user id
  .get('/api/user')
  .then(sessionInfo => {
    state.currentUser = sessionInfo.Id;
  })
}

getUserId()

// 
function reminderUpdate(difficulty, id){
  var updatedTime = moment().format(`YYYY-MM-DD HH:mm:ss`)

  if (difficulty == 'easy'){
    var updatedTime = moment().add(7, 'd').format(`YYYY-MM-DD HH:mm:ss`)
  } else if(difficulty == 'medium'){
    var updatedTime = moment().add(1, 'h').format(`YYYY-MM-DD HH:mm:ss`)
  } else if(difficulty == 'hard'){
    var updatedTime = moment().add(1, 'm').format(`YYYY-MM-DD HH:mm:ss`)
  } 

  axios
  // current pathway set to /api/flashcard -> update
  // not sure how to use sessions for user_id

    .post('/api/flashcards',state.currentUser, updatedTime)
    .then(() => {
      // update window with where the flash card is being displayed
      window.location.reload()
    })
}

function getFlashcard(){
  axios.get('api/flashcards', state.currentUser)

}