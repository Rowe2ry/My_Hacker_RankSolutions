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
        console.log(`char is ${char}`)
        if (char !== ' ') {
            // console.log('not a space');
            if (alphabet.includes(char.toLowerCase())) {
                // console.log('thats in the string')
                const indexNum = alphabet.indexOf(char.toLowerCase());
                alphabet.splice(indexNum,1);
                // console.log(`alphabet array is now ${alphabet}`);
            };
        };
    });
    // console.log(`this is the type at the moment: ${typeof(alphabet[0])}`)
    typeof(alphabet[0]) == 'string' ? result = 'not pangram' : result ='pangram';
    // console.log(`this is now ${alphabet[0]}`);
    return result;
};

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = pangrams(s);

    ws.write(result + '\n');

    ws.end();
}
