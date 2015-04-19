import os
from workbook import app
from workbook.views import *

#to define port in heroku
def runserver():
  port = int(os.environ.get('PORT', 5000))
  app.run(host='0.0.0.0', port=port)

if __name__ == '__main__':
  #could be app.run() if portnumber not defined by runserver()
  runserver()