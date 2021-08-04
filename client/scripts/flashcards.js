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
  axios.patch('/api/quizz',updatedTime)
}
