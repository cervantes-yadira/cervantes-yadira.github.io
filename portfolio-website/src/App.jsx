import "./App.css";
import PillList from "./components/PillList";
import ProjectList from "./components/ProjectList";
import projects from "./assets/projects";
import skills from "./assets/skills";
import ContactForm from "./components/ContactForm";
import SocialList from "./components/SocialList";
import socials from "./assets/socials";
import SocialTab from "./components/SocialTab";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <section id="hero" className="flex flex-btwn">
        <div>
          <div id="blurb">
            <h1>
              Hello! I'm <span class="highlight"> Yadira.</span>
            </h1>
            <p>
              I'm a <span class="bold">Full-stack Web Developer</span> who loves
              to breathe life into unique designs.
            </p>
          </div>
          <img></img>
        </div>
        <SocialTab socials={socials} />
      </section>
      <section id="about" class="flex flex-btwn">
        <div>
          <h2>
            A bit about me<span class="highlight">...</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit
            amet consectetur adipiscing elit quisque faucibus. Lorem ipsum dolor
            sit amet consectetur adipiscing elit. Dolor sit amet consectetur
            adipiscing elit quisque faucibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit
            amet consectetur adipiscing elit quisque faucibus. Lorem ipsum dolor
            sit amet consectetur adipiscing elit. Dolor sit amet consectetur
            adipiscing elit quisque faucibus.
          </p>
        </div>
        <div id="skills" className="flex flex-center align-center">
          <div className="skill-wrapper">
            <PillList items={skills} className="flex-center" />
            <h2>
              And my skills<span className="highlight">!</span>
            </h2>
          </div>
        </div>
      </section>
      <section id="projects" className="mx-lg">
        <h2>Projects</h2>
        <ProjectList projects={projects} />
      </section>
      <section id="resume" className="mx-lg">
        <h2>Resume</h2>
        <iframe src="https://docs.google.com/document/d/e/2PACX-1vR5oiR7JLCcDrb7SxgndsKMhw9ztx3It_3Y01EBHRuhpO55ElAWIhEUAjLboYQnEwINt5NAK9312uU0/pub?embedded=true"></iframe>
      </section>
      <footer id="contact" className="px-lg">
        <h2>
          Get in touch<span className="highlight">!</span>
        </h2>
        <div className="footer-grid">
          <ContactForm />
          <hr />
          <div>
            <SocialList socials={socials} />
            <h4>
              Built by <span className="highlight">Yadira Cervantes</span>
            </h4>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
