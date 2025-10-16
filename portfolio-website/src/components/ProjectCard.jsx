export default function ProjectCard({ project }) {
  const { src, alt, href = null, github } = project;
  return (
    <div className="project-card">
      <img src={src} alt={alt} className="project-img"></img>
      <div className="project-links">
        {href && (
          <a href={href}>
            <img src="link-solid-full.svg" alt=""></img>
          </a>
        )}
        <a href={github}>
          <img className="" src="github-mark-white.png" alt="GitHub logo"></img>
        </a>
      </div>
    </div>
  );
}
