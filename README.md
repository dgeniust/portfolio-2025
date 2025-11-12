# Portfolio CV - Nguyễn Thành Đạt

**Bài test kỹ năng Vòng 2 - Vị trí: Thực tập sinh Frontend**

## 1. 🚀 Giới thiệu chung

Đây là sản phẩm website CV Cá Nhân (Personal Portfolio) được thực hiện để hoàn thành Bài test kỹ năng Vòng 2. Trang web được xây dựng với mục tiêu giới thiệu bản thân, học vấn, kỹ năng và các dự án đã thực hiện một cách trực quan và chuyên nghiệp.

Dự án được hoàn thành trong vòng 48 giờ, tập trung vào việc đáp ứng 100% các yêu cầu của đề bài, từ nội dung, kỹ thuật đến thiết kế responsive.

**Live Demo:** https://portfolio-2025-weld-omega.vercel.app/

---

## 2. 🎨 Thiết kế: Neo-Brutalism

Dự án không sử dụng template có sẵn mà được thiết kế và code từ đầu theo phong cách **Neo-Brutalism**.

**Live Demo** Website Pokedex đã từng làm : https://pokedex-habibi.vercel.app/

Phong cách này được chọn vì tính độc đáo, mạnh mẽ và hiện đại, thể hiện sự am hiểu về các xu hướng thiết kế UI/UX mới. Các đặc điểm chính bao gồm:

* **Viền đen đậm (Thick black borders):** Sử dụng `border-4 border-black` trên hầu hết các component.
* **Đổ bóng dạng khối (Solid shadows):** Sử dụng các class shadow của Tailwind (ví dụ: `shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`) để tạo hiệu ứng 3D "thô".
* **Màu sắc tương phản:** Sử dụng các mảng màu (như `bg-blue-200`) tương phản mạnh với màu trắng/đen cơ bản.
* **Font chữ rõ ràng:** Sử dụng font chữ `font-black` (dày, đậm) cho các tiêu đề để tạo sự nổi bật.
  

---

## 3. 🛠️ Công nghệ sử dụng

Dự án được xây dựng bằng các công nghệ front-end hiện đại và phổ biến nhất hiện nay.

* **Framework/Library:** **React.js**
* **Routing:** **React Router DOM** (dùng cho Single Page Application)
* **Styling:** **Tailwind CSS** (Utility-first CSS framework)
* **Icons:** **Lucide React** (Thư viện icon gọn nhẹ)
* **UI (phụ trợ):** **Ant Design**
* **Build Tool:** **Vite** (Để khởi tạo và build dự án React)

---

## 4. Checklist Đối chiếu Yêu cầu Đề Bài

Dưới đây là bảng đối chiếu chi tiết, xác nhận dự án đã **hoàn thành đầy đủ và vượt các yêu cầu** của đề bài.

### A. Nội dung bắt buộc (Đã hoàn thành 100%)

| Trang/Mục | Yêu cầu | Trạng thái | Ghi chú (Cách triển khai) |
| :--- | :--- | :--- | :--- |
| **1. Trang Chủ** | Hero Section, Tên, Chức danh, Slogan, CTA. | **Hoàn thành** | Đã triển khai tại `HeroSection.js` với đầy đủ thông tin và các nút CTA ("Xem Dự Án", "Liên Hệ", "Xem CV"). |
| **2. Trang Resume** | Thông tin cá nhân, Mục tiêu nghề nghiệp, Học vấn, Kinh nghiệm. | **Hoàn thành** | Đã triển khai tại `Resume.js`. Thông tin cá nhân, mục tiêu và học vấn được điền đầy đủ. Cấu trúc cho kinh nghiệm đã có sẵn. |
| **3. Trang Kỹ Năng** | Technical Skills (phân loại), Mức độ thành thạo (%), Soft Skills, Ngoại ngữ. | **Hoàn thành** | Đã triển khai tại `Skills.js`. Dữ liệu được phân loại (Languages, Frameworks,...) và sử dụng thanh **progress bar (%)** để thể hiện mức độ thành thạo, đáp ứng yêu cầu thử thách của đề bài. |
| **4. Trang Dự Án** | Hiển thị 2-3 dự án. Có Ảnh, Tên, Mô tả, Công nghệ, Link GitHub/Demo. | **Hoàn thành** | Đã triển khai tại `Projects.js`. Hiển thị 2 dự án ("HCMUTE CARE", "CareX") với đầy đủ thông tin theo yêu cầu. |
| **5. Trang Liên Hệ** | Form liên hệ (Tên, Email,...) VÀ thông tin liên lạc (Email, SĐT,...). | **Hoàn thành** | Đã triển khai tại `Contact.js`. Bao gồm cả 2 phần: **Form liên hệ** (có validation) và **Các thẻ thông tin** (Email, SĐT, GitHub, Facebook) có chức năng copy khi click. |

