
const EducationPage = () => {
    return (
        <div className="education-page">
            <h3>EDUCATION</h3>

            <section class="education-items">
                <div class="university">
                    <h2 class="text-secondary">Formal Education</h2>
                    <h3 class="text-secondary">Bachelor of Electronic Engineering</h3>
                    <p>
                        <i class="fas fa-map-marker-alt"></i> Hong Kong University of Science and Technology, HK
                    </p>
                    <p>
                        <i class="fas fa-calendar-alt"></i> 09/2016 - 06/2021
                    </p>
                </div>

                <hr/>

            <div class="self-learn">
                <h2 class="text-secondary">Self-learn</h2>

                <div class="self-learn-intro">
                    <p>
                        In my freshman year, I did not like programming and decided not to major in computer science. But after taking a programming course in C++, as I thought that might help my study in embeded system design, I started to understand software and eventually changed interest to software engineering.
                    </p>
                    <p>
                        During the summer of my fourth year in university, I had the chance to get free online courses. I then decided to leverage the opportunity and took different courses about software. I tried to be exposed to as many different fields as possible, from frontend web development, to data processing and management, as well as the basic of software development process and tools commonly used by software developers.
                    </p>
                    
                    <div class="skillsets">
                        <h3 class="text-secondary">Languages/Frameworks</h3>
                        <ul class="skills">
                            <li><i class="fab fa-html5"></i> HTML</li>
                            <li><i class="fab fa-css3-alt"></i> CSS</li>
                            <li><i class="fab fa-sass"></i> Sass</li>
                            <li><i class="fab fa-bootstrap"></i> Bootstrap</li>
                            <li><i class="fab fa-js"></i> JavaScript</li>
                            <li><i class="fab fa-python"></i> Python</li>
                            <li>C++</li>
                            <li><i class="fab fa-php"></i> PHP</li>
                            <li>SQL</li>
                        </ul>
                    </div>

                    <div class="skillsets">
                        <h3 class="text-secondary">Tools/Skills</h3>
                        <ul class="skills">
                            <li><i class="fab fa-git-square"></i> Git</li>
                            <li><i class="fab fa-bitbucket"></i> Bitbucket</li>
                            <li><i class="fab fa-github"></i> Github</li>
                            <li>jQuery</li>
                            <li>MySQL</li>
                            <li>SQLite</li>
                            <li>XML & JSON</li>
                            <li>Responsive Design</li>
                            <li>API</li>
                        </ul>
                    </div>
                </div>

                <div class="self-learn-courses">
                    <h3 class="text-secondary">Courses Completed on Online Platforms</h3>
                    <table class="table">
                        <tbody>
                            <tr>
                                <th>Course Name</th>
                                <th>Provider</th>
                                <th>Related Skills</th>
                            </tr>
                            <tr>
                                <th colspan="3" class="specialization">Web Design for Everybody</th>
                            </tr>
                            <tr>
                                <td>Introduction to HTML5</td>
                                <td rowspan="5">University of Michigan</td>
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
                                <td>Bootstrap<br/>Responsive Design</td>
                            </tr>
                            <tr>
                                <td>Web Design for Everybody Capstone</td>
                                <td></td>
                            </tr>
                            <tr>
                                <th colspan="3" class="specialization">Web Applications for Everybody</th>
                            </tr>
                            <tr>
                                <td>Building Web Applications in PHP</td>
                                <td rowspan="4">University of Michigan</td>
                                <td>HTML5<br/>CSS3<br/>PHP</td>
                            </tr>
                            <tr>
                                <td>Introduction to Structured Query Language (SQL)</td>
                                <td>SQL<br/>MySQL</td>
                            </tr>
                            <tr>
                                <td>Building Database Applications in PHP</td>
                                <td>PHP<br/>MySQL</td>
                            </tr>
                            <tr>
                                <td>JavaScript, jQuery, and JSON</td>
                                <td>JavaScript<br/>jQuery<br/>JSON</td>
                            </tr>
                            <tr>
                                <th colspan="3" class="specialization">Python for Everybody</th>
                            </tr>
                            <tr>
                                <td>Programming for Everybody (Getting Started with Python)</td>
                                <td rowspan="5">University of Michigan</td>
                                <td rowspan="2">Python</td>
                            </tr>
                            <tr>
                                <td>Python Data Structures</td>
                            </tr>
                            <tr>
                                <td>Using Python to Access Web Data</td>
                                <td>XML<br/>JSON</td>
                            </tr>
                            <tr>
                                <td>Using Databases with Python</td>
                                <td>SQLite</td>
                            </tr>
                            <tr>
                                <td>Capstone: Retrieving, Processing, and Visualizing Data with Python</td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
        </div>
    )
}

export default EducationPage
