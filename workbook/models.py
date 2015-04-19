from workbook.extensions import db

class SomeData(db.Model):
  id = db.Column(db.Integer, primary_key=True)
  text = db.Column(db.UnicodeText, nullable=False)