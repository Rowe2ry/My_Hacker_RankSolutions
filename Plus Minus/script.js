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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
    // Write your code here
    const len = arr.length; // referenced several times, shorter
    let positives = 0;
    let negatives = 0;
    let zeros = 0;
    for (let i = 0; i < len; i++) {
        if(arr[i] > 0){
            positives++;
        } else if (arr[i] < 0) {
            negatives++;
        } else {
            zeros++;
        };
    };
    let preciseArray = [];
    let posFract = positives / len;
    let negFract = negatives / len;
    let zerFract = zeros / len;
    let deciArray = [posFract, negFract, zerFract];
    for (let num of deciArray) {
        num = num.toString(); // numbers will drop trailing zeros in JS
        if (num.length == 1) { //0
            let modifierString = '.000000'; // a decimal and 6 zeros
            const stringValue = num.concat(modifierString); // 0.000000
            preciseArray.push(stringValue);
        } else if (num.length < 9) { // too short; 8 or less (8 is fine actually)
            let difference = 8 - num.length; // how much too short?
            let modifierString = '';
            for (let j = 0; j < difference; j++) { // add that many zeros
                modifierString = modifierString.concat('0');
            };
            const stringValue = num.concat(modifierString);
            preciseArray.push(stringValue);
        } else if (num.length > 8) { // too big, 9 or more
            while (num.length > 8) { // take one down, pass it around...
                num = num.slice(0,-1); // start at index and end at length - 1, ie. removes the last char
            };
            preciseArray.push(num);
        } else {
        preciseArray.push(num);
        };
    };
    for (const answer of preciseArray) { // loop through answers and print them
        console.log(answer);
    };
};

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
