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
 * Complete the 'balancedSums' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function balancedSums(arr) {
    if (arr.length === 1) {return 'YES'};
    arr.push(0);
    arr.unshift(0);
    for (let i = 1; i < arr.length -1; i++) {
        const left = arr.slice(0,i);
        const right = arr.slice(i + 1);
        const leftSum = left.reduce((a,b) => a + b);
        const rightSum = right.reduce((a,b) => a + b);
        if (leftSum === rightSum) {
            return 'YES';
        };
    };
    return 'NO';
};

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const T = parseInt(readLine().trim(), 10);

    for (let TItr = 0; TItr < T; TItr++) {
        const n = parseInt(readLine().trim(), 10);

        const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

        const result = balancedSums(arr);

        ws.write(result + '\n');
    }

    ws.end();
}
