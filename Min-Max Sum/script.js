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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    let runningTotal = 0; // start with zero
    for (let i = 0; i < arr.length; i++) {
        runningTotal= runningTotal + arr[i]; // add all elements of the array
    };
    //console.log(runningTotal);
    let lowestSoFar = runningTotal; // set to the max possible value
    let highestSoFar = 0; // set to the lowest possible value
    for (let i = 0; i < arr.length; i++ ) {
        var tempLowCheck = runningTotal - arr[i]; // all 5 ints minus this one
        var tempHighCheck = runningTotal - arr[i]; // all 5 ints minus this one
        if (tempLowCheck <= lowestSoFar) {
            lowestSoFar = tempLowCheck;
            //console.log('the lowest right now is ' + lowestSoFar)
        };
        if (tempHighCheck >= highestSoFar) {
            highestSoFar = tempLowCheck;
            //console.log('the highestest right now is ' + highestSoFar)
        };
    };
    const output = lowestSoFar + ' ' + highestSoFar;
    console.log(output);
    return output;
};

function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
