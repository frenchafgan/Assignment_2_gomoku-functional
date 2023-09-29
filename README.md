# Gomoku Web Application

## Background

This project is a web-based version of the classic board game Gomoku, also known as Five in a Row. The application is developed using React and TypeScript and offers an interactive and intuitive user interface. Players can compete to get five stones in a row, either horizontally, vertically, or diagonally.

## Getting Started

### Prerequisites

- Make sure you have Node.js and npm installed on your machine. If not, you can download and install them from the [official Node.js website](https://nodejs.org/en/download/).
- The project uses TypeScript, which comes pre-configured in the setup.

### Setup

1. Clone the repository to your local machine.

```bash
git clone https://github.com/frenchafgan/Assignment_2_gomoku.git
```

2. Navigate to the project directory.

```bash
cd Assignment_2_gomoku
```

3. Install the required dependencies.

```bash
npm install
```

### Running the Application

To start the application, run the following command in the terminal:

```bash
npm start
```

This will start the development server, and the application should open automatically in your web browser. If it doesn't, you can access it manually by going to `http://localhost:3000/`.

## Game Rules

- Players take turns placing a stone of their chosen color on a cell of the grid.
- The objective is to line up five stones of your color in a row, column, or diagonal.
- The game ends when one of the players achieves this objective or when the grid is full, resulting in a draw.

## Features

- **Interactive Board**: Click to place stones and see the board update in real-time.
- **Game History**: View a log of past games, complete with move history and winners.
- **Scoreboard**: Keep track of wins and losses for an added layer of competition.
- **Dynamic Board Size**: Choose from multiple board sizes for varied levels of difficulty.

## Dependencies

The project uses several npm packages to aid development:

- `react` and `react-dom` for building the UI.
- `react-redux` for state management.
- `react-router-dom` for client-side routing.
- `redux` for a predictable state container.
- `typescript` for static type checking.

Run `npm install` in at the location where the package.json file is located to install all the required dependencies.

## Bonus Feature

In the spirit of sportsmanship and friendship, the application allows players to logout after their session so that another player can log in and play also without affecting the game history of other players. This is achieved by storing the game history in the browser's local storage, which persists even after the user logs out.
