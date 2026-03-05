<a name="readme-top"></a>

<br />
<div align="center">
  <a href="https://code-archive.pages.dev">
    <img src="https://via.placeholder.com/150/1e293b/38bdf8?text=CA" alt="Logo" width="80" height="80">
  </a>

  <h1 align="center">📦 CODE ARCHIVE</h1>

  <p align="center">
    <strong>Thư viện lịch sử code cá nhân</strong>
    <br />
    <em>"Mỗi dòng code là một ký ức"</em>
    <br />
    <br />
    <a href="https://code-archive.pages.dev">🚀 Xem Demo</a>
    ·
    <a href="https://github.com/yourusername/code-archive/issues">🐛 Báo lỗi</a>
    ·
    <a href="https://github.com/yourusername/code-archive/issues">✨ Đề xuất tính năng</a>
  </p>
  
  <div align="center">
  
  ![GitHub stars](https://img.shields.io/github/stars/yourusername/code-archive?style=for-the-badge&color=38bdf8)
  ![GitHub forks](https://img.shields.io/github/forks/yourusername/code-archive?style=for-the-badge&color=38bdf8)
  ![GitHub license](https://img.shields.io/github/license/yourusername/code-archive?style=for-the-badge&color=38bdf8)
  ![GitHub issues](https://img.shields.io/github/issues/yourusername/code-archive?style=for-the-badge&color=38bdf8)
  
  </div>
</div>

<br />
<br />

---

## 📋 Mục lục

- [Giới thiệu](#-giới-thiệu)
- [Tính năng](#-tính-năng)
- [Công nghệ sử dụng](#-công-nghệ-sử-dụng)
- [Cài đặt & Sử dụng](#-cài-đặt--sử-dụng)
- [Cấu trúc dữ liệu](#-cấu-trúc-dữ-liệu)
- [Cách thêm Project mới](#-cách-thêm-project-mới)
- [Giao diện](#-giao-diện)
- [Cấu trúc thư mục](#-cấu-trúc-thư-mục)
- [Tùy chỉnh](#-tùy-chỉnh)
- [Triển khai](#-triển-khai)
- [Đóng góp](#-đóng-góp)
- [Giấy phép](#-giấy-phép)
- [Liên hệ](#-liên-hệ)

---

## 🎯 Giới thiệu

**CODE ARCHIVE** là một thư viện cá nhân, nơi bạn có thể lưu trữ và nhìn lại toàn bộ những dự án, tool, script đã tạo ra trong suốt hành trình lập trình của mình.

> Giống như một cuốn nhật ký lập trình, mỗi dự án được lưu lại cùng với thời gian, trạng thái và câu chuyện đằng sau nó - từ những tool nhỏ viết vội, website từng xây dựng, cho đến những dự án dang dở hay đã lỗi thời.

### 🎨 **Tại sao nên dùng CODE ARCHIVE?**

- ✅ **Lưu giữ ký ức code**: Mỗi dự án đều xứng đáng được ghi nhớ
- ✅ **Dễ dàng quản lý**: Chỉ cần sửa biến JavaScript, không cần database
- ✅ **Không cần server**: Chạy trực tiếp trên trình duyệt
- ✅ **Giao diện đẹp**: Dark mode, hiệu ứng mượt mà
- ✅ **Hoàn toàn miễn phí**: Deploy lên Cloudflare Pages miễn phí

<p align="right">(<a href="#readme-top">⬆️ Lên đầu trang</a>)</p>

---

## ✨ Tính năng

### 📊 **Dashboard**
- Tổng quan số lượng project
- Thống kê theo trạng thái (Working, Broken, In Progress, Deprecated)
- Hiển thị project mới nhất

### 📚 **Danh sách Project**
- Hiển thị dạng card với đầy đủ thông tin
- Mỗi card có: Tên, mô tả, ngôn ngữ, trạng thái, ngày tạo
- Nút xem chi tiết và link GitHub/Download

### 🔍 **Tìm kiếm & Lọc**
- Tìm kiếm theo tên, mô tả, loại project
- Lọc theo trạng thái
- Lọc theo ngôn ngữ lập trình
- Lọc theo năm tạo

### 📄 **Chi tiết Project**
- Hiển thị đầy đủ thông tin project
- Ảnh preview
- Ghi chú của developer
- Nút xem source trên GitHub
- Nút download project

### 🎨 **Giao diện**
- Dark mode mặc định
- Phong cách GitHub/Developer Dashboard
- Responsive trên mọi thiết bị
- Hiệu ứng hover và animation mượt mà
- Màu sắc trạng thái riêng biệt:
  - 🟢 **Working**: Màu xanh lá
  - 🔴 **Broken**: Màu đỏ
  - 🟡 **In Progress**: Màu vàng
  - ⚪ **Deprecated**: Màu xám

<p align="right">(<a href="#readme-top">⬆️ Lên đầu trang</a>)</p>

---

## 🛠️ Công nghệ sử dụng

### **Core Technologies**
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

### **Icons & Fonts**
![Font Awesome](https://img.shields.io/badge/Font_Awesome-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white)

### **Deployment**
![Cloudflare Pages](https://img.shields.io/badge/Cloudflare_Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)

### **Đặc điểm nổi bật**
- ✅ **Zero dependencies** - Không dùng framework
- ✅ **No backend** - Chạy hoàn toàn trên client
- ✅ **No database** - Dữ liệu lưu trong biến JavaScript
- ✅ **100% Vanilla JS** - Thuần JavaScript

<p align="right">(<a href="#readme-top">⬆️ Lên đầu trang</a>)</p>

---

## 📦 Cài đặt & Sử dụng

### **Yêu cầu**
- Trình duyệt web hiện đại (Chrome, Firefox, Edge, Safari)
- Git (để clone repository)

### **Cài đặt nhanh**

1. **Clone repository**
   ```bash
   git clone https://github.com/yourusername/code-archive.git
   cd code-archive
   Mở file index.html

Cách 1: Double-click vào file index.html

Cách 2: Chạy local server (khuyến nghị)

bash
# Nếu có Python
python -m http.server 8000

# Nếu có Node.js
npx live-server
Tùy chỉnh dữ liệu

Mở file script.js

Tìm biến const projects = []

Thêm/sửa project theo ý muốn

<p align="right">(<a href="#readme-top">⬆️ Lên đầu trang</a>)</p>
📁 Cấu trúc dữ liệu
Biến projects
javascript
const projects = [
  {
    name: "Tên Project",
    description: "Mô tả chi tiết về project",
    type: "Website / Tool / Script / App",
    language: "HTML / JavaScript / Python / CSS",
    created: "YYYY-MM-DD",
    status: "Working / Broken / In Progress / Deprecated",
    github: "https://github.com/username/repo",
    download: "https://example.com/download.zip",
    note: "Ghi chú của developer",
    screenshot: "img/project.png"
  }
]
Giải thích các trường
Trường	Kiểu dữ liệu	Mô tả	Bắt buộc
name	string	Tên project	✅
description	string	Mô tả ngắn	✅
type	string	Loại project	✅
language	string	Ngôn ngữ lập trình	✅
created	string (YYYY-MM-DD)	Ngày tạo	✅
status	string	Trạng thái	✅
github	string (URL)	Link GitHub	❌
download	string (URL)	Link download	❌
note	string	Ghi chú	❌
screenshot	string (URL)	Ảnh preview	❌
<p align="right">(<a href="#readme-top">⬆️ Lên đầu trang</a>)</p>
➕ Cách thêm Project mới
Ví dụ thêm project
javascript
{
  name: "QR Code Generator",
  description: "Công cụ tạo mã QR nhanh chóng, hỗ trợ nhiều định dạng",
  type: "Tool",
  language: "JavaScript",
  created: "2026-03-05",
  status: "Working",
  github: "https://github.com/username/qr-generator",
  download: "https://example.com/download/qr-tool.zip",
  note: "Sử dụng thư viện qrcode.js, có thể tải xuống dưới dạng PNG",
  screenshot: "img/qr-generator.png"
}
Các bước thêm project
Mở file script.js

Tìm mảng const projects = [ ... ]

Thêm object mới vào cuối mảng

Lưu file và refresh trình duyệt

💡 Mẹo: Copy một object có sẵn và chỉnh sửa để tránh sai cú pháp

<p align="right">(<a href="#readme-top">⬆️ Lên đầu trang</a>)</p>
🎨 Giao diện
Màu sắc chủ đạo
css
:root {
  --bg-primary: #0f172a;    /* Nền chính */
  --bg-secondary: #1e293b;   /* Card, sidebar */
  --text-primary: #e2e8f0;   /* Chữ chính */
  --text-secondary: #94a3b8; /* Chữ phụ */
  --highlight: #38bdf8;      /* Màu nhấn */
  --success: #10b981;        /* Working */
  --danger: #ef4444;         /* Broken */
  --warning: #f59e0b;        /* In Progress */
  --gray: #6b7280;           /* Deprecated */
}
Layout
text
┌─────────────────────────────────────┐
│  Sidebar    │    Main Content        │
│             │                        │
│  • Logo     │  • Header              │
│  • Nav      │  • Search/Filter       │
│  • Stats    │  • Content Area        │
│  • Footer   │    - Dashboard         │
│             │    - Project Cards     │
│             │    - Project Detail    │
└─────────────────────────────────────┘
Responsive Design
Desktop: Sidebar fixed bên trái, content bên phải

Mobile: Sidebar ẩn, hiện khi click menu button

Grid: Tự động điều chỉnh số cột theo kích thước màn hình

<p align="right">(<a href="#readme-top">⬆️ Lên đầu trang</a>)</p>
📂 Cấu trúc thư mục
text
code-archive/
│
├── 📄 index.html          # File HTML chính
├── 📄 style.css           # Stylesheet
├── 📄 script.js           # JavaScript + dữ liệu projects
│
├── 📁 img/                 # Thư mục chứa ảnh
│   ├── qr-generator.png
│   ├── portfolio.png
│   └── ...
│
├── 📄 README.md           # File hướng dẫn
└── 📄 LICENSE             # Giấy phép (MIT)
Chi tiết các file
File	Chức năng
index.html	Cấu trúc HTML, sidebar, header, filter panel
style.css	Toàn bộ CSS, responsive, animations
script.js	Logic JavaScript, dữ liệu projects, render functions
img/	Lưu ảnh preview cho các project
<p align="right">(<a href="#readme-top">⬆️ Lên đầu trang</a>)</p>
⚙️ Tùy chỉnh
Thay đổi màu sắc
css
/* Trong file style.css */
:root {
  --bg-primary: #0f172a;    /* Đổi màu nền */
  --highlight: #38bdf8;     /* Đổi màu nhấn */
  /* ... */
}
Thêm loại status mới
css
/* Thêm class mới trong style.css */
.status-new-type {
  background-color: rgba(your-color, 0.2);
  color: your-color;
}
Thay đổi số lượng project hiển thị trong Dashboard
javascript
// Trong file script.js - hàm renderDashboard()
const latestProjects = [...filteredProjects]
  .sort((a, b) => new Date(b.created) - new Date(a.created))
  .slice(0, 6); // Đổi số 6 thành số lượng muốn hiển thị
<p align="right">(<a href="#readme-top">⬆️ Lên đầu trang</a>)</p>
🚀 Triển khai (Deploy)
Triển khai lên Cloudflare Pages (Miễn phí)
Tạo repository trên GitHub

bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/code-archive.git
git push -u origin main
Đăng nhập Cloudflare Dashboard

Vào Cloudflare Pages

Click "Create a project" → "Connect to Git"

Kết nối GitHub

Chọn repository vừa tạo

Cấu hình build:

Build command: (để trống)

Build output directory: (để trống)

Deploy

Click "Save and Deploy"

Website sẽ có domain: https://your-project.pages.dev

Triển khai lên các nền tảng khác
Nền tảng	Cách làm
Netlify	Kéo thả folder vào Netlify Drop
Vercel	Import từ GitHub, không cần cấu hình
GitHub Pages	Push lên nhánh gh-pages
Local	Chạy trực tiếp từ file index.html
<p align="right">(<a href="#readme-top">⬆️ Lên đầu trang</a>)</p>
🤝 Đóng góp
Mọi đóng góp đều được chào đón!

Cách đóng góp
Fork project

Tạo branch mới (git checkout -b feature/AmazingFeature)

Commit changes (git commit -m 'Add some AmazingFeature')

Push lên branch (git push origin feature/AmazingFeature)

Mở Pull Request

Các tính năng có thể phát triển thêm
Import/Export dữ liệu (JSON)

Thêm biểu đồ thống kê

Dark/Light mode toggle

Sort projects theo nhiều tiêu chí

Tag system cho projects

Timeline view

<p align="right">(<a href="#readme-top">⬆️ Lên đầu trang</a>)</p>
📄 Giấy phép
Dự án này được phân phối dưới giấy phép MIT. Xem file LICENSE để biết thêm chi tiết.

text
MIT License

Copyright (c) 2026 Code Archive

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...
<p align="right">(<a href="#readme-top">⬆️ Lên đầu trang</a>)</p>
📞 Liên hệ
Code Archive - @code-archive

Email: your.email@example.com

Project Link: https://github.com/yourusername/code-archive

Live Demo: https://code-archive.pages.dev

🌟 Credits
Icons bởi Font Awesome

Ý tưởng từ những developer cần lưu giữ hành trình code

Cảm hứng từ GitHub và các developer dashboard

<div align="center"> <br /> <strong>⭐ Đừng quên star repo nếu bạn thấy hữu ích! ⭐</strong> <br /> <br />
https://capsule-render.vercel.app/api?type=waving&color=gradient&height=100&section=footer&text=M%E1%BB%97i%2520d%C3%B2ng%2520code%2520l%C3%A0%2520m%E1%BB%99t%2520k%C3%BD%2520%E1%BB%A9c&fontSize=24&fontColor=e2e8f0

<br /> <sub>Made with ❤️ and ☕ by a developer, for developers</sub> </div> ```
📸 Ảnh minh họa (Gợi ý thêm vào README)
Bạn có thể thêm các ảnh chụp màn hình vào phần giao diện:

markdown
### **Screenshot**

#### Dashboard
![Dashboard](https://via.placeholder.com/800x400/1e293b/38bdf8?text=Dashboard+Preview)

#### Projects List
![Projects List](https://via.placeholder.com/800x400/1e293b/38bdf8?text=Projects+List)

#### Project Detail
![Project Detail](https://via.placeholder.com/800x400/1e293b/38bdf8?text=Project+Detail)
