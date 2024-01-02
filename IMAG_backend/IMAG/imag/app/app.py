from flask import Flask,render_template,redirect
from flask_sqlalchemy import SQLAlchemy
from flask import request
import json
#from libs.db import Account, DBSession
from home import home_bp

from flask_cors import cross_origin

import os

db_url = os.environ.get("DATABASE_URL", "localhost")
db_port = os.environ.get("DATABASE_PORT", "5432")
db_user = os.environ.get("DATABASE_USER", "dbuser")
db_pwd = os.environ.get("DATABASE_PWD", "12345678")
db_name = os.environ.get("DATABASE_NAME", "imag001")

db_full_url = "postgresql://{}:{}@{}:{}/{}".format(db_user, db_pwd, db_url, db_port, db_name)

app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://dbuser:12345678@10.10.109.100:5432/imag001'
app.config['SQLALCHEMY_DATABASE_URI'] = db_full_url
db = SQLAlchemy(app)

# 蓝图
app.register_blueprint(home_bp, url_prefix='/home')


# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgres://postgres:W201314@localhost:5432/imag'

# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://dbuser:12345678@10.10.109.100:5432/imag002'
app.config['SQLALCHEMY_TRACK_MODIFICATION'] = True
app.config["SECRET_KEY"] = 'TPmi4aLWRbyVq8zu9v82dWYW1'

