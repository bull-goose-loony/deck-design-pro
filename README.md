# DDP Marketing Website

A modern, SEO-optimized marketing website for **DDP** (technical plans & renderings for outdoor structures).  
Built with **Astro**, **Tailwind CSS**, and a headless CMS (**Storyblok**) for easy content management.

---

## 🚀 Tech Stack
- [Astro](https://astro.build/) – static site generator for fast, SEO-friendly pages  
- [Tailwind CSS](https://tailwindcss.com/) – utility-first styling  
- [Storyblok](https://www.storyblok.com/) – headless CMS with visual editor (blog, services, landing pages)  
- [Plausible](https://plausible.io/) + [Google Analytics 4](https://marketingplatform.google.com/about/analytics/) – marketing metrics & dashboards  
- Hosted on [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/)  

---

## 📂 Project Structure
```text
/
├── public/            # static assets (favicon, images)
├── src/
│   ├── components/    # shared UI components
│   ├── layouts/       # page layouts (header, footer, etc.)
│   ├── lib/           # CMS + metrics helpers
│   ├── pages/         # Astro routes (services, blog, contact)
│   │   └── blog/      # MDX blog posts (pulled from Storyblok later)
│   └── styles/        # global styles
├── astro.config.mjs   # Astro config
├── tailwind.config.mjs
└── package.json
