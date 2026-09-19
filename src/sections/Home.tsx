import { useEffect, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail, Phone, Sparkles } from "lucide-react";

const titles = ["Frontend Developer", "Android Developer", "UI Engineer"];

const skills = [
  "react-native-logo.png",
  "Angularjs-logo.png",
  "nextjs-logo.png",
  "html-logo.jpg",
  "reactjs-logo.jpg",
  "css-logo.png",
  "tailwindcss-logo.png",
  "javascript-logo.png",
  "github-logo.png",
];

const socials = [
  { href: "https://www.linkedin.com/in/wasim-saifi-b6954321b/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/wasimsaifi", icon: Github, label: "GitHub" },
  { href: "https://wa.me/7017499280", icon: Phone, label: "WhatsApp" },
  { href: "mailto:wasimsaifi983@gmail.com", icon: Mail, label: "Email" },
];

const Home = () => {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (titles.length <= 1) return;

    const interval = setInterval(() => {
      setShow(false);
      setTimeout(() => {
        setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        setShow(true);
      }, 220);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-[#f3f5f9] px-4 py-12 text-slate-900 sm:px-6 md:px-10 lg:px-16"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(99,102,241,0.10),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.10),_transparent_25%)]" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative z-10 max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm">
            <Sparkles className="h-4 w-4" />
            Available for freelance and full-time roles
          </div>

          <h1 className="text-4xl font-black leading-[0.95] tracking-[-0.08em] text-slate-900 sm:text-5xl md:text-6xl lg:text-[5rem]">
            Hi, I&apos;m <span className="text-indigo-600">Wasim</span>
          </h1>

          <div className="mt-4 flex min-h-[3rem] items-center">
            <span
              className={`inline-block text-xl font-semibold text-slate-700 transition-all duration-500 sm:text-2xl md:text-3xl ${
                show ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
            >
              {titles[currentTitleIndex]}
            </span>
          </div>

          <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            I design and develop modern web and mobile experiences with a focus on clean code,
            smooth interactions, and user-first product thinking.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="Wasim_Saifi_FR.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-300 transition-all duration-300 hover:-translate-y-1"
            >
              Download CV
              <Download className="h-4 w-4" />
            </a>

            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300"
            >
              View work
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-10">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-500">Tech stack</p>
            <div className="flex flex-wrap gap-3">
              {skills.map((logo) => (
                <div
                  key={logo}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
                  title={logo.replace(/[-.]/g, " ")}
                >
                  <img
                    loading="lazy"
                    src={`../../logo/${logo}`}
                    alt={logo.replace(/\.(png|jpg)/gi, "")}
                    className="h-7 w-7 rounded-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-[430px]">
            <div className="absolute left-8 top-10 h-28 w-28 rounded-full bg-indigo-200/80 blur-2xl" />
            <div className="absolute bottom-6 right-6 h-28 w-28 rounded-full bg-cyan-200/70 blur-2xl" />

            <div className="relative overflow-hidden rounded-[30px] border border-slate-200 bg-white p-4 shadow-[0_30px_90px_rgba(15,23,42,0.08)]">
              <div className="mb-4 flex items-center justify-between px-2">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-400" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
               
              </div>

              <div className="rounded-[24px] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-3">
                <div className="overflow-hidden rounded-[18px] bg-slate-100">
                  <img
                    src="https://res.cloudinary.com/dcb1otmpr/image/upload/v1780392012/DSC_5454_2-removebg-previewcs_ouot2h.png"
                    alt="Wasim Saifi"
                    loading="lazy"
                    className="mx-auto h-[390px] w-full max-w-[300px] object-cover object-center"
                  />
                </div>
              </div>

             
            </div>

           

           

            <div className="absolute -bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-lg shadow-slate-200/80">
              {socials.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-transform duration-300 hover:-translate-y-1 hover:bg-slate-200"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
