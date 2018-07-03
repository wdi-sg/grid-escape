const size = process.argv[2];
const grid = [];
const dir = ['D', 'L', 'U', 'R'];

function setUp () {
    for (let i = 0; i < size; i++) {
        grid.push([]);
        for (let j = 0; j < size; j++) {
            grid[i].push([]);
            let x = Math.floor(Math.random()*4);
            
            grid[i][j].push(dir[x]);
        }
    }
}

let position;
function randomCell () {
    let row = Math.floor(Math.random() * size);
    let col = Math.floor(Math.random() * size);
    collate(row, col);
}

function collate (row,  col) {
    if(checkifOut(row, col)) {
        console.log('checkifOut');
        return;
    } else {
        position = grid[row][col][0];
        moveCell(row, col, position);
    }
}

let counter = 0;
function moveCell (row, col, position) {
    counter++;

    // dir.find( (currentDir) => { 
    //     return currentDir == position;
    // });
    
    //use switch
    // if(position == 'D') {
    //     grid[row][col][0] = 'L';
    //     row ++;
    // } else if (position == 'L') {
    //     grid[row][col][0] = 'U';
    //     col --;
    // } else if (position == 'U') {
    //     grid[row][col][0] = 'R';
    //     row --;
    // } else if (position == 'R') {
    //     grid[row][col][0] = 'D';
    //     col ++;
    // }

    switch(position) {
        case 'D':
            grid[row][col][0] = 'L';
            row ++;
            break;
        case 'L':
            grid[row][col][0] = 'U';
            col --;
            break;
        case 'U':
            grid[row][col][0] = 'R';
            row --;
            break;
        case 'R':
            grid[row][col][0] = 'D';
            col --;
            break;
    }
    collate(row, col);
}


function checkifOut (row , col) {
    if(row >= size || col >= size || row < 0 || col < 0) {
        console.log('heyo');
        return true;
    } else {
        return false;
    }
}






setUp();
randomCell();

console.log(grid);
console.log(counter);
