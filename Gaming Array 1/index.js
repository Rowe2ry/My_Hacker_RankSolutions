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
 * Complete the 'gamingArray' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// function gamingArray(arr) {
//     let bob = true;
//     while (arr.length > 0) {
//         const arrCopy = arr.map((a) => a);
//         const sort = arr.sort((a,b) => b-a);
//         const greatest = sort[0];
//         const position = arrCopy.indexOf(greatest);
//         arr = arrCopy.slice(0,position);
//         bob = !bob;
//     };
//     return bob ? 'ANDY' : 'BOB';
// };

// function gamingArray(arr) {
//     let bob = true;
//     while (arr.length > 0) {
//         let position =0;
//         const greatest = arr.reduce((a,b,index) => {
//             let answer = a;
//             if (a < b) {
//                 answer = b;
//                 position = index;
//             };
//             return answer;
//         });
//         arr = arr.slice(0,position);
//         bob = !bob;
//     };
//     return bob ? 'ANDY' : 'BOB';
// };

// TODO: I didn't actually write this one. The 2 commented out ones above had good logic and worked, but weren't efficient enough.
function gamingArray(arr) {
    let m = 0
    return (arr.reduce((c,v) => v>m ? (m=v, c+1) : c, 0)) % 2 ? 'BOB' : 'ANDY'
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const g = parseInt(readLine().trim(), 10);

    for (let gItr = 0; gItr < g; gItr++) {
        const arrCount = parseInt(readLine().trim(), 10);

        const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

        const result = gamingArray(arr);

        ws.write(result + '\n');
    }

    ws.end();
}
