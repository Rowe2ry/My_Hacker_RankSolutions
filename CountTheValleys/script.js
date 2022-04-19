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
 * Complete the 'countingValleys' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER steps
 *  2. STRING path
 */

function countingValleys(steps, path) {
    // Write your code here
    let valleyCount = 0;
    let altitude = 0;
    let inValley = false
    for(let i = 0; i < steps; i++) {
        if (altitude < 0) {
            inValley = true;
            //console.log(`we are in a valley at the start of index ${i}`);
        } else {
            inValley = false;
        }
        if (path[i].toUpperCase() === "D") {
            --altitude;
            //console.log(`decreasing altitude to ${altitude} at index ${i}`);
        } else {
            ++altitude;
            //console.log(`increasing altitude to ${altitude} at index ${i}`)
        };
        if (!inValley && altitude < 0) {
            ++valleyCount;
            //console.log(`for ${i} the vc is ${valleyCount}`)
        };
    };
    return valleyCount;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const steps = parseInt(readLine().trim(), 10);

    const path = readLine();

    const result = countingValleys(steps, path);

    ws.write(result + '\n');

    ws.end();
}
