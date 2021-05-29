import { FaGithub, FaLinkedin } from "react-icons/fa";
import noun_Owl_321142 from "../images/noun_Owl_321142.png";

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <a href="/">
          <img
            src={noun_Owl_321142}
            alt="Owl by Ben Davis from the Noun Project"
            className="logo-img"
          />
        </a>
      </div>

      <div className="sns">
        <a href="https://github.com/krissolui" className="btn sns-btn">
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/siu-on-lui-8b8888159/"
          className="btn sns-btn"
        >
          <FaLinkedin />
        </a>
      </div>

      <div className="info">
        <p>Email: krissolui@gmail.com</p>
        <p>Phone: +(852)6088 9331</p>
      </div>
      <hr />
      <div className="copyright">
        <p>Copyright &copy; 2021.</p>
      </div>
    </footer>
  );
};

export default Footer;
