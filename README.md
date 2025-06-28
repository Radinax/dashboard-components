# Dashboard Components

These are some components I found myself creating over and over, so in this repo I want to have them all in one place.

## ✨ Features

- **React 19**: A declarative, efficient, and flexible JavaScript library for building user interfaces.
- **TypeScript**: A strongly typed superset of JavaScript that compiles to plain JavaScript, enhancing code quality and developer experience.
- **Tailwind CSS 4**: A utility-first CSS framework for rapidly building custom designs.
- **Vite**: A next-generation frontend tooling that provides an incredibly fast development experience.
- **Bun**: An all-in-one JavaScript runtime & toolkit, providing a fast package manager, bundler, and test runner.

Additional libraries:

- Lucide React
- Tailwind Merge
- Clsx
- Recharts

## 📦 Installation

Bun will install all the necessary project dependencies:

```bash
bun install
```

Start the development server with Vite:

```bash
bun dev
```

This will typically open your application at http://localhost:5173. The development server supports hot module replacement (HMR) for a fast development loop.

## 📂 Project Structure

```bash
.
├── public/ # Static assets
├── src/ # Source code
│ ├── assets/ # Images, icons, etc.
│ ├── components/ # Reusable React components
│ ├── app.tsx # Main App component
│ ├── index.css # Global styles (Tailwind directives here)
│ ├── main.tsx # Entry point for React app
│ └── vite-env.d.ts # Vite environment types
├── .gitignore # Files/directories to ignore in Git
├── index.html # Main HTML file
├── package.json # Project dependencies and scripts
├── postcss.config.js # PostCSS configuration for Tailwind
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json # TypeScript configuration
├── tsconfig.node.json # TypeScript configuration for Node.js environment
└── vite.config.ts # Vite configuration
```

## 📜 Available Scripts

In the project directory, you can run the following Bun commands:

- `bun dev`: Starts the development server with hot module replacement.

```bash
bun dev
```

- `bun build`: Builds the app for production to the dist folder. It correctly bundles React in production mode and optimizes the build for the best performance.

```bash
bun build
```

- `bun preview`: Locally serves the production build. Useful for verifying the build output before deployment.

```bash
bun preview
```

- `bun lint`: Runs ESLint to check for code quality issues and potential errors.

```bash
bun lint
```

## 📦 Deployment

After running bun build, the optimized production assets will be located in the dist/ directory. You can deploy this directory to any static site hosting service (e.g., Netlify, Vercel, GitHub Pages, Firebase Hosting).

## 🤝 Contributing

Contributions are welcome! Please feel free to open issues or submit pull requests.

## 📄 License

This project is open-sourced under the MIT License.

---

**Built with ❤️ by [Adrian Beria](https://github.com/Radinax)**
