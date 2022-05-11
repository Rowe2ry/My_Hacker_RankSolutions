'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'gridChallenge' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING_ARRAY grid as parameter.
 */

function gridChallenge(grid) {
    // Write your code here
    for(let i = 0 ; i < grid.length; i++) {
        grid[i] = grid[i].split('').sort().join(''); 
    };
    for (let i = 0; i < grid[0].length; i++) {
        let tempColumn = []
        for (let j = 0; j < grid.length; j++ ) {
            tempColumn.push(grid[j][i]);
        };
        const original = [];
        for (let k = 0; k < tempColumn.length; k++) {
            original[k] = tempColumn[k]   
        };
        const sortedTemp = tempColumn.sort();
        for (let l = 0; l< tempColumn.length; l++) {
            if (original[l] !== sortedTemp[l]) {
                return 'NO';
            };
        };
    };
    return 'YES';
};

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const t = parseInt(readLine().trim(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine().trim(), 10);

        let grid = [];

        for (let i = 0; i < n; i++) {
            const gridItem = readLine();
            grid.push(gridItem);
        }

        const result = gridChallenge(grid);

        ws.write(result + '\n');
    }

    ws.end();
}
