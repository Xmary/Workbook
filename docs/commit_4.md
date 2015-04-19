# Database and requests - responses

# Step 1: Database
* Create create_db.py file with db.create_all() function. 
* Create extensions.py inside workbook folder in order to define extensions of Flask (now defines SQLAlchemy).
* Create models.py inside workbook, which defines data models.
* Change setting.py to use SQLAlchemy.
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

# Step 2: Frontend for data input and output
* Changes in home.html template
  * Angular form for input field
  * Table with ng-repeat for output table
  * HomeCtrl controller for sending data to backend and receiving data. 

# Step 3: Backend changes for receiving and sending data
  * Changes in views.py for receiving data from client and sending data to client
  * ```pip install Flask-WTF```
  * ```pip install wtforms_alchemy```
  * Create forms.py and do some changes in settings.py and views.py for WTForms (backend validation)

#Step 4: Test automation with Travis
  * 


