import { FaGithub, FaEye } from "react-icons/fa";

const ProjectDetail = ({ key, githubLink, viewLink, description }) => {
  if (!description) description = `Project ${key}`;

  return (
    <div className="absolute bottom-0 h-full w-full flex flex-col justify-evenly items-center text-transparent hover:bg-gray-200 hover:opacity-80 hover:text-purple-700">
      <p className="text-2xl font-semibold px-2">{description}</p>
      <div className="w-full flex justify-evenly items-center">
        <a
          href={githubLink}
          target="_blank"
          rel="noreferrer"
          className="text-6xl hover:text-yellow-700 m-3"
        >
          <FaGithub className="inline" />
        </a>
        <a
          href={viewLink}
          target="_blank"
          rel="noreferrer"
          className="text-6xl hover:text-yellow-700 m-3"
        >
          <FaEye className="inline" />
        </a>
      </div>
    </div>
  );
};

export default ProjectDetail;
