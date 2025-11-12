import { useState } from "react";
import { GraduationCap, User, Target } from "lucide-react";

const education = [
  {
    icon: GraduationCap,
    title: "Sinh viên năm 4 - Đại học Sư Phạm Kỹ Thuật TP.HCM",
    time: "2022 - 2026",
    desc: "Chuyên ngành: Công nghệ thông tin",
  },
];

const experiences = [];

export default function Resume() {
  const [activeTab, setActiveTab] = useState("education");

  const currentData = activeTab === "education" ? education : experiences;
  const hasData = currentData.length > 0;

  return (
    <section className="py-20 bg-blue-200 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        {/* Thông tin cá nhân */}
        <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-12">
          <div className="flex items-center gap-3 mb-6">
            <User className="w-8 h-8 text-black" strokeWidth={3} />
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
              Thông tin cá nhân
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-3 text-lg font-medium text-gray-800">
            <p>
              <span className="font-black text-black">Họ và tên:</span> Nguyễn
              Thành Đạt
            </p>
            <p>
              <span className="font-black text-black">Ngày sinh:</span>{" "}
              14/01/2004
            </p>
            <p>
              <span className="font-black text-black">Giới tính:</span> Nam
            </p>
            <p>
              <span className="font-black text-black">Địa chỉ:</span> Số 6 đường
              449 Tăng Nhơn Phú A Thủ Đức
            </p>
            <p>
              <span className="font-black text-black">Email:</span>{" "}
              dathiichan141@gmail.com
            </p>
            <p>
              <span className="font-black text-black">SĐT:</span> 0387731823
            </p>
          </div>
        </div>

        {/* Mục tiêu nghề nghiệp */}
        <div className="bg-white border-4 border-black p-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Target className="w-8 h-8 text-black" strokeWidth={3} />
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
              Mục tiêu nghề nghiệp
            </h2>
          </div>
          <p className="text-gray-800 text-lg leading-relaxed font-medium">
            Là sinh viên năm 4 chuyên ngành Công nghệ thông tin, tôi mong muốn
            được làm việc trong môi trường năng động và chuyên nghiệp để không
            ngừng học hỏi, trau dồi kỹ năng lập trình cũng như tư duy giải quyết
            vấn đề. Mục tiêu của tôi là phát triển bản thân toàn diện, tích lũy
            nhiều kinh nghiệm thực tế và hướng đến một công việc ổn định, lâu
            dài trong lĩnh vực công nghệ.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab("education")}
            className={`flex-1 cursor-pointer border-4 border-black px-6 py-4 font-black uppercase text-lg transition-all duration-200${
              activeTab === "education"
                ? " bg-blue-200 text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                : " bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            }`}
          >
            🎓 Học vấn
          </button>
          <button
            onClick={() => setActiveTab("experience")}
            className={`flex-1 cursor-pointer border-4 border-black px-6 py-4 font-black uppercase text-lg transition-all duration-200${
              activeTab === "experience"
                ? " bg-blue-200 text-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                : " bg-white text-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            }`}
          >
            💼 Kinh nghiệm
          </button>
        </div>

        {/* Content */}
        {hasData ? (
          <div className="space-y-8">
            {currentData.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-black border-4 border-black p-3 flex-shrink-0">
                      <Icon className="w-8 h-8 text-white" strokeWidth={3} />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl font-black text-black uppercase mb-2 leading-tight">
                        {item.title}
                      </h3>
                      <div className="inline-block bg-black text-white px-3 py-1 text-sm font-bold mb-3">
                        {item.time}
                      </div>
                      <p className="text-gray-800 font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="bg-white border-4 border-black p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
            <div className="text-6xl mb-4">📭</div>
            <h3 className="text-2xl font-black uppercase mb-2">
              Chưa có thông tin
            </h3>
            <p className="text-gray-600 font-medium">
              {activeTab === "education"
                ? "Thông tin học vấn sẽ được cập nhật sớm"
                : "Đang tìm kiếm cơ hội thực tập và làm việc"}
            </p>
          </div>
        )}

        <div className="mt-12 text-center">
          <div className="inline-block bg-black text-white border-4 border-black px-8 py-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-200 cursor-pointer">
            <p className="text-xl font-black uppercase">
              🚀 Sẵn sàng cho thử thách mới!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
