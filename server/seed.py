from random import randint, choice as rc

from faker import Faker

from app import app
from models import db, Appointment, Doctor, Pet, Owner

fake = Faker()

def create_owners():
    owners = []
    for _ in range(10):
        o = Owner(
            name=fake.name(),
            username = fake.name(),
            password = fake.name()
        )
        owners.append(o)
    
    return owners

def create_doctors():
    doctors = []
    hospitals = ["St. Judes", "St. Ides Heaven", "Whips Cross"]
    for _ in range(5):
        d = Doctor(
            name = fake.name(),
            hospital = rc(hospitals),
            username = fake.name(),
            password = fake.name(),
            description = fake.sentence(),
            experience = rc(range(2,20))
        )    
        doctors.append(d)
    return doctors

def create_pets(owners, doctors):
    pets = []
    types = ["Dog", "Cat", "Hamster", "Parrot"]
    for _ in range(20):
        p = Pet(
            name = fake.name(),
            pet_type = rc(types),
            owner_id = rc([owner.id for owner in owners]),
            doctor_id = rc([doctor.id for doctor in doctors])
        )
        pets.append(p)
    return pets

def create_appointments(pets, doctors, owners):
    appointments = []
    types = ["Check Up", "Shot", "Blood Work"]
    
    for _ in range(50):
        a = Appointment(
            type = rc(types),
            pet_id = rc([pet.id for pet in pets]),
            doctor_id = rc([doctor.id for doctor in doctors]),
            owner_id = rc([owner.id for owner in owners])
        )
        appointments.append(a)
    return appointments

if __name__ == "__main__":

    with app.app_context():
        Owner.query.delete()
        Doctor.query.delete()
        Pet.query.delete()
        Appointment.query.delete()

        owners = create_owners()
        db.session.add_all(owners)
        db.session.commit()

        doctors = create_doctors()
        db.session.add_all(doctors)
        db.session.commit()

        pets = create_pets(owners, doctors)
        db.session.add_all(pets)
        db.session.commit()

        appointments = create_appointments(pets, doctors, owners)
        db.session.add_all(appointments)
        db.session.commit()

    