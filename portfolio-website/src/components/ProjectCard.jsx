export default function ProjectCard({ project }) {
    const {src, alt, href, github} = project
    return (
        <div className='project'>
            <img src={src} alt={alt}></img>
            <div className='project-links'>
                <a href={href ? href : '#'}><img></img></a>
                <a href={github}><img src='github-mark-white.png' alt='GitHub logo'></img></a>
            </div>
        </div>
    )
}