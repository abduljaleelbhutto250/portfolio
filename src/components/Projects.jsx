import foodpandaImage from "../assets/foodpanda.webp";
import bykeaImage from "../assets/bykea.jpg";
import stitchImage from "../assets/stitch.jpg";
import madicareImage from "../assets/madicare.png";
import calculatorImage from "../assets/calculator.png";


function Projects() {
  const projects = [
    {
      title: "Foodpanda Website Clone",
      description:
        "A responsive multi-page Foodpanda-inspired website designed using HTML5, CSS3 and Bootstrap with modern layouts and responsive UI.",
      tech: "HTML5 • CSS3 • Bootstrap",
      link: "https://github.com/abduljaleelbhutto250/foodpanda",
      image: foodpandaImage,
    },
    {
      title: "Bykea Website Clone",

      description:
        "A responsive multi-page Bykea-inspired website built with HTML5 and CSS3, featuring Home, About Us, Contact, Corporate, Franchise, Help Center and Partner pages.",

      tech: "HTML5 • CSS3",

      link: "https://github.com/abduljaleelbhutto250/bykea",
      image: bykeaImage,
    },

    {
      title: "Stitch Website",

      description:
        "A responsive multi-page website built with HTML5 and CSS3, featuring Home, About, Services, Facilities, Gallery and Contact pages with custom styling.",

      tech: "HTML5 • CSS3",

      link: "https://github.com/abduljaleelbhutto250/Stitch",
      image: stitchImage,
    },

    {
      title: "Calculator",
      description:
        "A responsive calculator application with a clean user interface.",
      tech: "React • JavaScript • CSS",
      link: "https://github.com/abduljaleelbhutto250/Calculator.git",
      image: calculatorImage,
    },
    {
      title: "Medicare Doctor Booking",

      description:
        "A responsive medical website designed for doctor information and appointment booking, with dedicated pages for patients and doctors.",

      tech: "HTML5 • CSS3",

      link: "https://github.com/abduljaleelbhutto250/-Madicare-booking",
       image: madicareImage,
    },
    {
      title: "Personal Management System",
      description:
        "A full-stack project for storing and managing personal information.",
      tech: "React • Node.js • Express • MySQL",
      link: "https://github.com/abduljaleelbhutto250/Personal-Management-System",
      image: personalImage,
    }
  ];

  return (
    <section
      id="projects"
      className="bg-slate-900 px-6 py-24"
    >
      <div className="mx-auto max-w-6xl">

        <h2 className="text-center text-4xl font-bold">
          My{" "}
          <span className="text-blue-500">
            Projects
          </span>
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <div
              key={project.title}
              className="flex flex-col rounded-2xl border border-slate-800 bg-slate-950 p-6"
            >

              <div className="h-40 overflow-hidden rounded-xl bg-slate-800">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-300 hover:scale-105"
                />
              </div>
              <h3 className="mt-6 text-xl font-bold">
                {project.title}
              </h3>

              <p className="mt-3 flex-1 leading-7 text-slate-400">
                {project.description}
              </p>

              <p className="mt-5 text-sm text-blue-400">
                {project.tech}
              </p>

              {/* View Project Button */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block rounded-lg border border-slate-700 py-2 text-center transition hover:bg-blue-600"
              >
                View Project
              </a>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;