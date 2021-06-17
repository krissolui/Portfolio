import { FaGithub, FaLinkedin } from "react-icons/fa";
import SendEmail from "./SendEmail";

const ContactPage = () => {
  return (
    <main className="home-page flex-grow bg-purple-200 text-purple-700 text-center p-2 flex flex-col justify-center items-center">
      <h3 className="text-4xl font-bold cursive text-yellow-600 mb-4 sm:text-6xl">
        CONTACT
      </h3>

      <section className="contact-main max-w-3xl w-full h-full flex flex-col justify-evenly items-center mx-auto lg:flex-row">
        <div className="contact-info mb-4">
          <div className="sns inline-flex text-4xl space-x-4">
            <a
              href="https://github.com/krissolui"
              target="_blank"
              rel="noreferrer"
              className="btn sns-btn"
            >
              <FaGithub className="hover:text-yellow-600" />
            </a>
            <a
              href="https://www.linkedin.com/in/siu-on-lui-8b8888159/"
              target="_blank"
              rel="noreferrer"
              className="btn sns-btn"
            >
              <FaLinkedin className="hover:text-yellow-600" />
            </a>
          </div>

          <p className="fullname text-5xl cursive font-semibold my-3">
            Kris Lui
          </p>
          <p>Email: krissolui@gmail.com</p>
          <p>Phone: +(852)6088 9331</p>
        </div>

        <SendEmail />
      </section>
    </main>
  );
};

export default ContactPage;
