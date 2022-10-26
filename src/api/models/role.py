from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Role(db.model):
    id = db.column (db.Integer, primary_key=True)
    role_name = db.Column(db.String(20), nullable=False, unique=True)

    def __repr__(self):
        return '<Role %r>' % self.id

    def serialize(self):
        return {
            "id": self.id,
            "role_name": self.role_name
        }