
function asyncFunc1(callback) {
    setTimeout(function() {
        const result1 = "Result from asyncFunc1";
        const error1 = null;
        callback(error1, result1);
    }, 1000);
}

function asyncFunc2(input, callback) {
    setTimeout(function() {
        const result2 = "Result from asyncFunc2 with input: " + input;
        const error2 = null;
        callback(error2, result2);
    }, 1000);
}

function asyncFunc3(input, callback) {
    setTimeout(function() {
        const result3 = "Result from asyncFunc3 with input: " + input;
        const error3 = null;
        callback(error3, result3);
    }, 1000);
}




asyncFunc1(
    function(error1, result1) {
    if (error1) {
        console.error("Error in asyncFunc1:", error1);
    } else {
        asyncFunc2(result1, function(error2, result2) {
            if (error2) {
                console.error("Error in asyncFunc2:", error2);
            } else {
                asyncFunc3(result2, function(error3, result3) {
                    if (error3) {
                        console.error("Error in asyncFunc3:", error3);
                    } else {
                        console.log("Result from asyncFunc3:", result3);
                    }
                });
            }
        });
    }
});
