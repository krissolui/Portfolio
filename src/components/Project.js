import ProjectDetail from "./ProjectDetail";
import desk from "../images/desk.jpg";

const Project = ({ index, gitLink, viewLink }) => {
  return (
    <>
      <div className="project-item m-2 relative sm:m-3 lg:m-4">
        <img src={desk} alt="" className="max-w-lg w-full mx-auto " />
        <ProjectDetail index={index} gitLink={gitLink} viewLink={viewLink} />
      </div>
    </>
  );
};

export default Project;
