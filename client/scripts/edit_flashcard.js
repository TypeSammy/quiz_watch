const editFlashcard = document.querySelector("#flashcard")

const EditFlashcard = (() => {
  function renderFlashcard() {
    document.querySelector("#flashcard").innerHTML = `
      <div class="edit-flashcard-container">
        <form id="edit-flashcard-form" action="/" method="POST">
          <fieldset>
            <label for="question">Question:</label><br>
            <textarea name="question" cols="20" rows="5">question information display here</textarea>
          </fieldset>
          <fieldset>
            <label for="question">Hint:</label><br>
            <textarea name="hint" cols="20" rows="5">Hint information display here</textarea>
          </fieldset>
          <fieldset>
            <label for="question">Answer:</label><br>
            <textarea name="answer" cols="20" rows="5">Answer information display here</textarea>
          </fieldset>
          <button onClick="updateFlashcard('question, hint, answer')">Save</button>
          <button class="delete" onClick="deleteFlashcard('id')">Delete</button>
          </form>
      </div>
    `
  }
  renderFlashcard()
  editFlashcard.classList.toggle("hide")

  function render() {
    editFlashcard.classList.toggle("hide")
    allFlashcards.classList.toggle("hide")
  }

  return {
    render: render
  }

})()

// TO DO:
// - need an updateFlashcard("question, hint, answer") function
// - runs an update PSQL query