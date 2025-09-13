import './App.css'
import PillList from './components/PillList'
import ProjectList from './components/ProjectList'
import projects from './assets/projects'
import skills from './assets/skills'
import navLinks from './assets/navLinks'
import NavList from './components/NavList'

function App() {
  return (
    <>
      <div class='navbar'>
        <div>
          <img alt='Logo'></img>
        </div>
        <NavList links={navLinks} />
      </div>
      <section id='hero'>
        <div>
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
      <section id='about'>
        <div>       
            <h2>A bit about me<span class='highlight'>...</span></h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur
              adipiscing elit quisque faucibus. Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur
              adipiscing elit quisque faucibus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur
              adipiscing elit quisque faucibus. Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur
              adipiscing elit quisque faucibus.
            </p>
          </div>
          <div id='skills'>
              <PillList items={skills}/>
              <h2>And my skills!</h2>
          </div>
      </section>
      <section id='projects'>
        <h2>Projects</h2>
        <ProjectList projects={projects} />
      </section>
      <section>
        <h2>Resume</h2>
        <iframe src="https://docs.google.com/document/d/e/2PACX-1vR5oiR7JLCcDrb7SxgndsKMhw9ztx3It_3Y01EBHRuhpO55ElAWIhEUAjLboYQnEwINt5NAK9312uU0/pub?embedded=true"></iframe>
      </section>
      <footer>
        <h2>Get in touch<span className='highlight'>!</span></h2>
        <div>
          <form>
            <label for='name'>Name</label>
            <input id='name' type='text' placeholder='Name'></input>

            <label for='email'>Email</label>
            <input id='email' type='email' placeholder='Email'></input>

            <label for='message'>Message</label>
            <textarea id='message' rows={6} placeholder='Message'></textarea>

            <button type='button'>Send!</button>
          </form>
          <div>
            <ul>
              <li><a href='https://github.com/cervantes-yadira'>GitHub</a></li>
              <li><a href='https://linkedin.com/in/yadira-cervantes'>LinkedIn</a></li>
              <li><a href='mailto:ycervantes0629@gmail.com'>Gmail</a></li>
            </ul>
            <h4>Built by <span className='highlight'>Yadira Cervantes</span></h4>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
