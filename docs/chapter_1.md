# Chapter 1: Creating a simple application with static page
The main content could be found in commit 1: e0d69a7f0349f02ded0fdfa20f5df90528dec4b1 and commit 2: 5dc399b7ec688aed1469949d3721a275f24e3cb8

## Step 1: Install backend components
Firstly, install virtual environment (Python 3.4 installed before), as it is described in [Flask Installation](http://flask.pocoo.org/docs/0.10/installation/#installation):

```
sudo pip install virtualenv
```
And after that create project folder, and install Flask using virtual environment:

```
mkdir workbook
cd workbook
virtualenv venv
. venv/bin/activate
pip install Flask
```

## Step 2: The most important files for backend
Project has already folder venv (for virtual environment and flask). Also some other folders and files will be created automatically, and they are not mentioned here.

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
        * **\_\_init\_\_.py (creates application and loads settings from settings.py)**
        * **settings.py (for settings, currently only debug mode is true)**
        * **views.py (mainly for backend routes)**
    * .bowerrc
    * .gitignore
    * bower.json
    * README.md
    * **requirements.txt (to save backend dependencies, done automatically)**
    * **runserver.py (to run app)**

To create requirements.txt with needed components' versions, firstly all other files should be written, and after that use command:

```
pip freeze > requirements.txt
```
This command will be used also later, so that requirements are up to date.

## Step 3: The most important files for frontend
Firstly, [npm - Node package manager](https://www.npmjs.com) should be installed.
Secondly, [package.json](package.json) file should be created in order to save package dependencies. 
Thirdly, [bower package manager](http://bower.io) should be installed:

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
                * **home.html (example template partial)**
            * **app.css (custom css file for styles)**
            * **app.js (main JS for frontend part, including frontend routes)**
        * **/templates**
            * **index.html (main template, where ng-app directive is declared)**
        * \_\_init\_\_.py 
        * settings.py 
        * views.py 
    * **.bowerrc (tells, where to put bower components)**
    * .gitignore
    * **bower.json (to save bower components' versions, needed for frontend)**
    * README.md
    * requirements.txt
    * runserver.py

## Step 4: Run the application

```
python runserver.py
```
Check the application from:

```
http://localhost:5000/
```

## Step 5: Github
[Github](https://github.com) is a Git repository hosting service.
Documentation about git version control could be found [here](http://git-scm.com/doc). And [here](https://training.github.com/kit/downloads/github-git-cheat-sheet.pdf) Git cheat sheet with useful commands.

Inside root folder use command

```
git init
```
Added README.md and .gitignore files to root folder.
README.md file uses [Markdown syntax](http://daringfireball.net/projects/markdown/syntax).
.gitignore lists files and folders, which should not be added to git. Rules could be found from [git documentation for gitignore](http://git-scm.com/docs/gitignore). Also some .gitignore example files could be found from [git](https://github.com/github/gitignore).

After, create repository in github and follow instructions.






