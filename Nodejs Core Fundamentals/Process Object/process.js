// Process object use for read env information, 
// we get current process information that is going on right now and whatever file we executing
//First Value is where the process start and second where the process is
// console.log(process.argv);

// // var flag = process.argv.indexOf('--user');
// // console.log(flag);

process.stdout.write("What is name: ");

process.stdin.on("data", function(answer){
    console.log(answer.toString().trim());
    process.exit()
})