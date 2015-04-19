# Commit 1

## Step 1: Install backend components
Firstly, I have installed virtual environment (Python 3.4 installed before), as it is described in [Flask Installation](http://flask.pocoo.org/docs/0.10/installation/#installation):

```
sudo pip install virtualenv
```
And after that created project folder, and installed Flask using virtual environment:

```
mkdir workbook
cd workbook
virtualenv venv
. venv/bin/activate
pip install Flask
```

## Step 2: The most important files for backend
Project has already folder venv (for virtual environment and flask). 


* /workbook (root folder)
    * /venv
    * /workbook
        * /static 
            * /home
                * home.html
            * app.css
            * app.js
        * /templates
            * index.html
        * **__init__.py (creates application and loads settings from settings.py)**
        * **settings.py (for settings, currently almost empty)**
        * **views.py (mainly for backend routes)**
    * .bowerrc
    * .gitignore
    * bower.json
    * README.md
    * **requirements.txt (to save backend dependencies, done automatically)**
    * **runserver.py (to run app)**

To create requirements.txt with needed components' versions:

```
pip freeze > requirements.txt
```

## Step 3: The most important files for frontend
Firstly, [bower package manager](http://bower.io) should be installed (npm installed globally before):

```
sudo npm install -g bower
```
This creates automatically folder node_modules in root folder with bower.
After that .bowerrc file (defines folder for bower_components) and bower.json file are created. Bower.json could be created also automatically using command ```bower init```.

To install angular and angular-ui-router:

```
bower install angular --save
bower install angular-ui-router --save
```

-- save means, that dependency is saved to bower.json (created earlier).

* /workbook (root folder)
    * /venv
    * /workbook
        * **/static (folder includes frontend part of application, apart from index.html and node_modules)**
            * **/home**
                * **home.html (template partial)**
            * **app.css (custom css file for styles)**
            * **app.js (main JS for frontend part, including frontend routes)**
        * **/templates**
            * **index.html (main template, where ng-app directive is declared)**
        * __init__.py 
        * settings.py 
        * views.py 
    * **.bowerrc (tells, where to put bower components)**
    * .gitignore
    * **bower.json (to save bower components versions, needed for frontend)**
    * README.md
    * requirements.txt
    * runserver.py

## Step 4: Run the application

```
python runserver.py
```
Check the application from 

```
http://localhost:5000/
```

## Step 5: Github
Documentation about git version control could be found [here](http://git-scm.com/doc).

Inside root folder use command

```
git init
```
Added README.md and .gitignore files to root folder.
README.md file uses [Markdown syntax](http://daringfireball.net/projects/markdown/syntax).
.gitignore lists files and folders, which should not be added to git. Rules could be found from [git documentation for gitignore](http://git-scm.com/docs/gitignore). Also some .gitignore example files could be found from [git](https://github.com/github/gitignore).

After, create repository in github and follow instructions.






