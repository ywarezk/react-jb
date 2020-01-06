
let instance = null;

class SingleTonExample {

    static getInstance(hello) {
        if (!instance) {
            instance = new SingleTonExample(hello);
        } 
        return instance;
    }

    constructor(hello) {
        this.hello = hello;

        // if i wasnt called from getInstance then throw error
    }
}

const singleInstance = SingleTonExample.getInstance('world');