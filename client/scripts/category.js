function renderCategoryHeader() {
  document.querySelector("#category-container").innerHTML = `
    <ul class="category-header">
      <div class="header-left">
        <li><h2>JavaScript</h2></li>
        <li class="material-icons edit" onClick="render('edit')">edit</li>
        <li class="edit">Edit deck</li>
      </div>
      <li>1/10</li>
    </ul>
  `
}
renderCategoryHeader() 

function render(component) {
  if (component === "edit") {
    // renderEditCategory()
    if (answerDisplay.classList.contains("hide") === false) {
      answerDisplay.classList.toggle("hide")
    } else if (questionDisplay.classList.contains("hide") === false) {
      questionDisplay.classList.toggle("hide")
    }
  }
}