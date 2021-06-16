import ProjectDetail from "./ProjectDetail";
import desk from "../images/desk.jpg";
import hello_world from "../images/hello_world.jpg";
import plug from "../images/plug.jpg";

const Project = ({ index, gitLink, viewLink, img, description }) => {
  let imgSrc = null;

  switch (img) {
    case "hello_world":
      imgSrc = hello_world;
      break;
    case "plug":
      imgSrc = plug;
      break;
    default:
      imgSrc = desk;
  }

  return (
    <>
      <div className="project-item m-2 relative sm:m-3 lg:m-4">
        <img src={imgSrc} alt="" className="max-w-lg w-full mx-auto " />
        <ProjectDetail
          index={index}
          gitLink={gitLink}
          viewLink={viewLink}
          description={description}
        />
      </div>
    </>
  );
};

export default Project;