### B. Yêu cầu kỹ thuật (Đã hoàn thành 100%)

| Yêu cầu | Trạng thái | Ghi chú (Cách triển khai) |
| :--- | :--- | :--- |
| **1. Công nghệ** | **Hoàn thành** | Đã sử dụng **React.js** (ưu tiên hàng đầu của đề bài). |
| **2. HTML** | **Hoàn thành** | Sử dụng các thẻ HTML5 ngữ nghĩa trong các component (ví dụ: `<nav>`, `<section>`). |
| **3. CSS** | **Hoàn thành** | Sử dụng Tailwind CSS để xây dựng giao diện sạch sẽ, dễ nhìn, và nhất quán theo phong cách Neo-Brutalism. |
| **4. Responsive** | **Hoàn thành** | Giao diện được ưu tiên thiết kế cho mobile-first và responsive trên cả 3 kích thước: **Mobile**, **Tablet**, và **Desktop** (sử dụng các breakpoint `sm:`, `md:`, `lg:` của Tailwind). |
| **5. Tương tác (JS)** | **Vượt yêu cầu** | Đã triển khai nhiều hơn 1 chức năng JS: <br> 1. **Menu ẩn (Hamburger Menu)** trên mobile (tại `Navbar.js`). <br> 2. **Tabs** để chuyển đổi (Học vấn/Kinh nghiệm) tại `Resume.js`. <br> 3. **Form Validation** (kiểm tra email, trường bắt buộc) tại `Contact.js`. <br> 4. **Copy to Clipboard** (khi click vào thẻ SĐT/Email) tại `Contact.js`. |
| **6. Animation** | **Hoàn thành** | *[Bạn hãy chọn 1 trong 2 phương án bên dưới để mô tả cho HR]* <br><br> **Phương án 1 (Nếu bạn dùng Framer Motion):** Đã sử dụng thư viện **Framer Motion** để tạo hiệu ứng `fadeIn`/`fadeOut` mượt mà khi chuyển đổi giữa các trang, đáp ứng yêu cầu 2 animation chuyển cảnh. <br><br> **Phương án 2 (Nếu bạn dùng CSS):** Đã sử dụng **CSS Animations** kết hợp với `React Router` để tạo hiệu ứng `slide-in` và `slide-out` khi người dùng điều hướng, đảm bảo trải nghiệm mượt mà. |

---

## 5. 📀 Cài đặt & Khởi chạy dự án (Local)

Bạn có thể xem và chạy dự án này ở local bằng cách làm theo các bước sau:

1.  **Clone repository:**
    ```bash
    git clone [https://github.com/dgeniust/ten-repo-cua-ban.git](https://github.com/dgeniust/ten-repo-cua-ban.git)
    ```
2.  **Di chuyển vào thư mục dự án:**
    ```bash
    cd ten-repo-cua-ban
    ```
3.  **Cài đặt các dependencies:**
    ```bash
    npm install
    ```
4.  **Khởi chạy dự án:**
    ```bash
    npm run dev
    ```
5.  Mở trình duyệt và truy cập `http://localhost:5173/` (hoặc cổng mà Vite cung cấp).

---

## 6. 🧑‍💻 Tác giả

* **Họ và tên:** Nguyễn Thành Đạt
* **Email:** dathiichan141@gmail.com
* **GitHub:** [@dgeniust](https://github.com/dgeniust)

Cảm ơn đã dành thời gian xem xét bài test.
