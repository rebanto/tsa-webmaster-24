from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

orders = []

@app.route('/api/orders', methods=['POST'])
def add_order():
    order = request.json
    orders.append(order)
    return jsonify({"message": "Order added successfully"}), 201

@app.route('/api/admin/orders', methods=['GET'])
def get_all_orders():
    return jsonify(orders)

@app.route('/api/orders/<int:order_id>', methods=['DELETE'])
def delete_order(order_id):
    if 0 <= order_id < len(orders):
        orders.pop(order_id)
        return jsonify({"message": "Order deleted successfully"}), 200
    return jsonify({"message": "Order not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)
