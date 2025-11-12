import { Github, ExternalLink } from "lucide-react";
import ProjectImage from "./ProjectImage";

const projects = [
  {
    title: "HCMUTE CARE",
    desc: "Website đặt lịch khám chữa bệnh siêu tiện lợi",
    img: "https://github.com/dgeniust/hcmute-care/blob/main/frontend/public/img/bg-login.jpg?raw=true",
    demo: "https://your-portfolio.vercel.app",
    github: "https://github.com/dgeniust/hcmute-care",
    tech: ["React", "Tailwind", "Ant Design", "Spring", "Vite"],
  },
  {
    title: "CareX",
    desc: "Website quản lý sức khỏe của người dùng ",
    img: "https://github.com/lochuung/CareX/blob/main/demo/yoga-dection.png?raw=true",
    demo: "https://your-meal-app.vercel.app",
    github: "https://github.com/lochuung/CareX",
    tech: ["React", "Tailwind", "Ant Design", "Spring", "Vite"],
  },
];

export default function Projects() {
  return (
    <section className="py-20 bg-blue-200">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-center uppercase tracking-tight">
            Dự án nổi bật
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="group">
              {/* Project Card */}
              <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all duration-200 overflow-hidden">
                {/* Image Container */}
                <ProjectImage src={p.img} alt={p.title} />

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-black uppercase mb-3 leading-tight">
                    {p.title}
                  </h3>

                  <p className="text-gray-800 font-medium mb-4 leading-relaxed">
                    {p.desc}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="bg-white border-2 border-black px-3 py-1 text-sm font-bold uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-black text-white border-4 border-black px-4 py-3 font-black uppercase text-sm flex items-center justify-center gap-2 hover:bg-white hover:text-black transition-colors duration-200"
                    >
                      <ExternalLink size={18} strokeWidth={3} />
                      View Demo
                    </a>
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-white text-black border-4 border-black px-4 py-3 font-black uppercase text-sm flex items-center justify-center gap-2 hover:bg-black hover:text-white transition-colors duration-200"
                    >
                      <Github size={18} strokeWidth={3} />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/dgeniust" // link bạn muốn điều hướng
            target="_blank"
            rel="noopener noreferrer" // bảo mật, tránh vulnerability
            className="inline-block bg-white border-4 border-black px-8 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] 
               hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-200 cursor-pointer"
          >
            <p className="text-xl font-black uppercase">
              Xem thêm trên GitHub →
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
