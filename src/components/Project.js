import { useState } from "react";
import ProjectDetail from "./ProjectDetail";

const Project = ({ index }) => {
  const [hover, setHover] = useState(false);

  const onMouseEnter = (event) => {
    event.target.style.background = "red";
    setHover(true);
    console.log({ index }, hover);
  };
  const onMouseOut = (event) => {
    event.target.style.background = "";
    setHover(false);
    console.log({ index }, hover);
  };

  return (
    <>
      <li
        className="project-item"
        onMouseEnter={onMouseEnter}
        onMouseOut={onMouseOut}
      >
        Project {index}
        {/* <ProjectDetail index={index} display={hover} /> */}
        {hover && (
          <ProjectDetail
            index={index}
            onMouseOut={onMouseOut}
            onMouseEnter={onMouseEnter}
          />
        )}
      </li>
    </>
  );
};

export default Project;
