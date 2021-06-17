import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import owl from "../images/owl.png";

const Footer = () => {
  return (
    <footer className="bg-purple-700 pt-4 pb-2 text-white text-center flex-col justify-center items-center">
      <div className="max-w-screen-md mx-auto flex flex-col items-center md:flex-row md:justify-evenly">
        <div className="logo w-32 mx-auto md:mx-0">
          <Link to="/" exact onClick={() => window.scrollTo(0, 0)}>
            <img
              src={owl}
              alt="Owl by Ben Davis from the Noun Project"
              className="logo-img"
            />
          </Link>
        </div>

        <div>
          <div className="sns inline-flex text-3xl space-x-3">
            <a
              href="https://github.com/krissolui"
              target="_blank"
              rel="noreferrer"
              className="btn sns-btn hover:text-yellow-600"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/siu-on-lui-8b8888159/"
              target="_blank"
              rel="noreferrer"
              className="btn sns-btn hover:text-yellow-600"
            >
              <FaLinkedin />
            </a>
          </div>

          <div className="info">
            <p>Email: krissolui@gmail.com</p>
            <p>Phone: +(852)6088 9331</p>
          </div>
        </div>
      </div>

      <hr className="my-1 mx-2" />
      <div className="copyright">
        <p>Copyright &copy; 2021.</p>
      </div>
    </footer>
  );
};

export default Footer;
