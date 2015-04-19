# Defines database and management scripts
from workbook.extensions import db
from workbook.models import *
  
db.create_all()
