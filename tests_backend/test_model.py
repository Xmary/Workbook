# tests model, data requests and responces
from workbook.extensions import db
from workbook.models import SomeData
from flask import url_for, json

#checks, that data is saved to database
def test_some_data_model():
    some_data = SomeData(text="data")
    db.session.add(some_data)
    #instead of db.session.commit() doesn't save persistent changes to database
    db.session.flush()
    found_data = SomeData.query.filter_by(text='data').first()
    assert found_data.id > 0


#checks, that route /getData returns json
def test_api_endpoint(accept_json, client):
    res = client.get(url_for('get_data'), headers=accept_json)
    assert res.mimetype == 'application/json'
    assert res.status_code == 200

#checks, that server sends some data
def test_get_data(client):
    res = client.get(url_for('get_data'))
    getDataContent = res.json
    assert len(getDataContent) > 0
    #assert getDataContent == {}

def test_send_data(client):
    res = client.post(url_for('send_data'), data={'text': 'anotherData'})
    found_data = SomeData.query.filter_by(text='anotherData').first()
    assert found_data.text == 'anotherData'
    assert res.status_code == 204
    assert res.data == b''

def test_validation(client):
    res = client.post(url_for('send_data'), data={'text': ''})
    assert res.status_code == 400
    assert res.json == {'message': 'Input form is invalid', 'errors': {'text': ['This field is required.']}}
