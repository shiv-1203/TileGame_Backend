const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

function generateGrid(moveRed) {
    const grid = [];
    for (let i = 0; i < 10; i++) {
        const row = [];
        for (let j = 0; j < 10; j++) {
            // Set default value for each cell
            row.push(Math.random() < 0.3 ? 'blue' : 'black');
        }
        grid.push(row);
    }
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 2; j++) {
            grid[i][j]='green';
        } 
        if((moveRed%9)<2){
            moveRed=2;
        }
        if((moveRed%9)>=2 && (moveRed%9)<=8){
            grid[i][moveRed%9]='red';
            grid[i][moveRed%9+1]='red';
        }

    }
    return grid;
}

app.get('/api/grid', (req, res) => {
    const moveRed = req.query.param1;
    const grid = generateGrid(moveRed);
    res.json({grid,moveRed});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
