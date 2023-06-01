# My Portfolio Site

![Screenshot](https://storage.googleapis.com/portfolio-screenshots/14e8e591bbb1a084f4ddd4de.png 'My Portfolio Site Screenshot')

## Description

Full-Stack portfolio app utilizing the popular MERN stack (MongoDB, Express, React, Node), JWT Tokens, SendGrid API for sending contact form emails, and Google Cloud Storage for storing project screenshots. Users can register and then login to create, edit and delete projects. Learned about implementing a true state management solution with Redux Toolkit. Main pain point was contending with scope creep and asynchronous lifecycles in Redux.

## Core Features

- Responsive mobile-first design
- CRUD functionality (portfolio projects)
- Register/Login users
- JWT Token authentication
- Contact form utilizes SendGrid API to send emails
- Project screenshots uploaded to Google Cloud Storage
- State management via Redux Toolkit
- Vite development tool
- Deployment via Docker Containers

## Development

### Server

1. Rename server/example.env to server/.env and add in credentials for MongoDB, SendGrid API, Google Cloud Storage
2. Generate your JWT secret eg. `node -e "console.log(require('crypto').randomBytes(256).toString('base64'));"`
3. Run development server with `yarn run server`. Runs on default port 5000 unless otherwise specified in .env file.

### Client

Run Vite development server with `yarn run dev`. Runs on default port 5173.

## Deployment

This application can be deployed to production via docker containers to Google Cloud Run or any container service.

### Docker

#### Build Server Image (Single-Stage, Node.js LTS)

1. `cd server`
2. `docker build -t server .`

#### Build Client Image (Multi-Stage, Node.js LTS + Nginx Stable)

1. `cd ../client`
2. `docker build -t client .`

### Node.js

1. To deploy via Node.js, use .env file from development or rename server/.env.example to server/.env and add all credentials. Change NODE_DEPLOY to true.
2. From /server/, run `yarn run node-deploy` to generate a production build of the client directory and start the server. Client is served from backend.

## Tags

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Google Cloud](https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white)
