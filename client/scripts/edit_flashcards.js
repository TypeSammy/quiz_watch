const allFlashcards = document.querySelector("#all-flashcards")
const editFlashcard = document.querySelector("#flashcard")

// const Edit = (() => {

//   // TODO add onSubmit or onClick for buttons above to update data OR delete
//   renderFlashcard()
//   renderAllFlashcards()
//   editFlashcard.classList.toggle("hide")
//   allFlashcards.classList.toggle("hide")

//   function flashcard(id) {
//     if (editFlashcard.classList.contains("hide")) {
//       if (!(allFlashcards.classList.contains("hide"))) {
//         allFlashcards.classList.toggle("hide")
//       }
//       editFlashcard.classList.toggle("hide")
//     }

//   }

//   function updateFlashcard(id) {
//     // TODO
//   }

//   function deleteFlashcard(id) {
//     // TODO
//   }

//   return {
//     flashcard: flashcard,
//     deleteFlashcard: deleteFlashcard
//   }

// })()

function renderAllFlashcards() {
  document.querySelector("#all-flashcards").innerHTML = `
    <section class="all-questions-display-container">
      <div class="question-container">
        <div class="question-preview">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.?</div>
        <div class="edit-container">
          <span class="material-icons" onClick="Toggle.editFlashcard(); Toggle.editAllFlashcards()">edit</span><div class="edit" onClick="Toggle.editFlashcard(); Toggle.editAllFlashcards()">Edit</div>
        </div>
      </div>

      <div class="question-container">
        <div class="question-preview">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.?</div>
        <div class="edit-container">
          <span class="material-icons">edit</span><div class="edit">Edit</div>
        </div>
      </div>

      <div class="question-container">
        <div class="question-preview">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.?</div>
        <div class="edit-container">
          <span class="material-icons">edit</span><div class="edit">Edit</div>
        </div>
      </div>

      <div class="question-container">
        <div class="question-preview">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.?</div>
        <div class="edit-container">
          <span class="material-icons">edit</span><div class="edit">Edit</div>
        </div>
      </div>

      <div class="question-container">
        <div class="question-preview">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.?</div>
        <div class="edit-container">
          <span class="material-icons">edit</span><div class="edit">Edit</div>
        </div>
      </div>

      <div class="question-container">
        <div class="question-preview">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.?</div>
        <div class="edit-container">
          <span class="material-icons">edit</span><div class="edit">Edit</div>
        </div>
      </div>
    </section>
`
}

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
        <button>Save</button>
        <button class="delete">Delete</button>
        </form>
    </div>
  `
}