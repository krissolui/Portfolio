import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SendEmail from "./SendEmail";

const ContactPage = () => {

  return (
    <div className="contact-page">
      <h3>CONTACT</h3>

      <section className="contact-main">
        <div className="contact-info">
          <div className="sns">
            <a href="https://github.com/krissolui" className="btn sns-btn">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/siu-on-lui-8b8888159/" className="btn sns-btn">
              <FaLinkedin />
            </a>
          </div>

          <p className="fullname">Kris Lui</p>
          <p>Email: krissolui@gmail.com</p>
          <p>Phone: +(852)6088 9331</p>
        </div>

        <SendEmail />
      </section>
    </div>
  );
};

export default ContactPage;
