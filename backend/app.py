from flask import Flask, send_from_directory, jsonify
from routes import bp as api_bp
from configure import BASE_DIR
import os

def create_app():
    app = Flask(__name__, static_folder=os.path.join(BASE_DIR, 'static'), static_url_path='/static')
    app.register_blueprint(api_bp)

    # Simple root to show the API is running and to serve an index if frontend build copied
    @app.route('/')
    def index():
        # If a frontend build exists in static/frontend, serve it
        frontend_index = os.path.join(app.static_folder, 'frontend', 'index.html')
        if os.path.exists(frontend_index):
            return send_from_directory(os.path.join(app.static_folder, 'frontend'), 'index.html')
        return jsonify({"status": "ok", "message": "Dzaleka CDSS API running. Frontend not served here (development mode)."})

    return app

if __name__ == "__main__":
    app = create_app()
    app.run(host='0.0.0.0', port=5000, debug=True)