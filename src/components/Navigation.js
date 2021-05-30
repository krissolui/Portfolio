import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [hover, setHover] = useState(false);
  const secondaryColor = "#a96bca";

  const onMouseEnter = (event) => {
    event.target.style.color = secondaryColor;
    setHover(true);
    console.log(hover);
  };
  const onMouseOut = (event) => {
    event.target.style.color = "";
    setHover(false);
    console.log(hover);
  };

  return (
    <nav className="nav main-nav">
      <ul className="nav-items">
        <li
          className="nav-item"
          onMouseOut={onMouseOut}
          onMouseEnter={onMouseEnter}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className="nav-item"
          onMouseOut={onMouseOut}
          onMouseEnter={onMouseEnter}
        >
          <Link to="/education">Education</Link>
        </li>
        <li
          className="nav-item"
          onMouseOut={onMouseOut}
          onMouseEnter={onMouseEnter}
        >
          <Link to="/projects">Projects</Link>
        </li>
        <li
          className="nav-item"
          onMouseOut={onMouseOut}
          onMouseEnter={onMouseEnter}
        >
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
