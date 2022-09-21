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
 * Complete the 'closestNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function closestNumbers(arr) {
    // Write your code here
    const sortArr = arr.sort((a,b) => a-b);
    let smallestDiff = Number.MAX_VALUE; // start with the bggest thing possible
    let outArr = [];
    for (let i = 0; i < arr.length - 1; i++){
        if (sortArr[i+1] - sortArr[i] < smallestDiff ) {
            outArr = [sortArr[i],sortArr[i + 1]]; // we found something smaller, clear the array and assign it the value of just these 2 things
            smallestDiff = sortArr[i +1] - sortArr[i]; // new metric to measure against
        } else if (sortArr[i+1] - sortArr[i] === smallestDiff ) {
            outArr.push(sortArr[i]),
            outArr.push(sortArr[i + 1]);
        };
    };
    return outArr;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = closestNumbers(arr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
