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
    const intNum = arr.length;
    let positives = 0;
    let negatives = 0;
    let zeros = 0;
    for (let i = 0; i < intNum; i++) {
        if(arr[i] > 0){
            positives++;
        } else if (arr[i] < 0) {
            negatives++;
        } else {
            zeros++;
        };
    };
    let preciseArray = [];
    let posFract = positives / intNum;
    let negFract = negatives / intNum;
    let zerFract = zeros / intNum;
    let deciArray = [posFract, negFract, zerFract];
    for (let i = 0; i < deciArray.length ; i++) {
        let thisNum = deciArray[i];
        thisNum = thisNum.toString();
        if (thisNum.length == 1) {
            let modifierString = '.000000';
            let stringValue = thisNum.toString();
            stringValue = stringValue.concat(modifierString);
            preciseArray.push(stringValue);
        } else if (thisNum.length < 9) {
            let difference = 8 - thisNum.length;
            let modifierString = '';
            for (let j = 0; j < difference; j++) {
                modifierString = modifierString.concat('0');
            };
            let stringValue = thisNum.toString();
            stringValue = stringValue.concat(modifierString);
            preciseArray.push(stringValue);
        } else if (thisNum.length > 8) {
            while (thisNum.length > 8) {
                thisNum = thisNum.slice(0,-1);
            };
            let stringValue = thisNum.toString();
            preciseArray.push(stringValue);
        } else {
        let stringValue = thisNum.toString();
        preciseArray.push(stringValue);
        };
    };
    for (let i = 0; i < preciseArray.length; i++) {
        console.log(preciseArray[i]);
    };
};

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
