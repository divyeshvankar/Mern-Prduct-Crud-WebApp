# CRUD API MERN Project

This repository contains the code for a CRUD (Create, Read, Update, Delete) API project built with the MERN stack (MongoDB, Express, React, Node.js).

## Project Structure

The project is organized into two main folders:

- `frontend`: Contains the frontend code built with React.
- `backend`: Contains the backend code built with Node.js and Express.

## Frontend

The frontend is responsible for the user interface and client-side logic of the application.

### Project Setup

1. Navigate to the `frontend` directory.
2. Make sure you have Node.js and npm installed on your system.
3. Install dependencies using `npm install`.
4. Start the development server using `npm start`.

### Folder Structure

- `/public`: Contains static assets and HTML file.
- `/src`: Contains the source code for the React application.
  - `/components`: Contains React components.
  - `/pages`: Contains page components.
  - `/utils`: Contains utility functions.
  - `/App.js`: Main component file.
  - `/index.js`: Entry point file.
  - `/...`: Other files and folders.

### Available Scripts

- `npm start`: Runs the app in development mode.
- `npm test`: Launches the test runner.
- `npm run build`: Builds the app for production to the `build` folder.

## Backend

The backend is responsible for handling requests from the frontend, interacting with the database, and executing business logic.

### Project Setup

1. Navigate to the `backend` directory.
2. Make sure you have Node.js and npm installed on your system.
3. Install dependencies using `npm install`.
4. Start the server using `npm start`.

### Folder Structure

- `/config`: Contains configuration files.
- `/controllers`: Contains route controllers.
- `/models`: Contains Mongoose models.
- `/routes`: Contains Express routes.
- `/uploads`: Default directory for file uploads.
- `/index.js`: Entry point file.
- `/...`: Other files and folders.

### Available Scripts

- `npm start`: Runs the server.
- `npm test`: Runs tests.

### Database Setup

Ensure that you have MongoDB installed and running on your system. Update the connection URI in the `index.js` file to connect to your MongoDB database.

## Deployment

To deploy the app, follow these steps:

1. Deploy the backend server to your hosting provider. Make sure to configure environment variables and security settings as needed.
2. Deploy the frontend build to your hosting provider. Run `npm run build` in the `frontend` directory to create a production build, then deploy the generated files to your hosting provider.

