import os
from supabase import create_client, Client
from dotenv import load_dotenv

load_dotenv()

url: str = os.getenv("SUPABASE_URL")
key: str = os.getenv("SUPABASE_KEY")
supabase: Client = create_client(url, key)

def add_order_to_db(email: str, items: dict, completed: bool, customer_name: str):
        response = supabase.table("orders").insert({
            "email": email,
            "items": items,
            "completed": completed,
            "customer_name": customer_name
        }).execute()

        print("Supabase Response:", response)

        if response.data:
            return {"message": "Order added successfully"}
        else:
            return {"message": "Failed to add order", "error": response.error}

def get_all_from_table(table):
    response = supabase.table(table).select("*").execute()
    return response

def delete_order_from_db( email):
    response = (
        supabase.table('orders')
        .delete()
        .eq('email', email)
        .execute()
    )
    if response.data:
        return True
    return False

def add_review_to_db(review):
    response = supabase.table('reviews').insert(review).execute()
    return response.get('data', [])

def update_review_in_table(table_name, update_data, match):
    response = supabase.table(table_name).update(update_data).match(match).execute()
    return response
