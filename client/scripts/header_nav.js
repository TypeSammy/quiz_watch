function renderHeaderNav() {
  document.querySelector("#header-nav").innerHTML = `
    <nav>
      <h3>Quiz Watch</h3>
      <ul>
        <div>
          <li class="material-icons signup" onClick="render('signup')">account_circle</li>
          <li class="nav-text" onClick="render('signup')">Sign up</li>
        </div>
        <div>
          <li class="material-icons login" onClick="render('login')">login</li>
          <li class="nav-text" onClick="render('login')">Login</li>
        </div>
      </ul>
    </nav>
  `
}
renderHeaderNav()

function render(click) {
  if (click === "signup") {
    renderSignup()
  } else if (click === "login") {
    renderLogin()
  }
}