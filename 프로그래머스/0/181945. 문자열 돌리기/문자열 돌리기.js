const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [...line];
}).on('close',function(){
    for (i=0; i < input.length; i++) {
        console.log(input[i])
    }
});