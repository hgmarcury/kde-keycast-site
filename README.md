# KDE KeyCast Website

Official website for **KDE KeyCast**, a lightweight keyboard and mouse visualizer for KDE Plasma on Wayland.

## About KDE KeyCast

KDE KeyCast makes keyboard and mouse activity visible in real time. It is designed for screen recordings, tutorials, live demonstrations and presentations.

Learn more about the application in the [main KDE KeyCast repository](https://github.com/hgmarcury/kde-keycast).

## Website

This repository contains the source code for the official KDE KeyCast website.

The website is built with:

- [Astro](https://astro.build/) – Static site generation.
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first styling.
- [TypeScript](https://www.typescriptlang.org/) – TypeScript configuration and tooling.

## Getting Started

### Requirements

- [Node.js](https://nodejs.org/) 22.23.4 or later.
- [pnpm](https://pnpm.io/).

### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/hgmarcury/kde-keycast-site.git
cd kde-keycast-site
pnpm install
```

### Development

Start the local development server:

```bash
pnpm dev
```

Astro will provide a local URL, usually `http://localhost:4321`.

### Production Build

Generate the production website:

```bash
pnpm build
```

The generated files are placed in the `dist/` directory.

Preview the production build locally:

```bash
pnpm preview
```

## Project Structure

```text
/
├── public/
│   ├── images/
│   ├── favicon.ico
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Contributing

Contributions, suggestions and bug reports are welcome.

For issues related to the KDE KeyCast application itself, please use the [main project repository](https://github.com/hgmarcury/kde-keycast).

## License

The KDE KeyCast application is licensed under **GPL-3.0-or-later**.

This repository contains the website source code and project-related assets. Refer to the relevant files and their copyright notices for licensing information.
