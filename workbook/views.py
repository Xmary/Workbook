
from flask import send_file, request, jsonify

from workbook import app

from workbook.models import SomeData

from workbook.forms import InputForm

from workbook.extensions import db
# route() decorators and triggered functions
# by default route answers only to GET requests


@app.route('/')
@app.route('/index.html')
def basic_pages():
    return send_file('templates/index.html')


@app.route('/getData', methods=['GET'])
def get_data():
    output = SomeData.query.all()
    return jsonify({
        'data': [{
            'id': data.id,
            'text': data.text
        } for data in output]
    })


@app.route('/sendData', methods=['POST'])
def send_data():
    input_data = request.json
    form = InputForm(data=input_data)
    if not form.validate():
        return {
            'message': 'Input form is invalid',
            'errors': form.errors
        }, 400
    new_data = SomeData(text=form.text.data)
    db.session.add(new_data)
    db.session.commit()
    return '', 204
