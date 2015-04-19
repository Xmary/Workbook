#Configuration file
import os

#TODO: change in production
DEBUG = True
SQLALCHEMY_DATABASE_URI = os.environ.get('DATABASE_URL', 'postgresql://localhost/workbook')
WTF_CSRF_ENABLED = False
