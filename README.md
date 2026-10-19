# Summit View – Landscaping Website

A landscaping company website built while following a Claude Code tutorial. It has a React front end with scroll effects and a small Node/Express server that handles quote requests.

## Features

- Responsive landing page: Hero, Intro, Projects, Process, Services, Testimonials, Contact
- Scroll animations: reveal-on-scroll and parallax effects
- Quote request form connected to a simple Express server

## Tech Stack

- **Front end:** React, Vite
- **Back end:** Node.js, Express
- **Built with:** Claude Code
- **Hosting:** Vercel

## Project Structure

```
summit-view/
├── client/    # React + Vite website
└── server/    # Express API for quote requests
Media/         # Source images
```

## Getting Started

You need [Node.js](https://nodejs.org/) installed.

**Run the website**

```
cd summit-view/client
npm install
npm run dev
```

**Run the server**

```
cd summit-view/server
npm install
npm start
```

Copy `server/.env.example` to `server/.env` and fill in the values before starting the server.
