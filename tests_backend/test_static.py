from flask import url_for

# checks if application finds basic url

def test_app(client):
  assert client.get(url_for('basic_pages')).status_code == 200