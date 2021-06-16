import Project from "./Project";

const ProjectsPage = () => {
  return (
    <main className="home-page flex-grow bg-gray-500 text-center p-2">
      <h3 className="text-4xl font-bold cursive text-yellow-600 mb-4 sm:text-6xl">
        PROJECTS
      </h3>

      <div className="projects-list max-w-7xl px-4 mx-auto grid sm:grid-cols-2 lg:grid-cols-3">
        <Project index="1" gitLink="" viewLink="" />
        <Project index="2" gitLink="" viewLink="" />
        <Project index="3" gitLink="" viewLink="" />
        <Project index="4" gitLink="" viewLink="" />
        <Project index="5" gitLink="" viewLink="" />
        <Project index="6" gitLink="" viewLink="" />
      </div>
    </main>
  );
};

export default ProjectsPage;
