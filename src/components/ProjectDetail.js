import { FaGithub, FaEye } from "react-icons/fa";

const ProjectDetail = ({ index, gitLink, viewLink, description }) => {
  if (!description) description = `Project ${index}`;

  return (
    <div className="absolute bottom-0 h-full w-full flex flex-col justify-evenly items-center text-transparent hover:bg-gray-200 hover:opacity-80 hover:text-purple-700">
      <p className="text-2xl font-semibold">{description}</p>
      <div className="w-full flex justify-evenly items-center">
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
    </div>
  );
};

export default ProjectDetail;
