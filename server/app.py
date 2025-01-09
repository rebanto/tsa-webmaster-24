from flask import Flask, request, jsonify
from flask_cors import CORS
from supabase_client import add_order_to_db, get_all_from_table, delete_order_from_db, add_review_to_db, update_review_in_table
import datetime

app = Flask(__name__)
CORS(app)

reviews = []
pending_reviews = []

@app.route('/api/orders', methods=['POST'])
def add_order():
    order_data = request.json
    email = order_data.get('email')
    items = order_data.get('items')
    completed = order_data.get('completed', False)
    customer_name = order_data.get('name')

    response = add_order_to_db(email, items, completed, customer_name)

    return jsonify({"message": "Order added successfully", "data": response["data"]}), 201

@app.route('/api/admin/orders', methods=['GET'])
def get_all_orders():
        response = get_all_from_table("orders")

        if response.data:
            return jsonify(response.data), 200
        else:
            return jsonify({"message": "No orders found"}), 404

@app.route('/api/orders', methods=['DELETE']) # for now, this is okay. only deleting with email
def delete_order():
    data = request.get_json()

    print(data)

    email = data['email']

    result = delete_order_from_db(email)

    if result:
        return jsonify({"message": "Order deleted successfully"}), 200
    return jsonify({"message": "Order not found"}), 404

@app.route('/api/reviews', methods=['POST'])
def add_review():
    try:
        review = request.json
        review['approved'] = False
        
        result = add_review_to_db(review)
        
        return jsonify({"message": "Review submitted for approval", "data": result}), 201
    except Exception as e:
        return jsonify({"error": "Failed to submit review"}), 500

@app.route('/api/reviews', methods=['GET'])
def get_reviews():
    response = get_all_from_table("reviews")

    if response.data:
        return jsonify(response.data), 200
    else:
        return jsonify({"message": "No reviews found"}), 404

@app.route('/api/admin/reviews', methods=['PUT'])
def approve_review():
    data = request.json
    review_content = data.get('content')

    if not review_content:
        return jsonify({"message": "Review content is missing"}), 400

    response = update_review_in_table("reviews", {"approved": True}, {"content": review_content})
    if response:
        return jsonify({"message": "Review approved successfully"}), 200
    else:
        return jsonify({"message": "Review not found"}), 404

if __name__ == '__main__':
    app.run(debug=True)
