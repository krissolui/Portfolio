import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav main-nav max-w-screen-sm text-base font-semibold text-yellow-50 text-center uppercase md:text-xl">
      <NavLink
        to="/"
        exact
        className="nav-item py-1 px-2.5 rounded-md hover:text-yellow-600 flex-1"
        activeClassName="text-purple-900 bg-purple-300"
      >
        Home
      </NavLink>
      <NavLink
        to="/education"
        className="nav-item py-1 px-2.5 rounded-md hover:text-yellow-600 flex-1"
        activeClassName="text-purple-900 bg-purple-300"
      >
        Education
      </NavLink>
      <NavLink
        to="/project"
        className="nav-item py-1 px-2.5 rounded-md hover:text-yellow-600 flex-1"
        activeClassName="text-purple-900 bg-purple-300"
      >
        Project
      </NavLink>
      <NavLink
        to="/contact"
        className="nav-item py-1 px-2.5 rounded-md hover:text-yellow-600 flex-1"
        activeClassName="text-purple-900 bg-purple-300"
      >
        Contact
      </NavLink>
    </nav>
  );
};

export default Navigation;
