# 🌌 Atul Rao — MERN Stack Developer Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/MERN-Stack--Developer-00ffff?style=for-the-badge&logo=mongodb&logoColor=white" alt="MERN Stack Badge"/>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Badge"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js Badge"/>
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js Badge"/>
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB Badge"/>
</p>

A premium, recruiter-centric, and highly interactive **Full-Stack Developer Portfolio** designed and developed by **Atul Rao**. This application serves as a showcase of my academic background (Bachelor of Computer Applications - BCA), hands-on development expertise, and catalog of full-stack web products. 

Featuring a stunning, responsive **Glassmorphic UI** built entirely from scratch with **Vanilla CSS** and powered by a secure **MERN Backend** that captures recruiter inquiries directly into a MongoDB database.

---

## 🔗 Quick Navigation & Live Links
* 🧑‍💻 **Developer Name:** Atul Rao (BCA Student, University of Rajasthan)
* 📬 **Direct Email:** [02atulrao@gmail.com](mailto:02atulrao@gmail.com)
* 💼 **LinkedIn Profile:** [Atul Rao on LinkedIn](https://www.linkedin.com/in/atul-rao-44b2212b8/)
---
## 🌟 Key Application Features

### 🎨 Frontend Experience
* **Glassmorphic UI Design:** High-fidelity visuals utilizing blur filters, subtle gradients, Tailwind-style layouts, and custom-tailored HSL neon-glow elements.
* **Responsive Layout:** 100% responsive across mobile, tablet, and widescreen monitors with custom CSS media queries.
* **Fluid Typing Interactions:** Elegant typewriter transitions via `react-type-animation` showcasing core specialties on the landing page.
* **Interactive Navigation:** Smooth SPA client-side routing implemented using `react-router-dom` with active tab styling and section scroll anchors.
* **Animated Tech Stack Grid:** Custom icons highlighting languages, framework packages, and deployment ecosystems with interactive hover scaling.

### ⚙️ Backend & Database Security
* **RESTful API Architecture:** Express-powered API endpoint handling form submissions.
* **MongoDB Data Persistence:** Direct Mongoose integration with strict validation schemas.
* **Secure Database Configuration:** Sanitized input processing and environment-driven port/URI handling using `dotenv` and `cors`.
* **Deployment Ready:** Configured to instantly bridge local endpoints with environment variables for seamless deployment on Render, Netlify, and Vercel.

---

## 📸 Desktop Interface Showcase

Below are actual, high-resolution screenshots highlighting the visual style and features of the portfolio website.

| Page / Section | Description & Visual Keynotes | Live Interface Preview |
| --- | --- | --- |
| **Hero Landing** | *Featuring fluid typewriter animations ("Full-Stack Developer (MERN)", "Problem Solver"), a customizable avatar card, and primary CTA buttons.* | ![Hero Landing](screenshots/hero.png) |
| **About Section (Home)** | *A glassmorphic summary giving visitors a quick, elegant glance at my background and development passion.* | ![Home About](screenshots/home_about.png) |
| **Projects Grid (Home)** | *Direct-link portfolio cards showcasing recent web application creations with GitHub source links.* | ![Home Projects](screenshots/home_projects.png) |
| **Dedicated About Page** | *A deep dive showing my BCA education timeline (2023–2026), downloadable PDF resume, and an organized, responsive tech stack grid.* | ![About Page](screenshots/about_page.png) |
| **Dedicated Lab Page** | *A catalog detailing my key projects with descriptive previews, tech summaries, and live deployment links.* | ![Lab Page](screenshots/lab_page.png) |

---

## 🛠️ Complete Tech Stack Overview

### 💻 Frontend
<p align="left">
  <img src="https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/React--Router-CA4245?style=flat-square&logo=react-router&logoColor=white" alt="React Router"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript"/>
</p>

### ⚙️ Backend & Databases
<p align="left">
  <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white" alt="NodeJS"/>
  <img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white" alt="ExpressJS"/>
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white" alt="MongoDB"/>
  <img src="https://img.shields.io/badge/Mongoose-880000?style=flat-square&logo=mongoose&logoColor=white" alt="Mongoose"/>

</p>

### ☁️ Infrastructure & Utilities
<p align="left">
  <img src="https://img.shields.io/badge/Render-46E3B7?style=flat-square&logo=render&logoColor=white" alt="Render"/>
  <img src="https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel"/>
  <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white" alt="Git"/>
  <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub"/>
</p>

---

## 📂 Project Architecture

```txt
Portfolio/
├── backend/                  # MERN API server
│   ├── models/
│   │   └── Contact.js        # Mongoose schema for contact messages
│   ├── routes/
│   │   └── contactRoutes.js  # API route endpoints
│   ├── .env                  # Port & Database Secrets (excluded from git)
│   ├── server.js             # Server startup file
│   └── package.json
│
├── frontend/                 # Client React SPA
│   ├── public/               # Static assets & projects
│   ├── src/
│   │   ├── assets/           # Portfolio media files (Resume, Images)
│   │   ├── components/       # Reusable layout sections (Hero, About, Lab, Contact)
│   │   ├── pages/            # Multi-page layouts (HomePage, AboutPage, LabPage)
│   │   ├── App.jsx           # Main routing assembly
│   │   ├── index.css         # Global design system & theme variables
│   │   └── main.jsx
│   ├── vite.config.js
│   └── package.json
│
├── screenshots/              # High-definition interface screenshots
└── package.json              # Shared project utilities
```


## 🚀 Step-by-Step Local Setup

Follow these simple instructions to download, configure, and launch this MERN portfolio website locally.

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/AtulRao22/Portfolio.git
cd Portfolio
```

### 2️⃣ Configure Backend Environment
Navigate into the `backend` folder and create a `.env` file to securely define your credentials:
```bash
cd backend
npm install
```
Create a `.env` file with the following variables:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```
Start the backend development server:
```bash
node server.js
# Or if you have nodemon globally:
# npm run dev / nodemon server.js
```

### 3️⃣ Configure Frontend Environment
In a new terminal window, navigate to the `frontend` folder and launch the Vite development server:
```bash
cd frontend
npm install
npm run dev
```
By default, the Vite application starts on `http://localhost:5173`. Make sure the frontend utilizes the local backend:
---

## 🌟 Spotlight Projects Catalog

The portfolio showcases key web products developed by Atul Rao:

1. **🛍️ Shiv Shakti Suits (MERN E-Commerce Website):**
   * A high-performance commercial storefront built for fashion retail.
   * *Key features:* Private Admin portal with Inventory controls, payment integration (Razorpay), secure user sessions, and clean product variant catalog management.
   * *Live:* [shivshaktisuits.shop](https://www.shivshaktisuits.shop/)

2. **🏠 HomyGo (Property Listing Platform):**
   * A full-stack real estate listing and property rental management system.
   * *Key features:* Full CRUD implementations for landlords/agents, dynamic reviews integration, session authentication, and MongoDB storage.
   * *Live:* [HomyGo](https://wanderlust-ynlv.onrender.com)

3. **🎮 BrainTiles (Simon Memory Game):**
   * A retro color-pattern matching cognitive browser game built using native HTML5, JavaScript, and elegant CSS transitions.
   * *Live:* [BrainTiles](https://braintiles.netlify.app)

---

<p align="center">
  <b>Developed with ❤️ by <a href="https://github.com/AtulRao22">Atul Rao</a> © 2026</b>
</p>
