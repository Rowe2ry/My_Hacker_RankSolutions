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
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
    // Write your code here
    let totalPairs = 0;
    for (let i = 0; i < ar.length ; i++){
        if (ar[i] == false) { continue;};
        let sockIdentifier = ar[i]
        let thisColorCount = 1;
        for (let j = 0; j < ar.length ; j++) {
            if (i !== j && ar[i] === ar[j]) {
                thisColorCount++;
            };
        };
        const thisColorPairs = thisColorCount % 2 ===0 ? thisColorCount/2 : (thisColorCount-1)/2;
        totalPairs+= thisColorPairs;
        do {  
        ar[ar.indexOf(sockIdentifier)] = false
        } while (ar.includes(sockIdentifier));
    };
    return totalPairs;
};

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = sockMerchant(n, ar);

    ws.write(result + '\n');

    ws.end();
}
