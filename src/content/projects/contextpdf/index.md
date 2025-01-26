---
title: "ContextPDF"
description: "Chatbot powered by Retrieval Augmented Regeneration."
date: "February 2024"
demoURL: "https://contextpdf.swapnilsachan.me"
repoURL: "https://github.com/swapnilsachan03/contextpdf"
---

![ContextPDF](/contextpdf.png)

ContextPDF is a LLM powered application which provides a seamless chat experience where users can upload PDF files, create chats around them, and interact with an AI assistant. The AI assistant uses the OpenAI API to generate responses based on the chat context. The application also includes a subscription feature, where users can subscribe to access premium features. The subscription process is handled using Stripe for payments and webhooks for event processing.

### 🪛 Tech Used

The technologies used in this project can be categorised into two tech stacks: mainly `Application` & `AI`.

**Application (Client & Server)**

- Next.js
- Clerk (for authentication)
- DrizzleORM + NeonDB (edge computing compatible)
- Stripe
- AWS S3

**AI**

- PineconeDB (to store vector embeddings of our documents)
- LangChain (ties together OpenAI & PineconeDB)
- OpenAI API
- Vercel AI SDK

### 🧠 New Concepts Used

1. **Edge Runtime:** When your framework is built on the Edge Runtime, it runs everywhere Node.js does. When deployed to infrastructure like Vercel, frameworks like Next.js can automatically provision the optimal infrastructure for you.

2. **Retrieval Augmented Regeneration:** Retrieval-augmented generation (RAG) is a technique for enhancing the accuracy and reliability of generative AI models with facts fetched from external sources. Using this, our AI models will have the latest data to generate answers from and will not hallucinate while answering questions for which they do not have the data for. [Follow this link for a detailed overview of RAG from IBM Research.](https://research.ibm.com/blog/retrieval-augmented-generation-RAG)

### 📋 A high level overview of how Retrieval Augmented Generation work in context of this application:

1. Obtain the PDF document
2. Split and segment the PDF into multiple documents internally (LangChain will help us in this)
3. Vectorize and embed individual documents
4. Store the vectors into PineconeDB

**How will we search?**

5. To seacrh, embed the query
6. Query the database (PineconeDB) for similar vectors
7. Extract out the metadat of the similar vectors
8. Feed metadata into OpenAI prompt

## 📄 Configuring environment variables

Will update later in here.

## 💻 Commands

All commands are run from the root of the project, from a terminal:

Replace npm with your package manager of choice. `npm`, `pnpm`, `yarn`, `bun`, etc

| Command                   | Action                                            |
| :------------------------ | :------------------------------------------------ |
| `npm install`             | Installs dependencies                             |
| `npm run dev`             | Starts local dev server at `localhost:4321`       |
| `npm run dev:network`     | Starts local dev server on local network          |
| `npm run sync`            | Generates TypeScript types for all Astro modules. |
| `npm run build`           | Build your production site to `./dist/`           |
| `npm run preview`         | Preview your build locally, before deploying      |
| `npm run preview:network` | Preview build on local network                    |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check`  |
| `npm run astro -- --help` | Get help using the Astro CLI                      |
| `npm run lint`            | Run ESLint                                        |
| `npm run lint:fix`        | Auto-fix ESLint issues                            |

## 🏛️ License

MIT
