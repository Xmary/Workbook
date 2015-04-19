#import Flask
from flask import Flask
#create application
app = Flask(__name__)
#load settings from settings.py
app.config.from_object('workbook.settings')

app.url_map.strict_slashes = False