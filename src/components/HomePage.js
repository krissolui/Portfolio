import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import hong_kong from "../images/hong_kong.jpg";
import sanityClient from "../client";

const HomePage = () => {
  const [author, setAuthor] = useState(null);
  let bioParagraphs = null;

  useEffect(() => {
    const getBio = async () => {
      const data = await sanityClient.fetch(
        `*[_type == "author"]{
          bio
        }`
      );
      setAuthor(data[0]);
    };

    getBio();
  }, []);

  if (author) bioParagraphs = author.bio.split("\n");

  return (
    <main className="home-page flex-grow bg-gray-500 text-white text-center p-2 flex flex-col justify-center items-center">
      <h3 className="text-4xl font-bold cursive text-yellow-600 sm:text-6xl">
        HOME
      </h3>

      <section className="home-item about-me">
        <h2 className="text-secondary text-3xl font-semibold my-3">About Me</h2>

        <div className="max-w-5xl mx-auto md:flex items-center">
          <div>
            {author &&
              bioParagraphs.map((paragraph) => (
                <p className="p-2 md:flex-1">{paragraph}</p>
              ))}
          </div>
          <img
            src={hong_kong}
            alt="about me"
            className="reference-img w-3/4 mx-auto md:flex-1 md:w-1/2"
          />
        </div>
      </section>

      <section className="home-item casual"></section>

      <div className="max-w-5xl mx-auto md:inline-flex">
        <section className="home-item intro-education w-full flex flex-col justify-between items-center md:flex-1">
          <h2 className="text-secondary text-3xl font-semibold my-3">
            Education
          </h2>
          <p className="px-2">
            I graduated from HKUST with a Bachelor's degree in Electronic
            Engineering. Outside of school, I have taken different courses
            online about software development. Check out the education page to
            learn more about that.
          </p>
          <Link to="/education">
            <Button text="Learn More" />
          </Link>
        </section>

        <section className="home-item intro-projectn w-full flex flex-col justify-between items-center  md:flex-1">
          <h2 className="text-secondary text-3xl font-semibold my-3">
            Project
          </h2>
          <p className="px-2">
            Check out the project page for projects I have completed.
          </p>
          <Link to="/project">
            <Button text="Learn More" />
          </Link>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
