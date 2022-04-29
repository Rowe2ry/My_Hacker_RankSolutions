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
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
    // Write your code here
    if (k > 25) {
        while (k > 25) {
            k = k - 26;
        };
    };
    const lowerAlph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const upperAlph = lowerAlph.map(a => a.toUpperCase());
    const outArr = [];
    for (let i = 0; i < s.length; i++) {
        if (upperAlph.includes(s[i]) || lowerAlph.includes(s[i])) {
            if (s[i] === s[i].toUpperCase()) {
                let index = upperAlph.indexOf(s[i]);
                let shifted = index + k > 25 ? index + k - 26 : index + k;
                outArr.push(upperAlph[shifted]);
            } else if (s[i] === s[i].toLowerCase()) {
                let index = lowerAlph.indexOf(s[i]);
                let shifted = index + k > 25 ? index + k - 26 : index + k;
                outArr.push(lowerAlph[shifted]);
            };
        } else {
            outArr.push(s[i]);
        };
    };
    return outArr.join('');
};

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const s = readLine();

    const k = parseInt(readLine().trim(), 10);

    const result = caesarCipher(s, k);

    ws.write(result + '\n');

    ws.end();
}
