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
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
    // Write your code here
    let result;
    const charList = s.split('');
    let alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z', undefined];
    charList.forEach(char => {
        if (char !== ' ') {
            const thisChar = char.toLowerCase();
            if (alphabet.includes(thisChar)) {
                const indexNum = alphabet.indexOf(thisChar);
                alphabet.splice(indexNum,1); // remove from character pool
            };
        };
    });
    typeof(alphabet[0]) == 'string' ? result = 'not pangram' : result ='pangram'; // if any letters left, we didn't use it. When we use them all, our alphabet array whould have 1 element at index zero (undefined)
    return result;
};

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = pangrams(s);

    ws.write(result + '\n');

    ws.end();
}
