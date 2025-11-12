const skills = [
  {
    category: "Languages",
    list: [
      { name: "C++", level: 10 },
      { name: "Java", level: 80 },
      { name: "C#", level: 80 },
      { name: "SQL", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "TypeScript", level: 30 },
    ],
    color: "bg-blue-200",
  },
  {
    category: "Frameworks",
    list: [
      { name: "React.js", level: 80 },
      { name: "Next.js", level: 60 },
      { name: ".NET", level: 70 },
      { name: "Spring Boot", level: 80 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Bootstrap", level: 50 },
      { name: "Shadcn UI", level: 80 },
      { name: "Ant Design", level: 80 },
    ],
    color: "bg-blue-300",
  },
  {
    category: "Databases",
    list: [
      { name: "SQL Server", level: 80 },
      { name: "MySQL", level: 80 },
      { name: "MongoDB", level: 20 },
    ],
    color: "bg-blue-200",
  },
  {
    category: "Tools",
    list: [
      { name: "IntelliJ", level: 80 },
      { name: "VS Code", level: 95 },
      { name: "Visual Studio", level: 85 },
      { name: "Git", level: 90 },
      { name: "Docker", level: 70 },
    ],
    color: "bg-blue-300",
  },
];

const softSkills = [
  "Problem Solving",
  "Teamwork",
  "Time Management",
  "Communication",
  "Adaptability",
];

export default function Skills() {
  return (
    <section className="min-h-screen bg-blue-200 p-6 py-16">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Title */}
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase">
            Kỹ Năng & Năng Lực
          </h2>
          <p className="text-lg font-medium text-gray-800 mt-3">
            Tổng hợp những kỹ năng kỹ thuật và mềm tôi đã tích lũy trong quá
            trình học tập và phát triển bản thân.
          </p>
          <span className="italic">
            *NOTE: Các kỹ năng được liệt kê dựa trên mức độ thường xuyên sử dụng
            trong dự án học tập và cá nhân.*
          </span>
        </div>

        {/* Technical Skills */}
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skillGroup, i) => (
            <div
              key={i}
              className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all"
            >
              <div className="bg-black text-white border-b-4 border-black p-4">
                <h3 className="text-2xl font-black uppercase">
                  {skillGroup.category}
                </h3>
              </div>

              <div className="p-5 space-y-4">
                {skillGroup.list.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span className="font-bold">{skill.name}</span>
                      <span className="font-bold text-gray-700">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 border-2 border-black h-4 relative">
                      <div
                        className={`${skillGroup.color} h-full border-r-2 border-black`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mt-10">
          <div className="bg-black text-white border-b-4 border-black p-4">
            <h3 className="text-2xl font-black uppercase">Soft Skills</h3>
          </div>
          <div className="p-5 flex flex-wrap gap-3">
            {softSkills.map((skill, idx) => (
              <span
                key={idx}
                className="bg-blue-200 border-3 border-black px-4 py-2 font-bold uppercase shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] mt-10">
          <div className="bg-black text-white border-b-4 border-black p-4">
            <h3 className="text-2xl font-black uppercase">English</h3>
          </div>
          <div className="p-6">
            <p className="text-lg font-medium text-gray-800">
              <strong>Tiếng Anh:</strong> TOEIC 740 — Có khả năng đọc hiểu tài
              liệu kỹ thuật và giao tiếp cơ bản trong môi trường làm việc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
