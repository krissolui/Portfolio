import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from './Navigation'
import HomePage from "./HomePage";
import EducationPage from "./EducationPage";
import ProjectsPage from "./ProjectsPage";
import ContactPage from "./ContactPage";

const Header = () => {
    return (
        <header>
            <h1>This is Kris' Portfolio</h1>
            <Router>
                <Navigation />
                <Route path="/" exact component={HomePage} />
                <Route path="/education" component={EducationPage} />
                <Route path="/projects" component={ProjectsPage} />
                <Route path="/contact" component={ContactPage} />
            </Router>
        </header>
    );
};

export default Header;
