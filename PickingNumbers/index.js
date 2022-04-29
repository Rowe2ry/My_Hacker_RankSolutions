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
 * Complete the 'pickingNumbers' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function pickingNumbers(a) {
    a.sort((a,b) => a - b);
    
    let maxCount = 1;
    let currentCount = 1;
    
    let i = 0;
    let j = 1;
    
    while(i < a.length - 1 && j <= a.length - 1){
        let diff = a[j] - a[i];
        if(diff <= 1){
            currentCount++;
            j++;
        } else{
            if(maxCount < currentCount){
                maxCount = currentCount;
            }
            i = j;
            j++;
            currentCount = 1;
        }
    }  
    return Math.max(maxCount,currentCount);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const result = pickingNumbers(a);

    ws.write(result + '\n');

    ws.end();
}
