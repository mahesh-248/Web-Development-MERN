/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise(resolve=>{
        setTimeout(resolve,t*1000,"1");
    })
}

function wait2(t) {
    return new Promise(resolve=>{
        setTimeout(resolve,t*1000,"2");
    })
}

function wait3(t) {
    return new Promise(resolve=>{
        setTimeout(resolve,t*1000,"3");
    })
}

function calculateTime(t1, t2, t3) {
    const s=Date.now();
    wait1(t1).then(()=>{
        wait2(t2);
    }).then(()=>{
        wait3(t3);
    }).then(()=>{
        const e=Date.now();
        return Math.abs(e-s);
    }).catch((error)=>{
        console.log(error);
    })
}

// function wait1(t) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Promise 1 resolved after ${t} seconds`);
//     }, t * 1000);
//   });
// }

// function wait2(t) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Promise 2 resolved after ${t} seconds`);
//     }, t * 1000);
//   });
// }

// function wait3(t) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Promise 3 resolved after ${t} seconds`);
//     }, t * 1000);
//   });
// }

// function calculateTime(t1, t2, t3) {
//   const startTime = Date.now();

//   return wait1(t1)
//     .then(() => wait2(t2))
//     .then(() => wait3(t3))
//     .then(() => {
//       const endTime = Date.now();
//       return endTime - startTime;
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
// }

// Example usage
// calculateTime(2, 3, 1)
//   .then((timeTaken) => {
//     console.log(`Total time taken: ${timeTaken} milliseconds`);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   });


module.exports = calculateTime;
