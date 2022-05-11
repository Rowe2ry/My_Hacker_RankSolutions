'use strict';

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
 * Complete the 'countSort' function below.
 *
 * The function accepts 2D_STRING_ARRAY arr as parameter.
 */

function countSort(arr) {
    // Write your code here
    const len = arr.length;
    for (let i = 0; i < len/2; i++) {
        arr[i][1] = "-";
    };
    arr.sort((a,b) => a[0] - b[0]);
    let output = [];
    for (let i = 0; i < len; i++) {
        output.push(arr[i][1]);
    };
    console.log(output.join(' '));
};

function main() {
    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ');
    }

    countSort(arr);
}
