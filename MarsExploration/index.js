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
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function marsExploration(s) {
    // Write your code here
    const message = 'SOS';
    let messageNums;
    // divide the string by 3 and round up assuming something that isn't divisible by 3 should be rounded up to one complete "SOS" message
    messageNums =Math.ceil(s.length/3);
    // console.log(`Message number: ${messageNums}`);
    let expectedMessage = 'SOS';
    for (let i = 1; i < messageNums; i++) {
        expectedMessage = expectedMessage.concat('SOS');
    };
    // console.log(`expected message is: ${expectedMessage}`)
    let errorCount = 0;
    let difference = expectedMessage.length - s.length;
    // console.log(`the difference is ${difference}`);
    switch (difference) {
        case 2:
            s.concat('OS');
            errorCount = errorCount + 2;
            break;
        case 1:
            s.concat('S');
            errorCount++;
            break;
        default:
            break;
    };
    for (let i = 0; i < expectedMessage.length; i++) {
        if (expectedMessage[i] !== s[i]) {
            errorCount++;
            // console.log(`difference noted! Error count is now ${errorCount}`)
        };
    };
    
    //console.log(errorCount);
    return errorCount;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = marsExploration(s);

    ws.write(result + '\n');

    ws.end();
}
