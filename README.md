# Description of TileGame_Backend Project
Implemented a 10x10 tile animation game using Node.js for the backend. Created a dynamic backend system to replicate a 10x10 square tile game. The server manages game logic, enabling real-time updates for an interactive and engaging user experience.

## Project Dependencies

This project utilizes the following Node.js modules for seamless functionality:

- **Express:** A web application framework for Node.js, simplifying the creation of robust APIs.

- **Cors:** Middleware for handling Cross-Origin Resource Sharing (CORS), ensuring secure communication between frontend and backend.

### Installation

To install the required modules, use the following npm commands:

```bash
npm install express cors
```

## Data Storage Constants

Three constants are defined for storing data using key-value pairs:

1. **generateGrid** - For generation of 10x10 grid required for the tile game.

## API Endpoints

### GET API for Sending Data

To retrieve and send data, use the following GET API endpoint:

```plaintext
GET /api/grid
```
## Dynamic Color Columns Generation

This web-based game features a grid with the initial two columns always in green. The subsequent columns alternate between blue and black, generated dynamically using random functions. A distinctive red bar, spanning two columns, adds a challenging element, creating an engaging and visually dynamic gaming experience.
