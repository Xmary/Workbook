module.exports = function(config){
  config.set({

    basePath : './workbook/',

    files : [
      'static/bower_components/angular/angular.js',
      'static/bower_components/angular-ui-router/release/angular-ui-router.js',
      'static/bower_components/angular-mocks/angular-mocks.js',
      'static/app.js',
      'static/components/**/*.js',
      'static/home/*.js',
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome', 'Firefox'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-safari-launcher',
            'karma-jasmine'
            ]

  });
};