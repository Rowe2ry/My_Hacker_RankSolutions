function missingNumbers(arr, brr) {
    // Write your code here
    arr.sort((a,b) => a-b);
    brr.sort((a,b) => a-b);
    const answers = [];
    for (let i = 0; i < brr.length; i++) {
        if (arr[0] !== brr[0]) {
            if (!answers.includes(brr[0])) {
                answers.push(brr[0]);
            };
            brr.shift();
        } else {
            arr.shift();
            brr.shift();
        };
    };
    return answers;
};

stc0arr = [203,204,205,206,207,208,203,204,205,206]
stc0brr = [203,204,204,205,206,207,205,208,203,206,205,206,204]

stc1arr = [11,4,11,7,13,4,12,11,10,14]
stc1brr = [11,4,11,7,3,7,10,13,4,8,12,11,10,14,12]

console.log(missingNumbers(stc0arr,stc0brr)); // 204, 205, 206
console.log(missingNumbers(stc1arr,stc1brr)); // 3, 7, 8, 10, 12
