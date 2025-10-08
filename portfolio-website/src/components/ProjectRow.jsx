import PillList from "./PillList";
import ProjectCard from "./ProjectCard";

export default function ProjectRow({ project }) {
  const { title, text, skills } = project;

  return (
    <div className={`row flex flex-btwn`}>
      <div className="row-item">
        <ProjectCard project={project} />
      </div>
      <div className="row-item">
        <h4>{title}</h4>
        <p>{text}</p>
        <PillList items={skills} />
      </div>
    </div>
  );
}
