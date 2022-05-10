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
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */

function dynamicArray(n, queries) {
    // Write your code here
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = [];
    };
    let lastAnswer = 0;
    let answersArray = [];
    
    for (let i = 0; i < queries.length; i++) {
        if (queries[i][0] === 1) {
            let idx = (queries[i][1] ^ lastAnswer) % n;
            arr[idx].push(queries[i][2]);
        } else {
            let idx = (queries[i][1] ^ lastAnswer) % n;
            lastAnswer = arr[idx][queries[i][2] % arr[idx].length];
            answersArray.push(lastAnswer);
        };
    };
    return answersArray;
};

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const q = parseInt(firstMultipleInput[1], 10);

    let queries = Array(q);

    for (let i = 0; i < q; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    const result = dynamicArray(n, queries);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
