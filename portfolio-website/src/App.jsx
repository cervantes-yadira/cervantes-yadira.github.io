import './App.css'
import PillList from './components/PillList'
import ProjectCard from './components/ProjectCard'

function App() {

  //TODO extract to separate file
  const skills = [
    {
      text: 'HTML',
      className: 'purple'
    },
    {
      text: 'CSS',
      className: 'purple'
    },
        {
      text: 'JavaScript',
      className: 'purple'
    },
        {
      text: 'React',
      className: 'purple'
    },
        {
      text: 'REST',
      className: 'blue'
    },
    {
      text: 'Agile',
      className: 'blue'
    }
  ]

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
            <div>
              <PillList items={skills}/>
              <h2>And my skills!</h2>
            </div>
          </div>
      </section>
      <section>
        <h2>Projects</h2>
        <ProjectCard src='portfolio-website.png' alt='' href='#'/>
        <ProjectCard src='#' alt='' />
        <ProjectCard src='#' alt='' />
        <ProjectCard src='#' alt='' />
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
