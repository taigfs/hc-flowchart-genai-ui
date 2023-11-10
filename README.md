# Text to Diagram: Using Vercel AI SDK, Next.js, and React Flow

## Project Description

Text to Diagram is a powerful web application that utilizes Vercel AI SDK, Next.js, and React Flow to convert textual information into interactive diagrams. This tool is ideal for educators, developers, and visual learners who seek an efficient way to transform written content into visual representations.

## Features

- **AI-Powered Text Analysis**: Leverages Vercel AI SDK to parse and understand textual data.
- **Interactive Diagrams**: Utilizes React Flow for creating and manipulating flowcharts and diagrams.
- **Modern Web Technology**: Built with Next.js for a seamless and responsive user experience.

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, set the following environment variables in your `.env.development.local`:

```bash
GITHUB_ID
GITHUB_SECRET
NEXTAUTH_SECRET
OPENAI_API_KEY
ALLOWED_EMAIL
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

# License

This project is licensed under the MIT License.

# Acknowledgements

Vercel AI SDK
Next.js
React Flow
