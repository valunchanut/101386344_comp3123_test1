// Question 2: Promises

// given script callback.js
// const delayedSuccess = () => {
//     setTimeout(() => {
//         let success = {'message' : 'delayed success!'}
//         console.log(success);
//     }, 500)
// }
//
// const delayedException = () => {
//     setTimeout(() => {
//         try {
//             throw new Error('error: delayed exception!');
//         } catch(e) {
//             console.error(e);
//         }
//     }, 500)
// }
//
// delayedSuccess()
// delayedException()

const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Resolved promise after 500ms');
        }, 500);
    });
}

const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('Rejected promise after 500ms'));
        }, 500);
    });
}

// calling and handling the new promises
resolvedPromise()
    .then(result => console.log(result))
    .catch(error => console.log(error));

rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.log(error.message));
