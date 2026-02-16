# Portfolio Landing Page - André Cunha

A modern, minimalist portfolio landing page built with React, TypeScript, and Vite. Features a clean design with smooth animations and responsive layout.

## Tech Stack

- **React 18** - Modern UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **Framer Motion** - Smooth animations
- **CSS Modules** - Scoped component styling

## Features

- Clean, minimalist design
- Smooth animations and transitions
- Fully responsive (mobile, tablet, desktop)
- Fast performance with Vite
- Type-safe with TypeScript
- Interactive hover effects

## Development Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "Landing page"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Build

To create a production build:

```bash
npm run build
```

To preview the production build:

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/          # React components
│   │   ├── Hero/           # Hero section with intro
│   │   ├── ProjectCard/    # Individual project card
│   │   └── ProjectsGrid/   # Projects grid layout
│   ├── assets/             # Images and static files
│   ├── styles/             # Global styles
│   ├── types/              # TypeScript type definitions
│   ├── App.tsx             # Main app component
│   └── main.tsx            # Application entry point
├── public/                 # Public static assets
└── index.html             # HTML template
```

## Customization

### Content
- Update personal information in `src/components/Hero/Hero.tsx`
- Modify project data in `src/components/ProjectsGrid/ProjectsGrid.tsx`
- Replace profile photo in `src/assets/`

### Styling
- Global styles: `src/styles/globals.css`
- Component-specific styles: `*.module.css` files
- Color scheme: CSS custom properties in `globals.css`


## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**André Cunha**
- Developer and Researcher

---

Built using React + TypeScript + Vite
