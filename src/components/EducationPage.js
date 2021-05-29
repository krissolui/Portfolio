import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaBootstrap,
  FaPython,
  FaPhp,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaBitbucket,
} from "react-icons/fa";
import { SiJavascript, SiCplusplus, SiJquery } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const EducationPage = () => {
  return (
    <div className="education-page">
      <h3>EDUCATION</h3>

      <section className="education-items">
        <div className="university">
          <h2 className="text-secondary">Formal Education</h2>
          <h3 className="text-secondary">Bachelor of Electronic Engineering</h3>
          <p>
            <FaMapMarkerAlt /> Hong Kong University of Science and Technology,
            HK
          </p>
          <p>
            <FaCalendarAlt /> 09/2016 - 06/2021
          </p>
        </div>

        <hr />

        <div className="self-learn">
          <h2 className="text-secondary">Self-learn</h2>

          <div className="self-learn-intro">
            <p>
              In my freshman year, I did not like programming and decided not to
              major in computer science. But after taking a programming course
              in C++, as I thought that might help my study in embeded system
              design, I started to understand software and eventually changed
              interest to software engineering.
            </p>
            <p>
              During the summer of my fourth year in university, I had the
              chance to get free online courses. I then decided to leverage the
              opportunity and took different courses about software. I tried to
              be exposed to as many different fields as possible, from frontend
              web development, to data processing and management, as well as the
              basic of software development process and tools commonly used by
              software developers.
            </p>

            <div className="skillsets">
              <h3 className="text-secondary">Languages/Frameworks</h3>
              <ul className="skills">
                <li>
                  <FaHtml5 /> HTML
                </li>
                <li>
                  <FaCss3Alt /> CSS
                </li>
                <li>
                  <FaSass /> Sass
                </li>
                <li>
                  <FaBootstrap /> Bootstrap
                </li>
                <li>
                  <SiJavascript /> JavaScript
                </li>
                <li>
                  <FaPython /> Python
                </li>
                <li>
                  <SiCplusplus /> C++
                </li>
                <li>
                  <FaPhp /> PHP
                </li>
                <li>
                  <FaDatabase /> SQL
                </li>
              </ul>
            </div>

            <div className="skillsets">
              <h3 className="text-secondary">Tools/Skills</h3>
              <ul className="skills">
                <li>
                  <FaGitAlt /> Git
                </li>
                <li>
                  <FaBitbucket /> Bitbucket
                </li>
                <li>
                  <FaGithub /> Github
                </li>
                <li>
                  <SiJquery />
                  jQuery
                </li>
                <li>
                  <GrMysql /> MySQL
                </li>
                <li>SQLite</li>
                <li>XML &amp; JSON</li>
                <li>Responsive Design</li>
                <li>API</li>
              </ul>
            </div>
          </div>

          <div className="self-learn-courses">
            <h3 className="text-secondary">
              Courses Completed on Online Platforms
            </h3>
            <table className="table">
              <tbody>
                <tr>
                  <th>Course Name</th>
                  <th>Provider</th>
                  <th>Related Skills</th>
                </tr>
                <tr>
                  <th colSpan="3" className="specialization">
                    Web Design for Everybody
                  </th>
                </tr>
                <tr>
                  <td>Introduction to HTML5</td>
                  <td rowSpan="5">University of Michigan</td>
                  <td>HTML5</td>
                </tr>
                <tr>
                  <td>Introduction to CSS3</td>
                  <td>CSS3</td>
                </tr>
                <tr>
                  <td>Interactivity with JavaScript</td>
                  <td>JavaScript</td>
                </tr>
                <tr>
                  <td>Advances Styling with Responsive Design</td>
                  <td>
                    Bootstrap
                    <br />
                    Responsive Design
                  </td>
                </tr>
                <tr>
                  <td>Web Design for Everybody Capstone</td>
                  <td></td>
                </tr>
                <tr>
                  <th colSpan="3" className="specialization">
                    Web Applications for Everybody
                  </th>
                </tr>
                <tr>
                  <td>Building Web Applications in PHP</td>
                  <td rowSpan="4">University of Michigan</td>
                  <td>
                    HTML5
                    <br />
                    CSS3
                    <br />
                    PHP
                  </td>
                </tr>
                <tr>
                  <td>Introduction to Structured Query Language (SQL)</td>
                  <td>
                    SQL
                    <br />
                    MySQL
                  </td>
                </tr>
                <tr>
                  <td>Building Database Applications in PHP</td>
                  <td>
                    PHP
                    <br />
                    MySQL
                  </td>
                </tr>
                <tr>
                  <td>JavaScript, jQuery, and JSON</td>
                  <td>
                    JavaScript
                    <br />
                    jQuery
                    <br />
                    JSON
                  </td>
                </tr>
                <tr>
                  <th colSpan="3" className="specialization">
                    Python for Everybody
                  </th>
                </tr>
                <tr>
                  <td>
                    Programming for Everybody (Getting Started with Python)
                  </td>
                  <td rowSpan="5">University of Michigan</td>
                  <td rowSpan="2">Python</td>
                </tr>
                <tr>
                  <td>Python Data Structures</td>
                </tr>
                <tr>
                  <td>Using Python to Access Web Data</td>
                  <td>
                    XML
                    <br />
                    JSON
                  </td>
                </tr>
                <tr>
                  <td>Using Databases with Python</td>
                  <td>SQLite</td>
                </tr>
                <tr>
                  <td>
                    Capstone: Retrieving, Processing, and Visualizing Data with
                    Python
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EducationPage;
