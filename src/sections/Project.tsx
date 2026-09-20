import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Sangam Glass house",
    url: "https://www.sangamglasshouse.in/",
    description:
      "A modern glass and interior brand website built for customer trust, product discovery, and lead generation. The platform highlights premium offerings and supports business inquiries with a clean conversion-focused experience.",
    tech: ["Next.js", "MongoDB", "Cloudinary", "Resend", "Nest.js", "REST API"],
    accent: "from-violet-500/20 via-indigo-500/10 to-transparent",
  },
  {
    name: "DNCR Property (Real Estate)",
    url: "https://dncrproperty.com/",
    description:
      "A modern real estate platform offering property listings, search filters, and mobile support for a smoother property discovery journey.",
    tech: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Angular"],
    accent: "from-sky-500/20 via-cyan-500/10 to-transparent",
  },
  {
    name: "Petrasync (Automotive)",
    url: "https://petraautoproducts.com/petrasync/",
    description:
      "Luxury automobile parts inventory and dealer management solution designed for product browsing and streamlined operations.",
    tech: ["Angular", "Bootstrap", "CSS", ".NET"],
    accent: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
  {
    name: "MH Realty",
    url: "https://mhrealty.in/",
    description:
      "A premium real estate landing experience with elegant sections, featured property highlights, and a refined mobile-first layout.",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    accent: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    name: "Deccan Realty",
    url: "https://deccanrealty.com/",
    description:
      "Responsive property showcase website built to highlight premium listings and improve the overall buyer experience.",
    tech: ["HTML", "Tailwind CSS", "JavaScript"],
    accent: "from-pink-500/20 via-fuchsia-500/10 to-transparent",
  },
  {
    name: "Munatech",
    url: "https://munatech.com/",
    description:
      "Corporate website created to represent a technology services brand with a professional and credible digital presence.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    accent: "from-indigo-500/20 via-blue-500/10 to-transparent",
  },
  {
    name: "MTOne Mobile App",
    url: "https://play.google.com/store/apps/details?id=com.mtonema",
    description:
      "A real-estate mobile app focused on property transactions, listing management, and seamless buyer-seller communication.",
    tech: ["React Native"],
    accent: "from-rose-500/20 via-red-500/10 to-transparent",
  },
];

const Project = () => {
  return (
    <section
      id="projects"
      className="relative w-full overflow-hidden bg-[#f3f5f9] px-4 py-16 text-slate-900 sm:px-6 md:px-10 lg:px-16"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.14),_transparent_25%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.10),_transparent_30%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          
          <h2 className="text-4xl font-black tracking-[-0.06em] text-slate-900 sm:text-5xl">
            Projects
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-600 sm:text-lg">
            I build practical digital products that focus on performance,
            usability, and business impact across web and mobile experiences.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[28px] border border-slate-700/80 bg-gradient-to-br from-slate-900 via-slate-950 to-[#111827] p-5 shadow-[0_20px_60px_rgba(15,23,42,0.24)] transition-all duration-300 hover:-translate-y-2 hover:border-indigo-400/60 hover:shadow-[0_28px_80px_rgba(15,23,42,0.32)]"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-40`}
              />

              <div className="relative z-10">
                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-indigo-400/30 bg-indigo-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-indigo-200">
                    Project
                  </span>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-2.5 py-1.5 text-xs font-semibold text-slate-200 transition-colors duration-300 hover:border-indigo-400/50 hover:bg-indigo-500/20 hover:text-white"
                  >
                    Visit
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>

                <h3 className="mb-3 text-2xl font-bold text-white">
                  {project.name}
                </h3>
                <p className="mb-5 text-sm leading-7 text-slate-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-slate-700 bg-slate-800/80 px-2.5 py-1.5 text-[11px] font-semibold text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;


