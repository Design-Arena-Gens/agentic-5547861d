## Lueur des Collines

Immersive storytelling experience inspired by the line : _« Encore à des lieues à travers les collines, pourtant il la sentait, il sentait la corruption tordue. »_ The site blends interactive UI, atmospheric motion graphics, and narrative fragments that let visitors explore how a distant corruption can be perçue avant qu'elle ne se montre.

### Tech stack

- Next.js 14 with the App Router
- TypeScript
- Tailwind CSS (modern `@import "tailwindcss";` layering)
- Framer Motion for choreography and ambience

### Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to explore the experience in development mode.

### Production build

```bash
npm run build
npm start
```

The build command compiles the application for production; `npm start` launches the optimized server locally on port 3000.

### Deployment

The project is optimized for Vercel. Deploy with:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-5547861d
```

### Project structure

```
web/
├── public/              # Static assets
├── src/
│   ├── app/
│   │   ├── layout.tsx   # Root layout + metadata
│   │   └── page.tsx     # Immersive narrative interface
│   └── app/globals.css  # Global Tailwind setup + atmospheric backdrop
├── package.json
└── ...
```
