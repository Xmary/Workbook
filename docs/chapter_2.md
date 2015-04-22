# Chapter 2: Testing
Main content of commit 3: 1091e17e40a0d33fe8c5189b29bd44fa6c251ea7

## Step 1: Unit testing for backend
* Install [pytest](http://pytest.org/latest/getting-started.html) with ```pip install -U pytest```
* Install [pytest-flask](https://pypi.python.org/pypi/pytest-flask) plugin with ```pip install pytest-flask```
* Add [conftest.py](conftest.py) file for pytest-flask configuration
* Create folder for backend tests (/tests_backend here)
* Create basic test for static url, like [test_static.py](tests_backend/test_static.py)
* Run tests with ```py.test tests_backend/```

## Step 2: Unit testing for frontend
Karma is a test runner, which runs tests in several different browsers automatically (certainly, you should define, which browsers you want to use and install launchers for them). 
* Install [karma](http://karma-runner.github.io/0.12/index.html) test runner with ```npm install karma --save```
* Create [karma.conf.js](karma.conf.js) file with karma configuration.
* Create controller (for instance home.js) and test for it (like home_test.js).
* Define ng-controller in corresponding template (for example in home.html).
* Mention new controller in index.html.
* Add controller in app.js in stateProvider (not necessary now, but needed later)
* Run tests. Here with command npm test (command defined in karma.conf.js file the same way as in [angular-seed](https://github.com/angular/angular-seed) project).

## Step 3: End-to-End testing using [Protractor](http://angular.github.io/protractor/#/)
* Protractor installed before using package.json. Could be installed using ```npm install protractor```. Package.json also defines scripts for testing. 
* Create e2e-tests/ folder in root folder (will include protractor configuration file and end-to-end tests)
* protractor.conf.js - configuration file for protractor
* Create scenarios.js file and add some e2e tests. 
* Run application using ```python runserver.py```
* In another terminal window use ```npm run protractor``` to execute end-to-end tests.




