from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
from supabase_client import add_order_to_db, get_all_from_table, delete_order_from_db, add_review_to_db, update_review_in_table, delete_review_from_db
import datetime

app = Flask(__name__, static_folder='../client/build', static_url_path='/')
CORS(app)

reviews = []
pending_reviews = []

@app.route('/', methods=['GET'])
def serve():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/api/orders', methods=['POST'])
def add_order():
    order_data = request.json
    email = order_data['email']
    items = order_data['items']
    completed = False
    customer_name = order_data['name']
    response = add_order_to_db(email, items, completed, customer_name)
    
    return jsonify({"message": "order added successfully"}), 201


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
    review = request.json
    review['approved'] = False
        
    result = add_review_to_db(review)
        
    return jsonify({"message": "Review submitted for approval", "data": result}), 201

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
    review_content = data['content']

    response = update_review_in_table("reviews", {"approved": True}, {"content": review_content})
    return jsonify({"message": "Review approved successfully"}), 200



@app.route('/api/reviews', methods=['DELETE'])
def delete_review():
    data = request.get_json()
    print(data)

    content = data['content']
    result = delete_review_from_db(content)

    return jsonify({"message": "Review deleted successfully"}), 200


if __name__ == '__main__':
    app.run(debug=True)
