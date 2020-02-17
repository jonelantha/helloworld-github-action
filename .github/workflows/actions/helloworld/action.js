const core = require("@actions/core");
const { exec } = require("@actions/exec");

async function exampleAction() {
  const exampleParam = core.getInput("example-param");
  console.log(`Here's the example param: '${exampleParam}'`);

  console.log("And now let's run the system 'date' command:"); 
  await exec("date");
}

exampleAction()
  .catch(error => core.setFailed(error.message));