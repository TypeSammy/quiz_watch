function renderLandingPage() {
  document.querySelector("#landing-page").innerHTML = `
    <section id="main-strip" class="main-strip">
      <div class="main-copy">
        <h1>Lorem Ipsum Dolor Sit</h1>
        <p>Sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
        <button class="get-started-btn">Get Started</button>
      </div>
      <div class="main-img">
        <img src="./assets/character 16 crop.svg" alt="two people studying">
      </div>
    </section>
    <section class="second-strip">
      <h2>Tempor incidindunt ut labore?</h2>
      <ul>
        <div>
          <li class="material-icons check_circle">check_circle</li>
          <li>Sit amet, consectetur</li>
        </div>
        <div>
          <li class="material-icons check_circle">check_circle</li>
          <li>Sit amet, consectetur</li>
        </div>
        <div>
          <li class="material-icons check_circle">check_circle</li>
          <li>Sit amet, consectetur</li>
        </div>
      </ul>
    </section>
    <section class="third-strip">
      <div>
        <img src="./assets/character 18.svg" alt="guy studying">
      </div>
      <div>
        <h2>Tempor incididunt ut labore</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </section>
  `
}
renderLandingPage()