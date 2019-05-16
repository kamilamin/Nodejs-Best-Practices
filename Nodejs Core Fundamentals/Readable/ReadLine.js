// A wrapper around the process standard output / input object
// Instead of using process input and output 
//directly we can use readline and write in easy way

const readline = require("readline");
const util = require("util");

var RL = readline.createInterface(process.stdin, process.stdout);

RL.question("What is your Name? ", name => {
  // console.log(name);
  RL.setPrompt(`${name} How old are you? `);
  RL.prompt();
  //Setup a listener
  RL.on("line", age => {
    if (age < 18) {
      util.log(
        `${name.trim()} because you're ${age} year Old, You cannot proceed`
      );
      RL.close();
    } else {
      util.log(
        `${name.trim()} is great that your ${age} year Old, because now you can enjoy our services`
      );
      RL.close();
    }
  });
});
