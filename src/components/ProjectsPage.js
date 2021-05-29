
const ProjectsPage = () => {
    function onMouseOver(event) {
        event.target.style.background = 'red';
    }
    const onMouseOut = (event) => {
        event.target.style.background = '';
    }

    return (
        <div className="projects-page">
            <h3>PROJECTS</h3>

            <div className="projects-list">
                <ul>
                    <li className="project-item" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>Project 1</li>
                    <li className="project-item" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>Project 2</li>
                    <li className="project-item" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>Project 3</li>
                    <li className="project-item" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>Project 4</li>
                    <li className="project-item" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>Project 5</li>
                    <li className="project-item" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>Project 6</li>
                </ul>
            </div>
        </div>
    )
}

export default ProjectsPage
