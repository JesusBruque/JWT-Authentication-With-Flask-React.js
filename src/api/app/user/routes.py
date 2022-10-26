from flask import Flask, request, jsonify, url_for, Blueprint
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required