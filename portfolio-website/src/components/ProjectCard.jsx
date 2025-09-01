export default function ProjectCard({href, src, alt, github}) {
    return (
        <div className="project">
            <img src={src} alt={alt}></img>
            <div class='project-label'>
                <a href={href ? href : '#'}></a>
                <a href={github}></a>
            </div>
        </div>
    )
}