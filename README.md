# 🚀 Mohseen Attar | Portfolio

A responsive personal portfolio built with React, Vite and Tailwind CSS, with a black and gold glass theme.

## ✨ Features

- Sections: Hero, About, Education, Experience, Projects, Skills, Contact and Footer
- Navbar that highlights the section you are viewing
- Project explorer, filterable skill tiles and certificate viewer
- Animated background (grid, cursor spotlight, particles)
- Contact form powered by EmailJS, with validation and spam protection
- Fully responsive, keyboard accessible, respects reduced motion
- All content lives in `src/data`, so it is easy to update

## 🧰 Tech Stack

React 18, Vite 5, Tailwind CSS 3, react-icons, EmailJS, Vercel

## ⚡ Getting Started

Requires Node.js 18 or newer.

```bash
npm install
npm run dev
```

The site runs at `http://localhost:5173`.

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Preview the production build |

## 🛠️ Setup

1. Add your photo as `public/profile.jpg`.
2. Update your details in `src/data/profile.js`.
3. Copy `.env.example` to `.env` and fill in your EmailJS values:

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

You can find them in the [EmailJS dashboard](https://dashboard.emailjs.com). Use the public key only, never the private key.

## 🗂️ Project Structure

```text
public/        Static files (favicon, photo, certificates)
src/
  components/  Page sections and UI pieces
  data/        Profile, projects, skills and other content
  hooks/       Custom hooks
  utils/       EmailJS, validation and helpers
```

## 🌐 Deployment

Deploy on [Vercel](https://vercel.com). Add the three `VITE_EMAILJS_*` variables under **Project Settings → Environment Variables**, then redeploy.

---

<p align="center">Developed by <b>Mohseen Attar</b> 💛</p>