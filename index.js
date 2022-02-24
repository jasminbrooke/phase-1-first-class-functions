function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function hey() {};
}

function returnsAnAnonymousFunction() {
    return function(){};
}