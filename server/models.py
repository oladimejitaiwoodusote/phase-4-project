from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.associationproxy import association_proxy

convention = {
  "ix": "ix_%(column_0_label)s",
  "uq": "uq_%(table_name)s_%(column_0_name)s",
  "ck": "ck_%(table_name)s_%(constraint_name)s",
  "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
  "pk": "pk_%(table_name)s"
}

metadata = MetaData(naming_convention=convention)

db = SQLAlchemy(metadata=metadata)

#Verify constraints

class Owner(db.Model):

    __tablename__ = 'owners'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String)
    name = db.Column(db.String)
    username = db.Column(db.String)
    password = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), onupdate=db.func.now())

    pets = db.relationship("Pet", backref="owner")
    appointments = association_proxy("pets", "appointments")
    #Ask if Owner has one to many with appointments

    def __repr__(self):
        return f'<Owner id={self.id} name={self.name}>'

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name
        }

class Pet(db.Model):

    __tablename__ = 'pets'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    pet_type = db.Column(db.String)
    weight = db.Column(db.Integer)
    image = db.Column(db.String)
    weight = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), onupdate=db.func.now())

    owner_id = db.Column(db.Integer, db.ForeignKey("owners.id"))
    appointments = db.relationship("Appointment", backref = "pet")

    def __repr__(self):
        return f'<Pet id={self.id} name={self.name} pet_type={self.pet_type}>'

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "pet_type": self.pet_type,
            "image": self.image,
            "weight": self.weight,
            "appointments": [appointment.to_dict() for appointment in self.appointments]
        }

class Appointment(db.Model):
    __tablename__ = 'appointments'

    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), onupdate=db.func.now())

    pet_id = db.Column(db.Integer, db.ForeignKey("pets.id"))
    doctor_id = db.Column(db.Integer, db.ForeignKey("doctors.id"))

    def __repr__(self):
        return f'<Appointment id={self.id} type={self.type}>'

    def to_dict(self):
        return {
            "id": self.id,
            "type": self.type,
            "doctor": self.doctor.name
        }
    
class Doctor(db.Model):

    __tablename__ = 'doctors'

    id = db.Column(db.Integer, primary_key=True)
    hospital = db.Column(db.String)
    name = db.Column(db.String)
    username = db.Column(db.String)
    password = db.Column(db.String)
    description = db.Column(db.String)
    experience = db.Column(db.Integer)
    created_at = db.Column(db.DateTime, server_default=db.func.now())
    updated_at = db.Column(db.DateTime, server_default=db.func.now(), onupdate=db.func.now())

    appointments = db.relationship("Appointment", backref="doctor")

    #Should doctor also have a many to many with pets?

    def __repr__(self):
        return f'<Doctor id={self.id} name={self.name} hospital={self.hospital} description={self.description} experience={self.experience}>'

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "hospital": self.hospital,
            "experience": self.experience,
            "description": self.description
        }








    


