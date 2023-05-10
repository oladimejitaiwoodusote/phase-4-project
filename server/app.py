from flask import Flask, request, make_response, jsonify
from flask_migrate import Migrate

from models import db, Owner, Pet, Doctor, Appointment

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

migrate = Migrate(app,db)

db.init_app(app)

@app.route('/')
def home():
    return ''

@app.get('/doctors/<int:id>')
def get_doctor_appts(id):
    try:
        doctor = Doctor.query.get(id)
        return [a.to_dict() for a in doctor.appointments]
    except:
        return {"error": "Doctor not found"}, 404


if __name__ == '__main__':
    app.run(port=5555, debug=True)