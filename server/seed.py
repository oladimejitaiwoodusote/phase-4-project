from random import randint, choice as rc

from faker import Faker

from app import app
from models import db, Appointment, Doctor, Pet, Owner
from flask_bcrypt import Bcrypt

fake = Faker()
bcrypt = Bcrypt(app)

def create_owners():
    owners = []
    for _ in range(10):
        o = Owner(
            email = fake.email(),
            name=fake.name(),
            username = fake.user_name(),
            #password = fake.password()
            password = bcrypt.generate_password_hash("password").decode('utf-8')
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
            username = fake.user_name(),
            password = bcrypt.generate_password_hash("password").decode('utf-8'),
            description = fake.sentence(),
            experience = rc(range(2,20))
        )    
        doctors.append(d)
    return doctors

def create_pets(owners, doctors):
    pets = []
    types = ["Dog", "Cat", "Hamster", "Parrot"]
    images = {
        "Dog": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Retriever_in_water.jpg",
        "Cat": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg/1920px-Orange_tabby_cat_sitting_on_fallen_leaves-Hisashi-01A.jpg",
        "Hamster": "https://upload.wikimedia.org/wikipedia/commons/c/cd/Peach_the_pet_hamster.jpg",
        "Parrot": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Blue-and-Yellow-Macaw.jpg"
    }
    for _ in range(20):
        pet_type = rc(types),
        p = Pet(
            name = fake.name(),
            pet_type = pet_type[0],
            weight = rc(range(50,200)),
            image = images[pet_type[0]],
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

    