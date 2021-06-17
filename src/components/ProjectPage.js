import { useState, useEffect } from "react";
import sanityClient from "../client";
import Project from "./Project";

const ProjectPage = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    const getProjects = async () => {
      const data = await sanityClient.fetch(
        `*[_type == "project"]{
          slug
        }`
      );
      setProjects(data);
    };
    getProjects();
  }, []);

  if (!projects)
    return (
      <div className="flex-grow bg-gray-500 text-white text-2xl text-center">
        Loading...
      </div>
    );

  return (
    <main className="home-page flex-grow bg-gray-500 text-center p-2 flex flex-col justify-center items-center">
      <h3 className="text-4xl font-bold cursive text-yellow-600 mb-4 sm:text-6xl">
        PROJECT
      </h3>

      <div className="projects-list max-w-7xl px-4 mx-auto grid sm:grid-cols-2 lg:grid-cols-3">
        {projects &&
          projects.map((project, index) => (
            <Project slug={project.slug.current} key={index} />
          ))}
      </div>
    </main>
  );
};

export default ProjectPage;
