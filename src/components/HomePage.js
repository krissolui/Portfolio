import { Link } from "react-router-dom";
import Button from "./Button";
import hong_kong from "../images/hong_kong.jpg";

const HomePage = () => {
  return (
    <main className="home-page flex-grow bg-gray-500 text-white text-center p-2 flex flex-col justify-center items-center">
      <h3 className="text-4xl font-bold cursive text-yellow-600 sm:text-6xl">
        HOME
      </h3>

      <section className="home-item about-me">
        <h2 className="text-secondary text-3xl font-semibold my-3">About Me</h2>

        <div className="max-w-5xl mx-auto md:flex items-center">
          <p className="p-2 md:flex-1">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
            atque vel sint delectus voluptatum ipsum corporis et blanditiis ea
            unde iure fugiat, id illo dicta mollitia nobis, neque iste illum?
          </p>
          <img
            src={hong_kong}
            alt="about me"
            className="reference-img w-3/4 mx-auto md:flex-1 md:w-1/2"
          />
        </div>
      </section>

      <section className="home-item casual"></section>

      <div className="max-w-5xl mx-auto md:inline-flex">
        <section className="home-item intro-education">
          <img src="" alt="" className="reference-img" />
          <h2 className="text-secondary text-3xl font-semibold my-3">
            Education
          </h2>
          <p className="px-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit,
            similique. Exercitationem iste porro voluptate quibusdam! Reiciendis
            consequuntur quidem rerum reprehenderit veniam pariatur commodi
            quia? Numquam odio consequuntur delectus nulla deleniti.
          </p>
          <Link to="/education">
            <Button text="Learn More" />
          </Link>
        </section>

        <section className="home-item intro-project">
          <img src="" alt="" className="reference-img" />
          <h2 className="text-secondary text-3xl font-semibold my-3">
            Project
          </h2>
          <p className="px-2">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit,
            similique. Exercitationem iste porro voluptate quibusdam! Reiciendis
            consequuntur quidem rerum reprehenderit veniam pariatur commodi
            quia? Numquam odio consequuntur delectus nulla deleniti.
          </p>
          <Link to="/projects">
            <Button text="Learn More" />
          </Link>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
