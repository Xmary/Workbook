from workbook import app

from flask.ext.sqlalchemy import SQLAlchemy

#bind to database
db = SQLAlchemy(app)