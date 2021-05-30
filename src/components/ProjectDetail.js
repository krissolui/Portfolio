import { FaGithub, FaEye } from "react-icons/fa";
// import { useState } from "react";

const ProjectDetail = ({ index, onMouseOut, onMouseEnter }) => {
//   const [hover, setHover] = useState(true);

  return (
    <div onMouseEnter={onMouseEnter} onMouseOut={onMouseOut}>
      This is detail of Project {index}
      <a href="http://" target="_blank">
        <FaGithub />
      </a>
      <a href="http://" target="_blank">
        <FaEye />
      </a>
    </div>
  );
};

export default ProjectDetail;
