import { FaGithub, FaEye } from "react-icons/fa";
// import { useState } from "react";

const ProjectDetail = ({ index, gitLink, viewLink }) => {
  //   const [hover, setHover] = useState(true);

  return (
    <div className="absolute bottom-0 h-full w-full flex justify-evenly items-center text-transparent hover:bg-gray-200 hover:opacity-80 hover:text-purple-700">
      <a
        href={gitLink}
        target="_blank"
        className="text-6xl hover:text-yellow-700 m-3"
      >
        <FaGithub className="inline" />
      </a>
      <a
        href={viewLink}
        target="_blank"
        className="text-6xl hover:text-yellow-700 m-3"
      >
        <FaEye className="inline" />
      </a>
    </div>
  );
};

export default ProjectDetail;
