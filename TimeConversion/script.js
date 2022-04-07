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
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let hours = '';
    if (s[1] != ':') {
        hours = hours.concat(s[0],s[1]);
    } else {
        console.log('this got triggered');
        hours = s[0];
    };
    let amPm = '';
    amPm = s.slice(8);
    amPm = amPm.toUpperCase();
    console.log(amPm);
    if (amPm == "AM") {
        if (hours == 12){
            hours = "00";
        };
       let newTime = s.slice(2);
        newTime.slice(5);
        hours = hours.toString();
        let output = hours.concat(newTime)
        output = output.slice(0,-2);
        return output;
    } else {
        hours = Number(hours);
        hours = hours + 12;
        if (hours == 24) {
            hours = "12";
        };
        let newTime = s.slice(2);
        newTime.slice(5);
        hours = hours.toString();
        let output = hours.concat(newTime)
        output = output.slice(0,-2);
        return output;
    };
};

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}
