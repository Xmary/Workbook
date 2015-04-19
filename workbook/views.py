
from flask import Flask

from workbook import app

#route() decorators and triggered functions
#by default route answers only to GET requests

@app.route('/')
@app.route('/index.html')
def basic_pages():
  return open('workbook/templates/index.html').read()