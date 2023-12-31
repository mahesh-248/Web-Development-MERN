/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */
function setp(milliseconds){
    return new Promise(resolve=>{
        setTimeout(resolve,milliseconds);
    })
}
async function setpt(milliseconds){
    let d=await setp(milliseconds);
    return d;
}
function sleep(milliseconds) {
    return setpt(milliseconds);
}


module.exports = sleep;
