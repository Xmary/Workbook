# Chapter 3: Database and requests - responses
The main content of commit 4: 007d8e46e23b5c75066bbc0791b5b262b16cb6a1

## Step 1: Database
* Create create_db.py file with db.create_all() function. This function create tables in database later.
* Create extensions.py inside workbook folder in order to define extensions of Flask (now defines [SQLAlchemy](http://www.sqlalchemy.org) extension).
* Create models.py inside workbook, which defines data models. In this example simple SomeData model is defined.
* Change setting.py to use SQLAlchemy (added SQLALCHEMY_DATABASE_URI).
* ```pip install flask-sqlalchemy```
* ```pip install psycopg2```
* Create database from terminal: 
    * Open PostgreSQL (should be installed before)
    * Create database with ```createdb workbook```
    * Create tables with ```python create_db.py```
* To check database from terminal:
    * ```psql workbook``` to pass to workbook database
    * ```\d``` to check tables
    * ```\q``` to exit from workbook database
    * ```select * from some_data;```
    * ```\d some_data``` for details about table

## Step 2: Frontend for data input and output
* Changes in home.html template
  * Angular [form](https://docs.angularjs.org/guide/forms) for input field in home.html template. Template also uses some [Twitter bootstrap](http://getbootstrap.com) syntax (like class="row"). However, Bootstrap will be added later.
  * Table with ng-repeat for output table
  * HomeCtrl controller in home.js file for sending data to backend and receiving data. 

## Step 3: Backend changes for receiving and sending data
  * Changes in views.py for receiving data from client and sending data to client (new routes /sendData and /getData)
  * ```pip install Flask-WTF``` for WTForms
  * ```pip install wtforms_alchemy```
  * Create forms.py and do some changes in settings.py (disable CSRF) and views.py for WTForms (backend validation).


