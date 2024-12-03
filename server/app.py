from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

orders = []

@app.route('/api/orders', methods=['POST']) # whenever a post request is sent to the url, the orders are added to the orders array
def add_order():
    order = request.json
    orders.append(order)
    return jsonify({"message": "Order added successfully"}), 201

@app.route('/api/orders', methods=['GET']) # whenever a get request is sent to the url, the orders are returned
def get_orders():
    return jsonify(orders)

if __name__ == '__main__':
    app.run(debug=True)
