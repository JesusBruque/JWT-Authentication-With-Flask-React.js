from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    nickname = db.Column(db.String(120), unique=True, nullable=False)
    role_id = db.Column(db.Integer, db.ForeignKey('role.id'))
    role = db.relationship(Role, backref='user')

    def __repr__(self):
        return '<User %r>' % self.User

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "nickname": self.nickname,
            "role_id": self.role_id
            # do not serialize the password, its a security breach
        }