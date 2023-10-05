// Question 1: ES6 Features

function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject("Input is not an array.");
            return;
        }

        const result = mixedArray
        .filter(item => typeof item === 'string')
        .map(item => item.toLowerCase());

        if (result.length === 0) {
            reject("No strings found in the array.");
            return;
        }

        resolve(result);
    });
}

// Input with sample array
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']
lowerCaseWords(mixedArray)
    .then(result => console.log(result))
    .catch(error => console.log(error));
