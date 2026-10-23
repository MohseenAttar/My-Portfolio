<div align="center">

# Mohseen Attar | Portfolio

**A fast, accessible personal portfolio built with React, Vite and Tailwind CSS.**

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![EmailJS](https://img.shields.io/badge/Contact_form-EmailJS-D4AF37?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Deploy-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

</div>

---

## ✨ Features

- 🧭 **Eight sections:** Hero, About, Education, Experience, Projects, Skills, Contact and Footer, with a glass navbar that highlights the section you are in.
- ⌨️ **Typewriter name** in the Hero, with a glowing gold underline.
- 🗂️ **Project explorer:** pick a project from a compact list and see its details in one panel. It stays the same height however many projects you add, and works with the arrow keys.
- 🛠️ **Skills:** filterable brand-icon tiles with an endless scrolling row, plus an achievements and activities area where each card opens its certificate in a viewer.
- 🌌 **Living background:** a blueprint grid, a cursor spotlight, and a soft field of gold particles. All three are drawn with plain CSS and canvas, with no animation library.
- 🪟 **Glass UI** with a black and gold theme, including a matching gold scrollbar.
- ✉️ **Working contact form** through EmailJS, with validation, a hidden spam trap and a send cooldown.
- ♿ **Accessible by design:** semantic landmarks, visible focus states, labelled controls, keyboard support, and `prefers-reduced-motion` respected.
- 🧩 **Data-driven content:** your profile, projects, skills and activities live in `src/data`, not inside the components.

## 🧰 Tech stack

| Area | Tools |
| --- | --- |
| UI | React 18 |
| Build | Vite 5 |
| Styling | Tailwind CSS 3 |
| Icons | react-icons (brand logos) and hand-written SVG icons |
| Contact form | EmailJS REST API, called with plain `fetch` |
| Hosting | Vercel |

## 🗂️ Project structure

```text
portfolio/
├── public/
│   ├── certificates/
│   │   ├── call-of-codes-2023.jpg
│   │   ├── hackera-2024.jpg
│   │   └── techverse-2k25.jpg
│   ├── favicon.svg
│   └── profile.jpg          <- add your photo here
├── src/
│   ├── components/
│   │   ├── contact/
│   │   │   ├── ContactForm.jsx
│   │   │   └── ContactInfo.jsx
│   │   ├── projects/
│   │   │   ├── ProjectDetail.jsx
│   │   │   ├── ProjectExplorer.jsx
│   │   │   └── ProjectLinks.jsx
│   │   ├── skills/
│   │   │   ├── Activities.jsx
│   │   │   ├── CertificateModal.jsx
│   │   │   ├── SkillFilters.jsx
│   │   │   ├── SkillGrid.jsx
│   │   │   ├── SkillMarquee.jsx
│   │   │   └── SkillTile.jsx
│   │   ├── About.jsx
│   │   ├── BackgroundGrid.jsx
│   │   ├── Contact.jsx
│   │   ├── CursorSpotlight.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── icons.jsx
│   │   ├── Navbar.jsx
│   │   ├── ParticleField.jsx
│   │   ├── Projects.jsx
│   │   ├── SectionHeading.jsx
│   │   ├── Skills.jsx
│   │   └── TechChip.jsx
│   ├── data/
│   │   ├── activities.js
│   │   ├── education.js
│   │   ├── experience.js
│   │   ├── navigation.js
│   │   ├── profile.js
│   │   ├── projects.js
│   │   └── skills.js
│   ├── hooks/
│   │   └── useInView.js
│   ├── utils/
│   │   ├── emailjs.js
│   │   ├── format.js
│   │   └── validation.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vercel.json
└── vite.config.js
```

## 🚀 Getting started

**Requirements:** Node.js 18 or newer.

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server (http://localhost:5173)
npm run dev
```

Before it looks complete, do these two things:

1. 📸 **Add your photo** as `public/profile.jpg`. It is cropped to a circle, so keep your face centred in the upper two-thirds of the image.
2. 🔐 **Add your EmailJS credentials** to `.env`. See the next two sections.

📄 **Updating your resume:** the Resume buttons use the Google Drive link in `src/data/profile.js`. To publish a new resume without changing that link, open Drive, right-click the file, choose **Manage versions → Upload new version**. Uploading a brand-new file creates a new link instead, which you would then have to paste into `profile.js`. Keep the file shared as "Anyone with the link can view".

### 📜 Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the dev server on `localhost:5173` only |
| `npm run build` | Creates the production build in `dist/` |
| `npm run preview` | Serves the production build locally to check it |

## 🔐 Environment variables

The contact form reads three values from a file called `.env` in the project root. A ready-to-fill `.env` is included, and `.env.example` is the safe template that gets committed.

| Variable | What it is | Where to find it |
| --- | --- | --- |
| `VITE_EMAILJS_SERVICE_ID` | Which email account sends your messages | EmailJS dashboard → **Email Services** → your service → **Service ID** |
| `VITE_EMAILJS_TEMPLATE_ID` | The email layout you receive | EmailJS dashboard → **Email Templates** → your template → **Template ID** |
| `VITE_EMAILJS_PUBLIC_KEY` | Identifies your EmailJS account to the browser | EmailJS dashboard → **Account** → **General** → **Public Key** |

The dashboard labels above are as of writing. If EmailJS renames a menu, look for the same item under a similar name.

How to fill it in:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

- Paste each value straight after the `=`, with **no quotes and no spaces**.
- Restart `npm run dev` after saving the file.
- Use only the **public** key. Never put your EmailJS private key in this project.
- `.env` is git-ignored, so your credentials are never pushed to GitHub.

Until the values are set, the form shows a friendly "not set up yet" message with your email address instead of failing silently.

## ✉️ Setting up the contact form (EmailJS)

1. Create a free account at [emailjs.com](https://www.emailjs.com).
2. **Email Services** → add a service (for example Gmail) and copy its **Service ID**.
3. **Email Templates** → create a template and copy its **Template ID**. Use these variables, spelled exactly like this:

   | Variable | Filled with |
   | --- | --- |
   | `{{from_name}}` | The sender's name |
   | `{{from_email}}` | The sender's email address |
   | `{{message}}` | The message text |
   | `{{reply_to}}` | The sender's email, for the template's **Reply To** field |

   Example template:

   ```text
   Subject: New portfolio message from {{from_name}}

   Name:  {{from_name}}
   Email: {{from_email}}

   {{message}}
   ```

   In the template settings, set **To Email** to the inbox where you want to receive messages and **Reply To** to `{{reply_to}}`.
4. **Account → General** → copy your **Public Key**.
5. Put the three values in `.env` and restart the dev server.
6. Send yourself a test message from the Contact section.

## ✏️ Customising your content

| What to change | Where |
| --- | --- |
| Name, role, headline, email, phone, links, resume link | `src/data/profile.js` |
| Navigation links | `src/data/navigation.js` |
| About text and quick facts | `src/components/About.jsx` |
| Education entries | `src/data/education.js` |
| Experience, its tech stack and project cards | `src/data/experience.js` |
| Projects | `src/data/projects.js` |
| Skills and categories | `src/data/skills.js` |
| Achievements, activities and their certificates | `src/data/activities.js`, with the images in `public/certificates/` |
| Colours and fonts | `tailwind.config.js` and the font link in `index.html` |
| Particle count, speed and brightness | constants at the top of `src/components/ParticleField.jsx` |
| Photo and favicon | `public/profile.jpg` and `public/favicon.svg` |

**Adding a certificate:** save the image in `public/certificates/` (any size works, and no compression is needed), then add an entry to `src/data/activities.js`:

```js
{
  id: 'event-2026',
  kind: 'Hackathon',
  title: 'Event name',
  organizer: 'Organising institution',
  date: '1 Jan 2026',
  description: 'One or two sentences about what you did.',
  outcome: null, // or a short result such as 'Finalist'
  certificate: { src: '/certificates/event-2026.jpg', alt: 'Describe the certificate for screen readers' },
  Icon: TrophyIcon,
}
```

The card gets a **View certificate** button automatically. The image only loads when someone opens it.

**Adding a project:** add one object to the list in `src/data/projects.js` with an `id`, `title`, `category`, `description`, `highlights`, `stack`, and optional `liveUrl` and `githubUrl`. It appears in the project list automatically. A link button only shows when its URL is set.

## ☁️ Deploying to Vercel

1. **Push your code to GitHub.** `.env` is ignored, so your keys stay private. Commit `package-lock.json` too.

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com) → **Add New… → Project** and import your repository.
3. Vercel detects **Vite** automatically. The defaults are right: build command `npm run build`, output directory `dist`.
4. Before deploying, open **Environment Variables** and add the same three variables from your `.env`:
   `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID` and `VITE_EMAILJS_PUBLIC_KEY`.
5. Click **Deploy**.
6. **If you change an environment variable later, redeploy.** Vite bakes these values into the build, so the change only takes effect on a new build.
7. Open your live site and send a test message from the Contact section.

The included `vercel.json` adds basic security headers and long-term caching for the hashed files in `/assets`. You can leave it as it is.

## 🔒 Security notes

- 🔑 **Credentials stay out of Git.** `.env` and `.env.*` are ignored; only `.env.example` is tracked.
- 👁️ **The EmailJS public key is visible in any browser.** That is by design for browser forms. Once you know your live address, turn on the security options in your EmailJS account (for example restricting which domains can use your keys) to limit abuse.
- 🕸️ **Spam protection in the form:** a hidden trap field that bots fill in, and a 30-second wait between sends. Input is validated before anything is sent.
- 🛡️ **Headers:** `vercel.json` sets `X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy` and `Permissions-Policy`.
- 📦 **Dependencies:** at the time of writing, `npm audit` reports advisories in the build tooling (Vite and Tailwind's dependencies). These affect the local dev and build process, not the deployed site. Fixing them properly needs major-version upgrades of that tooling, so review them before upgrading.

## 🤝 Author

**Mohseen Attar** · Software Developer · Kolhapur, Maharashtra

[![GitHub](https://img.shields.io/badge/GitHub-MohseenAttar-181717?style=flat-square&logo=github&logoColor=white)](https://github.com/MohseenAttar)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-mohseen--attar-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mohseen-attar)
[![Email](https://img.shields.io/badge/Email-mohseenattar0007%40gmail.com-D4AF37?style=flat-square&logo=gmail&logoColor=white)](mailto:mohseenattar0007@gmail.com)

## 📄 License

© 2026 Mohseen Attar. All rights reserved.
