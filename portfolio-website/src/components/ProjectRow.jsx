import PillList from "./PillList"
import ProjectCard from "./ProjectCard"

export default function ProjectRow({ project }) {
    const {isReverse, title, text, skills} = project

    return (
        <div className={`project-row ${isReverse}`}>
            <div className='row-item'>
                <ProjectCard project={project} />
            </div>
            <div className='row-item'>
                <h3>{title}</h3>
                <p>{text}</p>
                <PillList items={skills} />
            </div>
        </div>
    )
}