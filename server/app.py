from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/api', methods=['GET'])
def hello():
    return jsonify({"message": "Hello from flask!"})

if __name__ == "__main__":
    app.run(debug=True)
