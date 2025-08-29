import './App.css'

function App() {

  return (
    <>
      <div class='navbar'>
        <img alt='Logo'>
        </img>
        <nav>
          <a class='nav-link'>About</a>
          <a class='nav-link'>Projects</a>
          <a class='nav-link'>Resume</a>
          <a class='nav-link'>Contact</a>
        </nav>
      </div>
      <section id='hero'>
        <div class='container'>
          <div id='blurb'>
            <h1>
              Hello! I'm <span class='highlight'> Yadira.</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur 
              adipiscing elit quisque faucibus.
            </p>
          </div>
          <img></img>
        </div>
      </section>
      <section>
        <div>       
          <h2>A bit about me...</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur
            adipiscing elit quisque faucibus. Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur
            adipiscing elit quisque faucibus.
          </p>
        </div>
        <div>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>REST</li>
            <li>Agile</li>
          </ul>
          <h2>And my skills!</h2>
        </div>
      </section>
      <section>
        <h2>Projects</h2>
        <div><img></img></div>
        <div><img></img></div>
        <div><img></img></div>
        <div><img></img></div>
      </section>
      <section>
        <h2>Resume</h2>
        <iframe src="https://docs.google.com/document/d/e/2PACX-1vR5oiR7JLCcDrb7SxgndsKMhw9ztx3It_3Y01EBHRuhpO55ElAWIhEUAjLboYQnEwINt5NAK9312uU0/pub?embedded=true"></iframe>
      </section>
      <footer>
        <form>
          
        </form>
        <div>
          <ul>
            <li>GitHub</li>
            <li>LinkedIn</li>
            <li>Gmail</li>
          </ul>
        </div>
      </footer>
    </>
  )
}

export default App
