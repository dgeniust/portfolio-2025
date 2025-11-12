import { useState } from "react";
import { Mail, Phone, Github, Facebook } from "lucide-react";
import { message } from "antd";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Vui lòng nhập tên";
    if (!formData.email.trim()) newErrors.email = "Vui lòng nhập email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Email không hợp lệ";
    if (!formData.message.trim()) newErrors.message = "Vui lòng nhập nội dung";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Data:", formData);
      message.success("📨 Đã gửi thành công! (Xem console)");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      message.success({
        content: "✅ Đã sao chép vào clipboard!",
        duration: 2,
        style: { marginTop: "60px" },
      });
    } catch (err) {
      message.error("❌ Sao chép thất bại!");
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "dathiichan141@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Số điện thoại",
      value: "0387731823",
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      label: "Facebook",
      value: "https://www.facebook.com/ntd.1422/",
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "https://github.com/dgeniust",
    },
  ];

  return (
    <section className="min-h-screen bg-blue-200 p-6 flex flex-col items-center justify-center space-y-6">
      {/* Contact Info Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactInfo.map((info, idx) => (
          <div
            key={idx}
            onClick={() => handleCopy(info.value)}
            className="bg-white border-4 border-black p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
            hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
            transition-all cursor-pointer group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-200 border-2 border-black rounded-full group-hover:scale-110 transition-transform">
                {info.icon}
              </div>
              <div>
                <p className="text-sm font-bold uppercase">{info.label}</p>
                <p className="text-gray-700 text-sm font-medium break-words">
                  {info.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Form */}
      <div className="max-w-4xl w-full space-y-10">
        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase">Liên Hệ</h2>
        </div>

        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              {
                name: "name",
                label: "Tên",
                required: true,
                type: "text",
                placeholder: "Nhập tên của bạn",
              },
              {
                name: "email",
                label: "Email",
                required: true,
                type: "email",
                placeholder: "example@email.com",
              },
              {
                name: "subject",
                label: "Tiêu đề",
                required: false,
                type: "text",
                placeholder: "Tiêu đề tin nhắn",
              },
            ].map((f, i) => (
              <div key={i}>
                <label className="block text-sm font-bold uppercase mb-2">
                  {f.label}{" "}
                  {f.required && <span className="text-red-600">*</span>}
                </label>
                <input
                  type={f.type}
                  name={f.name}
                  value={formData[f.name]}
                  onChange={handleChange}
                  placeholder={f.placeholder}
                  className={`w-full px-4 py-3 border-4 ${
                    errors[f.name] ? "border-red-600" : "border-black"
                  } font-medium focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all`}
                />
                {errors[f.name] && (
                  <p className="text-red-600 text-sm font-bold mt-2">
                    {errors[f.name]}
                  </p>
                )}
              </div>
            ))}

            {/* Message */}
            <div>
              <label className="block text-sm font-bold uppercase mb-2">
                Nội dung <span className="text-red-600">*</span>
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder="Viết tin nhắn của bạn..."
                className={`w-full px-4 py-3 border-4 ${
                  errors.message ? "border-red-600" : "border-black"
                } font-medium focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all resize-none`}
              />
              {errors.message && (
                <p className="text-red-600 text-sm font-bold mt-2">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <div className="pt-2 ">
              <button
                type="submit"
                className="cursor-pointer w-full bg-blue-200 hover:bg-blue-400 text-black font-black text-lg px-8 py-4 border-4 border-black uppercase tracking-wide shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]
                hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:-translate-x-1 hover:-translate-y-1
                active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[4px] active:translate-y-[4px]"
              >
                Gửi Tin Nhắn →
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
