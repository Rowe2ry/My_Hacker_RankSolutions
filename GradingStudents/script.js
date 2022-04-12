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
    //console.log('the nubmer of grades is ' + grades[0]);
    const roundedGrades = [];
    for (let i = 0; i < grades.length; i++) {
        if (grades[i] >= 98) {
            //console.log('triggered round to 100 on index: ' + i)
            roundedGrades.push(100);
        } else if (grades[i] > 37) {
            //console.log('triggered greater than 37 on index ' + i);
            let gradePlus2 = grades[i] + 2;
            let gradePlus1 = grades[i] + 1;
            if (gradePlus2 % 5 === 0) {
                //console.log('grade plus two divisible by 5 on index ' + i);
                roundedGrades.push(gradePlus2);
            } else if ((gradePlus1) % 5 === 0){
                //console.log('grade plus one divisible by 5 on index ' + i);
                roundedGrades.push(gradePlus1);
            } else {
                //console.log('cant round up on index ' + i);
                roundedGrades.push(grades[i]);
            };
        } else {
            //console.log('triggered no round because fail on index ' + i);
            roundedGrades.push(grades[i]);
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
