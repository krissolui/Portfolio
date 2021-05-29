import { FaGithub, FaLinkedin } from 'react-icons/fa';
import SendEmail from "./SendEmail";

const ContactPage = () => {

  return (
    <div className="contact-page">
      <h3>CONTACT</h3>

      <section class="contact-main">
        <div class="contact-info">
          <div class="sns">
            <a href="https://github.com/krissolui" class="btn sns-btn">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/siu-on-lui-8b8888159/" class="btn sns-btn">
              <FaLinkedin />
            </a>
          </div>

          <p class="fullname">Kris Lui</p>
          <p>Email: krissolui@gmail.com</p>
          <p>Phone: +(852)6088 9331</p>
        </div>

        <SendEmail />
      </section>
    </div>
  );
};

export default ContactPage;
