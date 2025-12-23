# ZaZa Portfolio

A modern, responsive portfolio website showcasing my work as a Full Stack & Game Developer.

## Features

- 🎨 Modern UI with smooth animations
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 and TypeScript
- 🎭 Framer Motion animations
- 🌈 Beautiful gradient effects
- 📊 Showcases projects, skills, and experience

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 20 or higher
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/dev-zaza/dev-zaza-portfolio.git
cd dev-zaza-portfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

To build the static site for GitHub Pages:

```bash
pnpm run build
```

The output will be in the `out` directory.

## Deployment to GitHub Pages

This repository is configured to automatically deploy to GitHub Pages using GitHub Actions when you push to the `main` branch.

### Manual Setup

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "GitHub Actions"
4. The workflow will automatically deploy on push to `main`

### Important Notes

- The site is configured to work with the repository name as the base path
- If your repository is named `dev-zaza-portfolio`, the site will be available at `https://dev-zaza.github.io/dev-zaza-portfolio/`
- If you want to use a custom domain or deploy to the root of your GitHub Pages, update the `basePath` in `next.config.js`

## Customization

### Update Personal Information

1. Edit `components/Hero.tsx` for the hero section
2. Edit `components/About.tsx` for about section
3. Edit `components/Projects.tsx` to add your projects
4. Edit `components/Experience.tsx` to update your experience
5. Edit `components/Contact.tsx` to update contact information
6. Edit `components/Footer.tsx` to update social links

### Update Email

Replace `your-email@example.com` with your actual email address in:
- `components/Contact.tsx`
- `components/Footer.tsx`

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- GitHub: [@dev-zaza](https://github.com/dev-zaza)
- Email: your-email@example.com

---

Built with ❤️ by ZaZa

