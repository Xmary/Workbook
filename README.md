# My Workbook [![Build Status](https://travis-ci.org/Xmary/Workbook.svg?branch=master)](https://travis-ci.org/Xmary/Workbook)
This project should result in Flask-Angular boilerplate or example project, which could be used for future projects. The main goal is to write minimalist and possibly beautiful code. Links to tutorials and examples, used (or not used) in code, as well as links to official documentation, could be found from the detailed description of project development. Description is divided into chapters based on topics.

## Overall description and important information

### Tools and frameworks, used in the project

* [Flask microframework](http://flask.pocoo.org) for backend (i.e. without templates)
* [AngularJS framework](https://angularjs.org) for frontend
* [Github](https://github.com) for version control

## Possible problems with incorrect npm package installing
Use ```rm -rf node_modules/ workbook/static/bower_components/```
and ```npm install``` after that. 

## Chapters:
* [Chapter 1](docs/chapter_1.md): Creating a simple application with static page
* [Chapter 2](docs/chapter_2.md): Testing
* [Chapter 3](docs/chapter_3.md): Database and requests - responses
* [Chapter 4](docs/chapter_4.md): Test automation with Travis CI
