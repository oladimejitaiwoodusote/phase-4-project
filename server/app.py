from flask import Flask, request, make_response, jsonify, session
from flask_migrate import Migrate

from flask_bcrypt import Bcrypt

from models import db, Owner, Pet, Doctor, Appointment

app = Flask(__name__)
app.secret_key = b'Kj5X:IK~KTG0+$J(b.e3S5%=97xj9S'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

bcrypt = Bcrypt(app)

migrate = Migrate(app,db)

db.init_app(app)

#Check Session
@app.get('/check_session')
def check_session():
    owner_id = session.get("owner_id")
    doctor_id = session.get("doctor_id")
    current_owner = Owner.query.get(owner_id)
    current_doctor = Doctor.query.get(doctor_id)
    if current_owner:
        #return current_owner.to_dict(), 200
        return {"type": "owner", "data": current_owner.to_dict()}, 200
    elif current_doctor:
        #return current_doctor.to_dict(), 200
        return {"type": "doctor", "data": current_doctor.to_dict()}, 200
    else:
        return {'message': "Not logged in."}, 401

#Owner Login
@app.post('/ownerlogin')
def owner_login():
    json = request.json
    print(json)
    current_owner = Owner.query.where(Owner.username == json['username']).first()
    print(current_owner)
    if (current_owner and bcrypt.check_password_hash(current_owner.password, json['password'])):
        session['owner_id'] = current_owner.id
        return current_owner.to_dict(), 201
    else:
        return {'message': "Invalid username or password"}, 401

#Owner Logout
@app.delete('/owner_logout')
def owner_logout():
    session.pop('owner_id')
    return {}, 204

#Owner Create Account
@app.post('/ownercreate')
def create_account():
    json = request.json
    pw_hash = bcrypt.generate_password_hash(json['password']).decode('utf-8')
    new_owner = Owner(email=json['email'], name = json['name'], username = json['username'], password = pw_hash)
    db.session.add(new_owner)
    db.session.commit()
    session['owner_id'] = new_owner.id
    return new_owner.to_dict(), 201

#Doctor Login
@app.post('/doctorlogin')
def doctor_login():
    json = request.json
    current_doctor = Doctor.query.where(Doctor.username == json['username']).first()
    if (current_doctor and bcrypt.check_password_hash(current_doctor.password, json['password'])):
        session['doctor_id'] = current_doctor.id
        return current_doctor.to_dict(), 201
    else:
        return {'message': 'Invalid username or password'}, 401

#Doctor Logout
@app.delete('/doctor_logout')
def doctor_logout():
    session.pop('doctor_id')
    return {}, 204


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

@app.get('/owner-pets/<int:id>')
def get_owner_pets(id):
    try:
        owner = Owner.query.get(id)
        return [p.to_dict() for p in owner.pets]
    except:
        return {"error": "Owner not found"}, 404


if __name__ == '__main__':
    app.run(port=5555, debug=True)