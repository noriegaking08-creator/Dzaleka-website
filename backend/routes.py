import os
import json
from datetime import datetime
from flask import Blueprint, jsonify, request, current_app, send_from_directory
from flask_cors import cross_origin
from configure import STATIC_IMAGES_DIR, CONTACTS_FILE
from data import ACHIEVEMENTS, SUPPORTERS, GALLERY, ABOUT

bp = Blueprint('api', __name__, url_prefix='/api')


@bp.route('/about', methods=['GET'])
@cross_origin()
def about():
    return jsonify({"status": "ok", "data": ABOUT})


@bp.route('/achievements', methods=['GET'])
@cross_origin()
def achievements():
    return jsonify({"status": "ok", "data": ACHIEVEMENTS})


@bp.route('/supporters', methods=['GET'])
@cross_origin()
def supporters():
    return jsonify({"status": "ok", "data": SUPPORTERS})


@bp.route('/gallery', methods=['GET'])
@cross_origin()
def gallery():
    # Return file URLs relative to server root for frontend to display e.g. /static/images/image1.jpg
    host = request.host_url.rstrip('/')
    images = []
    for g in GALLERY:
        images.append({
            "id": g["id"],
            "url": f"{host}/static/images/{g['file']}",
            "caption": g.get("caption", "")
        })
    return jsonify({"status": "ok", "data": images})


import threading

# Lock for thread-safe file operations
contact_file_lock = threading.Lock()

@bp.route('/contact', methods=['POST'])
@cross_origin()
def contact():
    data = request.get_json() or {}
    name = data.get('name')
    email = data.get('email')
    phone = data.get('phone')
    message = data.get('message')

    if not name or not message:
        return jsonify({"status": "error", "message": "Name and message are required."}), 400

    submission = {
        "name": name,
        "email": email,
        "phone": phone,
        "message": message,
        "timestamp": datetime.now().isoformat()
    }

    # Thread-safe append to contacts file
    with contact_file_lock:
        contacts = []
        if os.path.exists(CONTACTS_FILE):
            try:
                with open(CONTACTS_FILE, 'r', encoding='utf-8') as f:
                    contacts = json.load(f)
            except (json.JSONDecodeError, FileNotFoundError):
                contacts = []

        contacts.append(submission)

        with open(CONTACTS_FILE, 'w', encoding='utf-8') as f:
            json.dump(contacts, f, indent=2, ensure_ascii=False)

    # For demo: simply respond OK. In production you may email or integrate.
    return jsonify({"status": "ok", "message": "Thank you — your message has been received."})