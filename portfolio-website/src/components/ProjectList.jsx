import ProjectRow from "./ProjectRow"

export default function ProjectList({ projects }) {
    // console.log(projects)
    const list = projects.map(project => 
        <ProjectRow project={project}  />
    )

    return (
        <>
            {list}
        </>
    )
}