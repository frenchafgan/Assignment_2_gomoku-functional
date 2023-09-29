Certainly! Below is a sample `README.md` file that outlines how to set up and run your Gomoku game.

---

# Gomoku Game

Gomoku is an abstract strategy board game. This project provides both the front-end and back-end code for running the game in a web browser.

## Table of Contents

- [Gomoku Game](#gomoku-game)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
    - [Backend Installation](#backend-installation)
    - [Frontend Installation](#frontend-installation)
  - [Configuration](#configuration)
    - [Backend Configuration](#backend-configuration)
    - [Frontend Configuration](#frontend-configuration)
  - [Running the App](#running-the-app)
  - [Technologies Used](#technologies-used)

## Installation

To get started, you'll need to clone the repository to your local machine.

```bash
git clone https://github.com/frenchafgan/Assignment_2_gomoku-functional.git
```

After cloning, navigate to the project directory:

```bash
cd Assignment_2_gomoku-functional
```

### Backend Installation

First, navigate to the backend directory:

```bash
cd backend
```

Install the necessary packages:

```bash
npm install
```

### Frontend Installation

Navigate to the frontend directory:

```bash
cd Assignment_2_gomoku-functional
```

Install the necessary packages:

```bash
npm install
```

## Configuration

### Backend Configuration

Create a `.env` file in the `backend` directory and add your MongoDB URI:

```env
MONGO_DB_URL=your_mongodb_uri_here
```

Replace `your_mongodb_uri_here` with your actual MongoDB URI.

### Frontend Configuration

If needed, you can also create a `.env` file in the `Assignment_2_gomoku-functional` directory for any front-end environment variables you may have.

## Running the App

Open a new terminal and navigate to the `Assignment_2_gomoku-functional` directory:

```bash
cd Assignment_2_gomoku-functional
```

Run the frontend:

```bash
npm start
```

Using Concurrently, we have set start script to trigger two start scripts (backend and front end) at the same time. 

The frontend should now be running at [http://localhost:3000](http://localhost:3000).

## Technologies Used

- React.js for the Frontend
- Node.js and Express.js for the Backend
- MongoDB for the Database
- Redux for State Management

---

You can now open your web browser and navigate to `http://localhost:3000` to start playing the Gomoku game!
