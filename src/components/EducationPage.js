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
    <main className="education-page flex-grow bg-gray-500 text-white p-2">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-4xl font-bold cursive text-center text-yellow-600 sm:text-6xl">
          EDUCATION
        </h3>

        <section className="education-items">
          <div className="university p-1 text-center">
            <h2 className="text-secondary text-3xl font-semibold my-3 md:text-left">
              Formal Education
            </h2>
            <h3 className="text-secondary text-xl font-medium">
              Bachelor of Electronic Engineering
            </h3>
            <p>
              <FaMapMarkerAlt className="inline text-xl" /> Hong Kong University
              of Science and Technology, HK
            </p>
            <p>
              <FaCalendarAlt className="inline text-xl" /> 09/2016 - 06/2021
            </p>
          </div>

          <hr className="my-2 mx-2" />

          <div className="self-learn p-1">
            <h2 className="text-secondary text-3xl font-semibold text-center my-3 md:text-left">
              Self-learn
            </h2>

            <div className="self-learn-intro mb-4 md:inline-flex md:space-x-4">
              <p className="flex-1 pb-1">
                In my freshman year, I did not like programming and decided not
                to major in computer science. But after taking a programming
                course in C++, as I thought that might help my study in embeded
                system design, I started to understand software and eventually
                changed interest to software engineering.
              </p>
              <p className="flex-1">
                During the summer of my fourth year in university, I had the
                chance to get free online courses. I then decided to leverage
                the opportunity and took different courses about software. I
                tried to be exposed to as many different fields as possible,
                from frontend web development, to data processing and
                management, as well as the basic of software development process
                and tools commonly used by software developers.
              </p>
            </div>

            <div className="w-full text-center space-y-3 md:inline-flex md:justify-evenly md:items-start md:space-x-3 md:space-y-0">
              <div className="skillsets flex-1 border-2 border-dotted rounded-3xl pb-2">
                <h3 className="text-secondary text-xl font-semibold underline mb-2 md:text-2xl">
                  Languages/Frameworks
                </h3>
                <ul className="skills">
                  <li>
                    <FaHtml5 className="inline text-xl" /> HTML
                  </li>
                  <li>
                    <FaCss3Alt className="inline  text-xl" /> CSS
                  </li>
                  <li>
                    <FaSass className="inline  text-xl" /> Sass
                  </li>
                  <li>
                    <FaBootstrap className="inline  text-xl" /> Bootstrap
                  </li>
                  <li>
                    <SiJavascript className="inline text-xl" /> JavaScript
                  </li>
                  <li>
                    <FaPython className="inline text-xl" /> Python
                  </li>
                  <li>
                    <SiCplusplus className="inline text-xl" /> C++
                  </li>
                  <li>
                    <FaPhp className="inline text-xl" /> PHP
                  </li>
                  <li>
                    <FaDatabase className="inline text-xl" /> SQL
                  </li>
                </ul>
              </div>

              <div className="skillsets flex-1 border-2 border-dotted rounded-3xl pb-2">
                <h3 className="text-secondary text-xl underline font-semibold mb-2 md:text-2xl">
                  Tools/Skills
                </h3>
                <ul className="skills">
                  <li>
                    <FaGitAlt className="inline text-xl" /> Git
                  </li>
                  <li>
                    <FaBitbucket className="inline text-xl" /> Bitbucket
                  </li>
                  <li>
                    <FaGithub className="inline text-xl" /> Github
                  </li>
                  <li>
                    <SiJquery className="inline text-xl" />
                    jQuery
                  </li>
                  <li>
                    <GrMysql className="inline text-xl" /> MySQL
                  </li>
                  <li>SQLite</li>
                  <li>XML &amp; JSON</li>
                  <li>Responsive Design</li>
                  <li>API</li>
                </ul>
              </div>
            </div>

            <div className="self-learn-courses">
              <h3 className="text-secondary text-xl text-center font-semibold my-3 md:text-2xl md:text-left">
                Courses Completed on Online Platforms
              </h3>
              <table className="table mx-auto rounded-xl">
                <tbody>
                  <tr className="bg-purple-600">
                    <th>Course Name</th>
                    <th>Provider</th>
                    <th>Related Skills</th>
                  </tr>
                  <tr>
                    <th colSpan="3" className="specialization bg-purple-400">
                      Web Design for Everybody
                    </th>
                  </tr>
                  <tr>
                    <td>Introduction to HTML5</td>
                    <td rowSpan="5" className="text-center">
                      University of Michigan
                    </td>
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
                    <th colSpan="3" className="specialization bg-purple-400">
                      Web Applications for Everybody
                    </th>
                  </tr>
                  <tr>
                    <td>Building Web Applications in PHP</td>
                    <td rowSpan="4" className="text-center">
                      University of Michigan
                    </td>
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
                    <th colSpan="3" className="specialization bg-purple-400">
                      Python for Everybody
                    </th>
                  </tr>
                  <tr>
                    <td>
                      Programming for Everybody (Getting Started with Python)
                    </td>
                    <td rowSpan="5" className="text-center">
                      University of Michigan
                    </td>
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
                      Capstone: Retrieving, Processing, and Visualizing Data
                      with Python
                    </td>
                    <td></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default EducationPage;
