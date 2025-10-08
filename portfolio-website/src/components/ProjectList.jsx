import ProjectRow from "./ProjectRow";

export default function ProjectList({ projects }) {
  const list = projects.map((project) => <ProjectRow project={project} />);

  return <div className="project-list">{list}</div>;
}
