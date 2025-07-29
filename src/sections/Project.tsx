// import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "DNCR Property (Real Estate)",
    url: "https://dncrproperty.com/",
    tech: "HTML,CSS,Javascript, Tailwind CSS, Angular.",
    description:
      "A modern real estate platform offering property listings, search filters, and mobile support.",
  },
  {
    name: "Petrasync (Automotive)",
    url: "https://petrasyncwebapp.azurewebsites.net/",
    tech: "Angular,Bootstrap,CSS.",
    description:
      "Luxury automobile parts inventory and dealer management solution.",
  },
  {
    name: "MH Realty",
    url: "https://mhrealty.in/",
    tech: "HTML, Tailwind CSS,Javscript",
    description: "Real estate site with featured properties and elegant UI.",
  },
  {
    name: "Deccan Realty",
    url: "https://deccanrealty.com/",
    tech: "HTML, Tailwind CSS, JavaScript",
    description:
      "Responsive platform for showcasing premium real estate listings.",
  },
  {
    name: "Munatech",
    url: "https://munatech.com/",
    tech: "Next.js, Tailwind CSS, TypeScript",
    description: "Corporate site for a technology services company.",
  },
  {
    name: "MTOne Mobile App",
    url: "https://mtestates.com/partners/download/application.html",
    tech: "React Native,",
    description: "A mobile app for buying and selling real estate. Partners can list, manage properties, and connect with buyers seamlessly.",
  }
];

const Project = () => {
  return (
    <section
      id="projects"
      className="relative w-full min-h-screen py-20 px-4 sm:px-6 md:px-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 overflow-hidden"
    >
      {/* Background Circles */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-400 rounded-full blur-3xl opacity-10" />
        <div
          className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-purple-400 rounded-full blur-3xl opacity-10"
          style={{ transform: "translate(-50%, -50%)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-6">
          Projects
        </h2>
        <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto mb-12">
          A glimpse of real-world projects I've built and contributed to in my
          career.
        </p>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/60 backdrop-blur-md border border-gray-200 hover:border-blue-500 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out rounded-2xl p-6 relative overflow-hidden"
            >
              {/* Decorative gradient ring */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition duration-500 z-0" />

              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">
                  {project.description}
                </p>
                <p className="text-xs text-gray-500 mb-4">
                  <strong>Tech Stack:</strong> {project.tech}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:underline text-sm font-medium"
                >
                  {/* Visit Site <ExternalLink size={16} className="ml-1" /> */}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
