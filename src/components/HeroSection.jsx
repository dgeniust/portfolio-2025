import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-blue-200 px-6 py-20">
      <div className="max-w-6xl w-full">
        {/* Main Title Card */}
        <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-8">
          <div className="inline-block bg-black text-white px-4 py-2 mb-6 border-2 border-black">
            <span className="font-bold text-xl uppercase tracking-wide">
              Xin chào
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black uppercase leading-tight mb-6">
            Mình là{" "}
            <span className="bg-black text-white px-3 py-1 inline-block transform -skew-x-6">
              Nguyễn Thành Đạt
            </span>
          </h1>

          <p className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">
            Fullstack Developer • Đam mê UI/UX, ReactJS, và TailwindCSS.
          </p>
        </div>

        {/* Description Card */}
        <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
          <p className="text-lg font-medium text-gray-800 leading-relaxed">
            <span className="font-bold">Mục tiêu</span>: Tạo ra trải nghiệm web
            nhanh, đẹp và thân thiện người dùng.
            <br />
            Luôn học hỏi công nghệ mới và áp dụng best practices vào dự án.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="projects"
            className="group bg-black text-white border-4 border-black px-8 py-4 font-black uppercase text-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-200 flex items-center gap-2"
          >
            Xem Dự Án
            <ArrowRight
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              strokeWidth={3}
            />
          </a>

          <a
            href="contact"
            className="bg-white text-black border-4 border-black px-8 py-4 font-black uppercase text-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-200"
          >
            Liên Hệ
          </a>
          <a
            href="https://drive.google.com/file/d/1CRIQFmSFoAghYB4fWsIjVU_zxo2z_6N0/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black border-4 border-black px-8 py-4 font-black uppercase text-lg shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-200"
          >
            Xem CV
          </a>
        </div>

        {/* Decorative Element */}
        <div className="mt-12 text-center">
          <div className="inline-flex gap-2">
            <div
              className="w-4 h-4 bg-black border-2 border-black animate-bounce"
              style={{ animationDelay: "0ms" }}
            ></div>
            <div
              className="w-4 h-4 bg-black border-2 border-black animate-bounce"
              style={{ animationDelay: "150ms" }}
            ></div>
            <div
              className="w-4 h-4 bg-black border-2 border-black animate-bounce"
              style={{ animationDelay: "300ms" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
