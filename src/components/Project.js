const Project = ({ index }) => {
  const onMouseOver = (event) => {
    event.target.style.background = "red";
  };
  const onMouseOut = (event) => {
    event.target.style.background = "";
  };

  return (
    <>
      <li
        className="project-item"
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        Project {index}
      </li>
    </>
  );
};

export default Project;
