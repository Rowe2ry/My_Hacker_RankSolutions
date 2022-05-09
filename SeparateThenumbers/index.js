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
 * Complete the 'separateNumbers' function below.
 *
 * The function accepts STRING s as parameter.
 */

function separateNumbers(s) {
    for (let i = 1; i <= Math.floor(s.length / 2); i++) {
        const start = s.slice(0, i)
        let num = BigInt(start)
        let built = ''
        while (built.length < s.length) built += num++
        if (built === s) return console.log('YES', start)
    }
    console.log('NO')
}

function main() {
    const q = parseInt(readLine().trim(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        separateNumbers(s);
    }
}
