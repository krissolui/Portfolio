import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="bg-purple-700 py-6 text-center flex flex-col items-center md:flex-row md:justify-between">
      <h1 className="text-2xl text-white font-bold mb-2 md:mb-0 md:text-3xl">
        <span className="cursive text-5xl text-yellow-600 md:text-7xl">
          Kris{" "}
        </span>{" "}
        Portfolio
      </h1>
      <Navigation />
    </header>
  );
};

export default Header;
