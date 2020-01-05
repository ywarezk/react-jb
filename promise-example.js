


// how to deal with async code in JS ? 

// async code - code that jumps in the future

// Promise
// helps us deal with async code
// expose api to deal with async code


// Promise with hello world
// Promise<Response>
const timerPromise = new Promise((resolve, reject) => {
    // this function will wrap our async code

    setTimeout(() => {
        resolve('hello world');
        // reject(new Error('something happened'));
    }, 1000);
});

timerPromise.then(
    (msg) => {

    },

    (err) => {

    }
)



