import json
import string
import random
import os

from dynamodb_gateway import DynamodbGateway

def create_loyalty_card(event, context):
    body = json.loads(event["body"])
    # Get DDB table name from environment variable
    table_name = os.getenv("DYNAMODB_CARDS_TABLE_NAME")
    # Generate partition key
    letters = string.ascii_lowercase
    idVar = ''.join(random.choice(letters) for i in range(16))

    card = {
        "card_number": idVar,
        "customer_name": body["name"],
        "email": body["email"]
    }

    DynamodbGateway.upsert(
        table_name=table_name,
        mapping_data=[card],
        primary_keys=["card_number"]
    )
    response = {"statusCode": 200, "body": json.dumps(card)}
    return response

def get_all_loyalty_card(event, context):
    table_name = os.getenv("DYNAMODB_CARDS_TABLE_NAME")
    return_body = {}
    return_body["result"] = DynamodbGateway.scan_table(
        table_name=table_name
    )
    
    response = {"statusCode": 200, "body": json.dumps(return_body)}
    return response

def get_one_loyalty_card(event, context):
    #TODO
    return