import { baseUrl } from "./constants.js";

export const config = {
  runner: "local",
  specs: ["./tests/**/*.js"],
  exclude: [
    // 'path/to/excluded/files'
  ],
  maxInstances: 10,
  capabilities: [
    {
      browserName: "chrome",
    },
  ],
  // level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: "silent",
  // if you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,
  baseUrl: baseUrl,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["visual"],
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
