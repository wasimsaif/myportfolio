import { Briefcase, Code2, GraduationCap, Sparkles } from "lucide-react";

const skillTags = [
  "AI-first interfaces",
  "HTML",
  "CSS",
  "React",
  "React Native",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Angular",
  "GitHub",
  "Prompt-driven UX",
  "Web Performance",
  "Product thinking",
  "UI/UX systems",
];

const About = () => {
  return (
    <section id="about" className="w-full bg-[#050816] px-4 py-20 text-white sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-indigo-300">About me</p>
          <h2 className="text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl">
            Building digital experiences with <span className="text-indigo-400">clarity</span> and <span className="text-indigo-400">speed</span>
          </h2>
        </div>

        <p className="mx-auto mb-12 max-w-3xl text-center text-base leading-8 text-slate-300 sm:text-lg">
          I&apos;m a frontend-focused developer who enjoys turning product ideas into polished, high-performing experiences.
          I work across web and mobile interfaces, combining strong UI craft with modern engineering to build interfaces that feel intuitive,
          fast, and ready for real users.
        </p>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.25)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-300">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Experience</h3>
            </div>

            <div className="space-y-5 text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                <p className="text-sm font-semibold text-white">Frontend Developer</p>
                <p className="mt-1 text-sm text-indigo-300">Omnicom Production</p>
                {/* <p className="mt-2 text-sm">Joined: Sep 2025</p> */}
                <p className="mt-1 text-sm text-emerald-400">Currently working here</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                <p className="text-sm font-semibold text-white">Software Engineer</p>
                <p className="mt-1 text-sm text-slate-300">Ansit Software Pvt. Ltd.</p>
                <p className="mt-2 text-sm">Aug 2025</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                <p className="text-sm font-semibold text-white">Web Developer</p>
                <p className="mt-1 text-sm text-slate-300">Magic Edtech, Noida</p>
                <p className="mt-2 text-sm">2024</p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.25)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Education</h3>
            </div>

            <ul className="space-y-4 text-slate-300">
              <li className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                <span className="font-semibold text-white">MCA</span> – NIET, Greater Noida
                <div className="mt-1 text-sm">2021 – 2023</div>
              </li>
              <li className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                <span className="font-semibold text-white">BCA</span> – CCS University
                <div className="mt-1 text-sm">2018 – 2021</div>
              </li>
            </ul>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.25)] backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1 md:col-span-2 xl:col-span-1">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
                <Code2 className="h-5 w-5" />
              </div>
              <h3 className="text-xl font-bold text-white">Skills</h3>
            </div>

            <div className="mb-4 flex items-center gap-2 rounded-2xl border border-indigo-400/20 bg-indigo-500/10 px-3 py-2 text-sm font-medium text-indigo-200">
              <Sparkles className="h-4 w-4" />
              AI-enabled product thinking
            </div>

            <div className="flex flex-wrap gap-2">
              {skillTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-slate-900/70 px-3 py-2 text-xs font-medium text-slate-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
