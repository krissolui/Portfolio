import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import EducationPage from "./components/EducationPage";
import ProjectsPage from "./components/ProjectsPage";
import ContactPage from "./components/ContactPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="container">
        <Header />
        <Route path="/" exact component={HomePage} />
        <Route path="/education" component={EducationPage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/contact" component={ContactPage} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
