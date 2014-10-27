var env=require('./.env.js');
exports.config = {
  allScriptsTimeout: 60000,
  //uncomment if you want to start selenium server manually:
  //using the command: node_modules/protractor/bin/webdriver-manager start
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  multiCapabilities: [{
    'browserName': 'chrome'
  }],
  specs: ['e2e/**/*.test.js'],
  baseUrl:  env.baseUrl,

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    isVerbose : true,
    includeStackTrace : true
  }
};
