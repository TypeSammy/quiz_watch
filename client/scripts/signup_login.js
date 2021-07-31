function renderSignup() {
  const signupBox = document.querySelector("#signup")
  signupBox.classList.remove("hide")
  signupBox.innerHTML = `
    <div class="signup-container">
      <h2>Signup</h2>
      <form id="sign-up-form" action="/" method="POST">
        <fieldset>
          <input type="text" name="name" placeholder="Username">
        </fieldset>
        <fieldset>
          <input type="text" name="email" placeholder="Email">
        </fieldset>
        <fieldset>
          <input type="password" name="password" placeholder="Password">
        </fieldset>
        <button>Sign up</button>
      </form>
      <span class="material-icons signup" onClick="hide('signup')">close</span>
    </div>
  `
}

function renderLogin() {
  const signupBox = document.querySelector("#login")
  signupBox.classList.remove("hide")
  signupBox.innerHTML = `
    <div class="signup-container">
      <h2>Login</h2>
      <form id="sign-up-form" action="/" method="POST">
        <fieldset>
          <input type="text" name="name" placeholder="Username">
        </fieldset>
        <fieldset>
          <input type="password" name="password" placeholder="Password">
        </fieldset>
        <button>Login</button>
      </form>
      <span class="material-icons login" onClick="hide('login')">close</span>
    </div>
  `
}

function hide(click) {
  if (click === "signup") {
    document.querySelector("#signup").classList.add("hide")
  } else if (click === "login") {
    document.querySelector("#login").classList.add("hide")
  }
}