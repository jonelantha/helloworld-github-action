import * as core from "@actions/core";
import { exec } from "@actions/exec";

try {
  const exampleParam = core.getInput("example-param");
  core.info(`Here's the example param: '${exampleParam}'`);

  core.info("And now let's run the system 'date' command:");
  await exec("date");
} catch (error) {
  core.setFailed(error);
}
