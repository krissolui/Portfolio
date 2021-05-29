import { Link } from "react-router-dom";

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
          <img
            src="../images/hong-kong-chester-ho-unsplash.jpg"
            alt="about me"
            className="reference-img"
          />
        </div>
      </section>

      <section className="casual"></section>

      <section className="intro">
        <div className="home-item intro-education">
          <img src="" alt="" className="reference-img" />
          <h2 className="text-secondary">Education</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit,
            similique. Exercitationem iste porro voluptate quibusdam! Reiciendis
            consequuntur quidem rerum reprehenderit veniam pariatur commodi
            quia? Numquam odio consequuntur delectus nulla deleniti.
          </p>
          <Link to="/education">
            <button>Learn More</button>
          </Link>
        </div>

        <div className="home-item intro-project">
          <img src="" alt="" className="reference-img" />
          <h2 className="text-secondary">Project</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit,
            similique. Exercitationem iste porro voluptate quibusdam! Reiciendis
            consequuntur quidem rerum reprehenderit veniam pariatur commodi
            quia? Numquam odio consequuntur delectus nulla deleniti.
          </p>
          <Link to="/projects">
            <button>Learn More</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
