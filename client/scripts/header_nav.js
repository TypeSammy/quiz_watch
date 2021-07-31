function renderHeaderNav() {
  // IF SESSIONS IS TRUE
  document.querySelector("#header-nav").innerHTML  = `
    <nav>
      <h3>Quiz Watch</h3>
      <ul>
        <div>
          <li class="material-icons flashcards" onClick="render('flashcards')">view_carousel</li>
          <li class="nav-text" onClick="render('user')">Flashcards</li>
        </div>
        <div>
          <li class="material-icons notifications" onClick="render('notifications')">circle_notifications</li>
          <li class="nav-text" onClick="render('user')">Notifications</li>
        </div>
        <div>
          <li class="material-icons signup" onClick="render('user')">account_circle</li>
          <li class="nav-text" onClick="render('user')">Username</li>
        </div>
        <div>
          <li class="material-icons login" onClick="render('logout')">logout</li>
          <li class="nav-text" onClick="render('logout')">Logout</li>
        </div>
      </ul>
    </nav>
  `
  // IF SESSSION IS FALSE:
  // document.querySelector("#header-nav").innerHTML = `
  //   <nav>
  //     <h3>Quiz Watch</h3>
  //     <ul>
  //       <div>
  //         <li class="material-icons signup" onClick="render('signup')">account_circle</li>
  //         <li class="nav-text" onClick="render('signup')">Sign up</li>
  //       </div>
  //       <div>
  //         <li class="material-icons login" onClick="render('login')">login</li>
  //         <li class="nav-text" onClick="render('login')">Login</li>
  //       </div>
  //     </ul>
  //   </nav>
  // `
}
renderHeaderNav()

function render(component) {
  if (component === "signup") {
    signup.classList.toggle("hide")
  } else if (component === "login") {
    login.classList.toggle("hide")
  }
}