function renderHeaderNav() {
  document.querySelector("#header-nav").innerHTML = `
    <nav>
      <h1>Quiz Watch</h1>
      <ul>
        <div>
          <li class="material-icons account_circle" onClick="render('Signup')">account_circle</li>
          <li class="nav-text" onClick="render('Signup')>Signup</li>
        </div>
        <div>
          <li class="material-icons login" onClick="render('Login')>login</li>
          <li class="nav-text" onClick="render('Login')>Login</li>
        </div>
      </ul>
    </nav>
  `
}
renderHeaderNav()