# file needed for pytest-flask plugin

import pytest
from workbook import app as application
from workbook.views import *


@pytest.fixture
def app():
    return application