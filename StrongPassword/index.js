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
 * Complete the 'minimumNumber' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. STRING password
 */

function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    const numbers = "0123456789";
    const lower_case = "abcdefghijklmnopqrstuvwxyz";
    const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const special_characters = "!@#$%^&*()-+";
    let numCount = 0;
    let lowCount = 0;
    let capCount = 0;
    let specialCount = 0;
    for (let i = 0; i < password.length; i++) {
        numCount += numbers.includes(password[i]) ? 1 : 0;
        lowCount += lower_case.includes(password[i]) ? 1 : 0;
        capCount += upper_case.includes(password[i]) ? 1 : 0;
        specialCount += special_characters.includes(password[i]) ? 1 : 0;
    };
    if (numCount > 0 && lowCount > 0 && capCount > 0 && specialCount > 0 && password.length >=6) {
        return 0
    } else if (numCount > 0 && lowCount > 0 && capCount > 0 && specialCount > 0) {
        return 6 - password.length;
    } else {
        let whatsMissing = 0;
        whatsMissing += numCount > 0 ? 0 : 1;
        whatsMissing += lowCount > 0 ? 0 : 1;
        whatsMissing += capCount > 0 ? 0 : 1;
        whatsMissing += specialCount > 0 ? 0 : 1;
        whatsMissing += password.length + whatsMissing >= 6 ? 0 : 6 - (password.length + whatsMissing);
        return whatsMissing;
    };
};

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const password = readLine();

    const answer = minimumNumber(n, password);

    ws.write(answer + '\n');

    ws.end();
}
