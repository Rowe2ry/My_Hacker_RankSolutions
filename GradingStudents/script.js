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
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here
    const roundedGrades = [];
    for (const grade of grades) {
        if (grade >= 98) {
            roundedGrades.push(100);
        } else if (grade > 37) {
            let gradePlus2 = grade + 2;
            let gradePlus1 = grade + 1;
            if (gradePlus2 % 5 === 0) {
                roundedGrades.push(gradePlus2);
            } else if ((gradePlus1) % 5 === 0){
                roundedGrades.push(gradePlus1);
            } else {
                // cannot round up, preserve grade as-is
                roundedGrades.push(grade);
            };
        } else {
            //console.log('triggered no round because fail on index ' + i);
            roundedGrades.push(grade);
        };  
    };
    return roundedGrades;
};

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
