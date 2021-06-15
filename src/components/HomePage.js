import { Link } from "react-router-dom";
import hong_kong from "../images/hong_kong.jpg";

const HomePage = () => {
  return (
    <div className="home-page">
      <h3>HOME</h3>

      <section className="home-item about-me">
        <h2 className="text-secondary">About Me</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          atque vel sint delectus voluptatum ipsum corporis et blanditiis ea
          unde iure fugiat, id illo dicta mollitia nobis, neque iste illum?
        </p>
        <div className="img">
          <img src={hong_kong} alt="about me" className="reference-img" />
        </div>
      </section>

      <section className="home-item casual"></section>

      <section className="home-item intro-education">
        <img src="" alt="" className="reference-img" />
        <h2 className="text-secondary">Education</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit,
          similique. Exercitationem iste porro voluptate quibusdam! Reiciendis
          consequuntur quidem rerum reprehenderit veniam pariatur commodi quia?
          Numquam odio consequuntur delectus nulla deleniti.
        </p>
        <Link to="/education">
          <button className="btn">Learn More</button>
        </Link>
      </section>

      <section className="home-item intro-project">
        <img src="" alt="" className="reference-img" />
        <h2 className="text-secondary">Project</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit,
          similique. Exercitationem iste porro voluptate quibusdam! Reiciendis
          consequuntur quidem rerum reprehenderit veniam pariatur commodi quia?
          Numquam odio consequuntur delectus nulla deleniti.
        </p>
        <Link to="/projects">
          <button className="btn">Learn More</button>
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
