var i = 0;

function testFunction() {
    i++;
    postMessage(i);
    setTimeout("testFunction()", 500);
    if(typeof(w) === undefined) {
        w = new Worker("main.js")
    }
}

testFunction();