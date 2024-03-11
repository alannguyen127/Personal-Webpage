const about = document.querySelector(".about-btn");

const project = document.querySelector(".project-btn");
const skill = document.querySelector(".skill-btn");

about.addEventListener("click", () => {
  renderAbout();
});

project.addEventListener("click", () => {
  renderProject();
});

skill.addEventListener("click", () => {
  renderSkill();
});

const background = document.querySelector(".background");

function renderSkill() {
  const card = background.children[0];
  card.innerHTML = "";
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `<section class="section-skills" id="skills">
  <div class="section-title skills-title">
    <h2>My Skills</h2>
    <div class="underline"></div>
    <div class="skills-content">
      <div class="skills-logo">
        <img
          src="Images/HTML5_logo_and_wordmark.svg.png"
          height="200"
          width="200"
        />
      </div>
      <div class="skills-logo">
        <img
          src="Images/CSS3_logo_and_wordmark.svg.png"
          height="200"
          width="150"
        />
      </div>
      <div class="skills-logo">
        <img
          src="Images/Javascript_badge.svg.png"
          height="200"
          width="200"
        />
      </div>
    </div>
  </div>
</section>`;
  card.appendChild(newDiv);
}

function renderProject() {
  const card = background.children[0];
  card.innerHTML = "";
  const newDiv = document.createElement("div");
  newDiv.innerHTML = ` <section class="section-projects" id="projects">
  <div class="section-title projects-title">
    <h2>My Projects</h2>
    <div class="underline"></div>
  </div>
  <div class="projects-info">
    <div class="project">
      <h3>Calculator</h3>
      <img src="Images/Projects/Calculator.png" />
      <p>
        Calculator made using HTML, CSS and JS which can perform the basic
        math operations.
      </p>
    </div>
    <div class="project">
      <h3>Currency Converter</h3>
      <img src="Images/Projects/currency-convert.png" />
      <p>
        Currency Converter using HTML, CSS and JS which can convert over
        200 currencies all around the world.
      </p>
    </div>
    <div class="project">
      <h3>Holidates Look-up</h3>
      <img src="Images/Projects/Holidates.png" />
      <p>
        A Holidates App using HTML, CSS and JS which can show all or
        specific holidates of all countries around the world.
      </p>
    </div>
    <div class="project">
      <h3>Steam's Games Search Tool</h3>
      <img src="Images/Projects/steam-game-shop.png" />
      <p>
        An application using HTML, CSS and JS which can perform trending
        games, filter games from genres and search detail games on Steam.
      </p>
    </div>
  </div>
</section> `;
  card.appendChild(newDiv);
}

function renderAbout() {
  const card = background.children[0];
  card.innerHTML = "";
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `<section class="section-about" id="about">
  <div class="section-title about-title">
    <h2>About me</h2>
    <div class="underline"></div>
  </div>
  <div class="about-content">
  
  <div class="about-para">
  <p>
    Hi there, My name is Nguyen Huan Nghiem, I'm graduated from University of Economics Ho Chi Minh City. I'm learning to be a Full Stack Web Dev at Coder School at the momment.
  </p>
  <p>My interests are programming, tech-hardwares such as: "PC hardwares, console, handheld PC" and music.</p>
  <p>I have been exposed to computers and technology since I was 7 years old. I love exploring and learning new things. Technology passion flows in my blood. </p>
  <p>
    As an extrovert, I have advantage in communication and connecting people. I have been a CRM (Customer Relationship Manager) at Bank for 5 years, that increases my problem-solving skills and ability to work under high pressure. 
  </p>
  </div>
  <div class="img">
  <img src="Images/nghiem.jpg" /></div>
  </div>
</section>`;
  card.appendChild(newDiv);
}
