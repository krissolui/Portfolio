import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import HomePage from "./HomePage";
import EducationPage from "./EducationPage";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";

const Navigation = () => {
  return (
    <nav className="nav main-nav">
        <ul className="nav-items">
          <li className="nav-item">
          <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
          <Link to="/education">Education</Link>
          </li>
          <li className="nav-item">
          <Link to="/projects">Projects</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
    </nav>
  );
};

export default Navigation;
