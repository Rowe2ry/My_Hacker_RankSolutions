function processData(input) {
    //Enter your code here
    
    let newInput = input.split('\r\n');
    //console.log(newInput.length);
    for (let i = 0; i < newInput.length; i++) {
        let thisLine = newInput[i];
        //console.log('step two: ' + newInput[i]);
        let thisLineAnalyzed = thisLine.split(';');
        if (thisLineAnalyzed[0] == 'S') {
            //console.log('condition S triggered on ' + i)
            if (thisLineAnalyzed[1] == 'M') {
                //console.log('condition M triggered on ' + i)
                thisLineAnalyzed[2] = thisLineAnalyzed[2].slice(0,-2);
            }
            thisLineAnalyzed[2].trim();
            let capitalizedIndexes = [];
            for (let j = 0; j < thisLineAnalyzed[2].length; j++) {
                //console.log('looking at: ' + thisLineAnalyzed[2] + ' and calling it ' + thisLineAnalyzed[2].length);
                if (thisLineAnalyzed[2][j] == thisLineAnalyzed[2][j].toUpperCase()) {
                    capitalizedIndexes.push(j);
                    //console.log('the capitalized letters are: ' + capitalizedIndexes + ' at index ' + i);
                };
            };
            let loopIterationCompensator= 0;    
            for (let j = 0; j < capitalizedIndexes.length; j++) {
                let sectionLength = capitalizedIndexes[j] + loopIterationCompensator;
                newInput[i] = thisLineAnalyzed[2].slice(0, sectionLength) + ' ' + thisLineAnalyzed[2].slice(capitalizedIndexes[j]);
                newInput[i] = newInput[i].toLowerCase();
                //console.log('what Ive got right now is: ' + newInput[i]);
                if (capitalizedIndexes[j] != 0) {
                    loopIterationCompensator++;
                };
            };
        };    
        if (thisLineAnalyzed[0] == 'C') {
            let sections = thisLineAnalyzed[2].split(' ');
            let tempOutput = sections[0];
            for (let j = 1; j < sections.length; j++) {
                sections[j] = sections[j].charAt(0).toUpperCase() + sections[j].slice(1);
                tempOutput = tempOutput.concat(sections[j]);
            };
            if (thisLineAnalyzed[1] == 'C') {
                tempOutput = tempOutput.charAt(0).toUpperCase() + tempOutput.slice(1);
            };
            if (thisLineAnalyzed[1] == 'M') {
                tempOutput = tempOutput.concat("()");
            };
            newInput[i] = tempOutput;
        };
    };
    for (let i = 0; i < newInput.length; i++) {
        console.log(newInput[i]);
    };
};

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
