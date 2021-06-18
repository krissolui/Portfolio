import { NavLink } from "react-router-dom";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="bg-purple-700 py-6 text-center flex flex-col items-center md:flex-row md:justify-between md:pl-6 md:pr-4">
      <h1 className="text-2xl text-yellow-50 font-bold mb-2 md:mb-0 md:text-3xl">
        <NavLink
          to="/"
          exact
          className="mr-3 cursive text-5xl text-yellow-500 md:text-7xl"
        >
          Kris
        </NavLink>
        Portfolio
      </h1>
      <Navigation />
    </header>
  );
};

export default Header;
