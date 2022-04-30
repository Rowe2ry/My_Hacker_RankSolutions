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
// Write your code here
    const sortArr = arr.sort((a,b) => a-b);
    let smallestDiff = Number.MIN_VALUE;
    let outArr = [];
    for (let i = 0; i < arr.length - 1; i++){
        console.log(`index: ${i}`)
        if (sortArr[i+1] - sortArr[i] < smallestDiff ) {
            outArr = [];
            smallestDiff = sortArr[i +1] - sortArr[i];
            outArr.push(sortArr[i]),
            outArr.push(sortArr[i + 1]);
            console.log(`less than, outArr now: ${outArr}`)
        } else if (sortArr[i+1] - sortArr[i] === smallestDiff ) {
            outArr.push(sortArr[i]),
            outArr.push(sortArr[i + 1]);
            console.log(`equals to, outArr now: ${outArr}`)
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
