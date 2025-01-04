from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

orders = []
reviews = []
pending_reviews = []

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

@app.route('/api/reviews', methods=['POST'])
def add_review():
    review = request.json
    review['id'] = len(pending_reviews) + 1 
    review['approved'] = False
    pending_reviews.append(review)
    return jsonify({"message": "Review submitted for approval"}), 201


@app.route('/api/reviews', methods=['GET'])
def get_reviews():
    return jsonify(reviews)

@app.route('/api/admin/reviews', methods=['GET'])
def get_pending_reviews():
    return jsonify(pending_reviews)

@app.route('/api/admin/reviews/<int:review_id>', methods=['PUT'])
def approve_review(review_id):
    review = next((r for r in pending_reviews if r.get('id') == review_id), None)
    
    if review:
        review['approved'] = True
        reviews.append(review)
        pending_reviews.remove(review)
        return jsonify({"message": "Review approved successfully"}), 200
    
    return jsonify({"message": "Review not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)
