exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    '*.js'
  ],
  //TODO: Chrome causes problems in Travis CI, should be solved later
  capabilities: {
    'browserName': 'firefox'
  },

  baseUrl: 'http://localhost:5000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};