import Project from "./Project";

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <h3>PROJECTS</h3>

      <div className="projects-list">
        <ul>
          <Project index="1" />
          <Project index="2" />
          <Project index="3" />
          <Project index="4" />
          <Project index="5" />
          <Project index="6" />
        </ul>
      </div>
    </div>
  );
};

export default ProjectsPage;
