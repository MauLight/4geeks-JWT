from flask import Blueprint, jsonify, request
from api.models import User

bpUser = Blueprint('bpUser', __name__)

@bpUser.route('/user', methods=['POST'])
def post_new_user():
    email = request.json.get('email')
    password = request.json.get('password')

    users = User()
    users.email = email
    users.password = password
    users.save()
    return jsonify(users.serialize()), 200