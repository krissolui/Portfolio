import { useState, useEffect } from "react";
import ProjectDetail from "./ProjectDetail";
import sanityClient from "../client";

const Project = ({ slug, key }) => {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const getProject = async () => {
      const data = await sanityClient.fetch(
        `*[_type == "project" && slug.current == "${slug}"]{
            title,
            date,
            place,
            description,
            mainImage{
              asset->{
                _id,
                url
              },
              alt
            },
            link,
            githubLink
          }`
      );
      setProject(data[0]);
    };
    getProject();
  }, []);

  if (!project) return <></>;

  return (
    <div className="project-item m-2 relative sm:m-3 lg:m-4">
      <img
        src={project.mainImage.asset.url}
        alt=""
        className="max-w-lg w-full mx-auto "
      />
      <ProjectDetail
        key={key}
        githubLink={project.githubLink}
        viewLink={project.link}
        description={project.description}
      />
    </div>
  );
};

export default Project;
