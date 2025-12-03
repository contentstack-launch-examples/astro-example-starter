# Astro Starter Kit: Basics

An example repository demonstrating Contentstack Launch integration with Astro.

## 🚀 Features Demonstrated

This repository showcases:

- **Server-Side Rendering (SSR)** - Dynamic content generation on each request
- **Incremental Static Regeneration (ISR)** - Cached content with revalidation
- **Static Site Generation (SSG)** - Pre-built static pages
- **API Routes** - Server-side API endpoints
- **Cache Control** - Different caching strategies and cache purging

##  Project Structure

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   ├── astro.svg
│   │   └── background.svg
│   ├── components/
│   │   └── Welcome.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro              # Demo dashboard
│       ├── ssr-demo.astro          # Server-Side Rendering demo
│       ├── isr-demo.astro          # Incremental Static Regeneration demo
│       ├── ssg-demo.astro          # Static Site Generation demo
│       ├── ssr-api-demo.astro      # API routes demo
│       └── cacheTags-purge-demo.astro # Cache purging demo
├── astro.config.mjs                # Astro configuration with Node adapter
├── package.json
└── tsconfig.json
```

## 🛠️ Tech Stack

- **Astro** ^5.13.5 - The web framework
- **React** ^19.1.1 - UI component library
- **@astrojs/node** ^9.4.3 - Node.js adapter for server deployment
- **@astrojs/react** ^4.3.0 - React integration
- **TypeScript** - Type safety and development experience

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd astro-example-starter
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:4321`

## 📋 Available Scripts

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm start`               | Start the production server                      |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |


## ⚙️ Configuration

The project is configured for server-side rendering with the Node.js adapter:

```javascript
// astro.config.mjs
export default defineConfig({
  output: "server",
  adapter: node({
    mode: "standalone",
  }),
});
```
### Build for Production

```bash
npm run build
npm start
```
## 📄 License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/contentstack-launch-examples/contentstack-nuxt-example-starter/blob/main/LICENSE) file for details.
